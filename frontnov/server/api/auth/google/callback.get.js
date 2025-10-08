import { google } from 'googleapis'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const code = query.code
  const establecimientoId = query.state

  console.log('=' .repeat(60))
  console.log('📥 CALLBACK RECIBIDO')
  console.log('=' .repeat(60))
  console.log('Query params:', query)
  console.log('Establecimiento ID:', establecimientoId)
  console.log('Code:', code ? 'Sí presente' : 'NO PRESENTE')

  if (!code) {
    console.error('❌ ERROR: No se recibió código de autorización')
    return sendRedirect(event, '/citas?error=no_code')
  }

  if (!establecimientoId) {
    console.error('❌ ERROR: No se recibió establecimiento ID')
    return sendRedirect(event, '/citas?error=no_establecimiento')
  }

  try {
    // 1. Configurar redirect URI
    const host = getRequestHeader(event, 'host')
    const redirectUri = host?.includes('localhost')
      ? `http://${host}/api/auth/google/callback`
      : config.public.googleRedirectUri

    console.log('🔗 Redirect URI:', redirectUri)
    console.log('🔑 Client ID:', config.public.googleClientId ? 'Presente' : 'FALTA')
    console.log('🔐 Client Secret:', config.googleClientSecret ? 'Presente' : 'FALTA')

    // 2. Crear cliente OAuth2
    const oauth2Client = new google.auth.OAuth2(
      config.public.googleClientId,
      config.googleClientSecret,
      redirectUri
    )

    // 3. Intercambiar código por tokens
    console.log('🔄 Intercambiando código por tokens...')
    
    const { tokens } = await oauth2Client.getToken(code)
    
    console.log('✅ Tokens obtenidos:')
    console.log('  - Access token:', tokens.access_token ? 'Sí' : 'No')
    console.log('  - Refresh token:', tokens.refresh_token ? 'Sí' : 'No')
    console.log('  - Expiry date:', tokens.expiry_date)

    if (!tokens.refresh_token) {
      console.warn('⚠️ ADVERTENCIA: No se recibió refresh_token')
      console.warn('   Esto puede ocurrir si ya autorizaste antes.')
      console.warn('   Solución: Revoca el acceso en https://myaccount.google.com/permissions')
    }

    // 4. Guardar en Strapi
    if (tokens.refresh_token && establecimientoId) {
      const strapiUrl = config.public.baseURL
      const apiUrl = `${strapiUrl}/establecimientos/${establecimientoId}`
      
      console.log('💾 Guardando en Strapi...')
      console.log('   URL:', apiUrl)

      try {
        const updateResponse = await $fetch(apiUrl, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: {
            googleRefreshToken: tokens.refresh_token,
            googleCalendarEmail: 'primary',
            googleCalendarSyncEnabled: true
          }
        })
        
        console.log('✅ Guardado exitoso en Strapi')
        console.log('   Response:', updateResponse)
      } catch (strapiError) {
        console.error('❌ ERROR al guardar en Strapi:')
        console.error('   Status:', strapiError.statusCode)
        console.error('   Message:', strapiError.message)
        console.error('   Data:', strapiError.data)
        throw strapiError
      }
    } else {
      console.warn('⚠️ No se guardó en Strapi:')
      console.warn('   Refresh token:', tokens.refresh_token ? 'Sí' : 'NO')
      console.warn('   Establecimiento ID:', establecimientoId || 'NO')
    }

    console.log('✅ CALLBACK COMPLETADO - Redirigiendo a /citas?google_auth=success')
    console.log('=' .repeat(60))
    
    return sendRedirect(event, '/citas?google_auth=success')

  } catch (error) {
    console.error('=' .repeat(60))
    console.error('❌ ERROR EN CALLBACK:')
    console.error('=' .repeat(60))
    console.error('Tipo:', error.constructor.name)
    console.error('Mensaje:', error.message)
    console.error('Stack:', error.stack)
    
    if (error.response) {
      console.error('Response status:', error.response.status)
      console.error('Response data:', error.response.data)
    }
    
    console.error('=' .repeat(60))
    
    return sendRedirect(event, '/citas?error=auth_failed')
  }
})