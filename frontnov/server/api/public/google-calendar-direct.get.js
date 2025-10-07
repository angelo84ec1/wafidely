// server/api/public/google-calendar-direct.get.js
// Consulta Google Calendar directamente sin guardar en Strapi

import { google } from 'googleapis'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const establecimientoId = query.establecimientoId

  if (!establecimientoId) {
    return { 
      error: 'Se requiere establecimientoId',
      events: [],
      authenticated: false 
    }
  }

  try {
    console.log(`🔍 Consultando Google Calendar para establecimiento: ${establecimientoId}`)

    // 1️⃣ ÚNICA llamada a Strapi: obtener credenciales del establecimiento
    const strapiUrl = config.public.baseURL
    const establecimientoResponse = await fetch(
      `${strapiUrl}/establecimientos/${establecimientoId}`,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )

    if (!establecimientoResponse.ok) {
      throw new Error('No se pudo obtener el establecimiento')
    }

    const establecimiento = await establecimientoResponse.json()

    // Verificar configuración de Google Calendar
    if (!establecimiento.googleRefreshToken) {
      console.log('⚠️ Este establecimiento no tiene Google Calendar sincronizado')
      return { 
        error: 'Google Calendar no está sincronizado',
        events: [],
        authenticated: false,
        needsSetup: true
      }
    }

    if (!establecimiento.googleCalendarSyncEnabled) {
      console.log('⚠️ La sincronización está deshabilitada')
      return { 
        error: 'Sincronización deshabilitada',
        events: [],
        authenticated: false,
        needsSetup: false
      }
    }

    // 2️⃣ Configurar cliente OAuth2 con el refresh token
    const oauth2Client = new google.auth.OAuth2(
      config.public.googleClientId,
      config.googleClientSecret,
      config.public.googleRedirectUri
    )

    oauth2Client.setCredentials({
      refresh_token: establecimiento.googleRefreshToken
    })

    // 3️⃣ Consultar Google Calendar API directamente
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client })

    const now = new Date()
    const endDate = new Date()
    endDate.setMonth(endDate.getMonth() + 3) // Próximos 3 meses

    console.log(`📅 Obteniendo eventos desde ${now.toISOString()} hasta ${endDate.toISOString()}`)

    const response = await calendar.events.list({
      calendarId: establecimiento.googleCalendarEmail || 'primary',
      timeMin: now.toISOString(),
      timeMax: endDate.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
      maxResults: 250
    })

    // 4️⃣ Formatear eventos para el frontend
    const events = response.data.items
      .filter(event => event.start) // Solo eventos con fecha
      .map(event => {
        const start = event.start.dateTime || event.start.date
        const end = event.end.dateTime || event.end.date
        
        return {
          id: `google-${event.id}`,
          googleId: event.id,
          title: event.summary || 'Sin título',
          description: event.description || '',
          start: start,
          end: end,
          location: event.location || '',
          source: 'google',
          isAllDay: !event.start.dateTime, // true si es evento de día completo
          // Información adicional útil
          status: event.status, // confirmed, tentative, cancelled
          attendees: event.attendees?.length || 0,
          organizer: event.organizer?.email || ''
        }
      })

    console.log(`✅ ${events.length} eventos obtenidos directamente de Google Calendar`)

    return { 
      events,
      authenticated: true,
      count: events.length,
      calendarEmail: establecimiento.googleCalendarEmail || 'primary',
      lastSync: new Date().toISOString()
    }

  } catch (error) {
    console.error('❌ Error al consultar Google Calendar:', error)
    
    // Diferenciar tipos de errores
    if (error.code === 401) {
      return {
        error: 'Token expirado. Por favor vuelve a sincronizar.',
        events: [],
        authenticated: false,
        needsReauth: true
      }
    }

    return { 
      error: error.message,
      events: [],
      authenticated: false
    }
  }
})