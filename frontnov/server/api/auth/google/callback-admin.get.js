// server/api/auth/google/callback-admin.get.js
import { google } from 'googleapis'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const code = query.code
  const establecimientoId = query.state

  console.log('📥 CALLBACK ADMIN recibido')
  console.log('Establecimiento ID:', establecimientoId)

  if (!code && !establecimientoId) {
    return sendRedirect(event, '/citas')
  }

  if (!code) {
    return sendRedirect(event, '/citas?error=no_code')
  }

  if (!establecimientoId) {
    return sendRedirect(event, '/citas?error=no_establecimiento')
  }

  try {
    const host = getRequestHeader(event, 'host')
    const redirectUri = `http://${host}/api/auth/google/callback-admin`

    const oauth2Client = new google.auth.OAuth2(
      config.public.googleClientId,
      config.googleClientSecret,
      redirectUri
    )

    console.log('🔄 Intercambiando código por tokens...')
    const { tokens } = await oauth2Client.getToken(code)
    
    console.log('✅ Tokens obtenidos')

    // 1️⃣ Guardar en cookie (para el admin)
    setCookie(event, 'google_tokens', JSON.stringify({
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
      expiry_date: tokens.expiry_date,
      establecimientoId
    }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax',
      path: '/'
    })

    console.log('✅ Cookie guardada')

    // 2️⃣ Guardar en Strapi v3
    if (tokens.refresh_token) {
      try {
        // ✅ STRAPI V3: Sin /api/ y sin wrapper "data"
        const strapiUrl = 'http://localhost:1337'
        const apiUrl = `${strapiUrl}/establecimientos/${establecimientoId}`
        
        console.log('💾 Guardando en Strapi v3...')
        console.log('   URL:', apiUrl)

        const updateResponse = await fetch(apiUrl, {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            // ✅ STRAPI V3: Sin wrapper "data"
            googleRefreshToken: tokens.refresh_token,
            googleCalendarEmail: 'primary',
            googleCalendarSyncEnabled: true
          })
        })

        console.log('📡 Response status:', updateResponse.status)

        if (!updateResponse.ok) {
          const errorText = await updateResponse.text()
          console.error('❌ Strapi error:', errorText)
          throw new Error(`Strapi error: ${updateResponse.status}`)
        }

        const result = await updateResponse.json()
        console.log('✅ Guardado en Strapi v3 exitosamente')
        console.log('   Resultado:', result)
        
      } catch (strapiError) {
        console.error('❌ ERROR guardando en Strapi:')
        console.error('   Mensaje:', strapiError.message)
        console.error('   Causa:', strapiError.cause?.code)
        
        // Si es ECONNREFUSED, Strapi no está corriendo
        if (strapiError.cause?.code === 'ECONNREFUSED') {
          console.error('   ❌ STRAPI NO ESTÁ CORRIENDO en localhost:1337')
        }
      }
    }

    console.log('✅ Proceso completado - Redirigiendo')
    return sendRedirect(event, '/citas?google_auth=success')

  } catch (error) {
    console.error('❌ Error en callback:', error.message)
    return sendRedirect(event, '/citas?error=auth_failed')
  }
})