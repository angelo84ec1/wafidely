import { google } from 'googleapis'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const code = query.code
  const establecimientoId = query.state // Pasaremos el ID por URL

  console.log('📥 Callback recibido para establecimiento:', establecimientoId)

  if (!code) {
    return sendRedirect(event, '/citas?error=no_code')
  }

  try {
    const host = getRequestHeader(event, 'host')
    const redirectUri = host?.includes('localhost')
      ? `http://${host}/api/auth/google/callback`
      : config.public.googleRedirectUri

    const oauth2Client = new google.auth.OAuth2(
      config.public.googleClientId,
      config.googleClientSecret,
      redirectUri
    )

    const { tokens } = await oauth2Client.getToken(code)
    
    setCookie(event, 'google_token', JSON.stringify(tokens), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax'
    })

    // Guardar en Strapi si hay refresh_token y establecimientoId
    if (tokens.refresh_token && establecimientoId) {
      await fetch(`${config.public.baseURL}/establecimientos/${establecimientoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          googleRefreshToken: tokens.refresh_token,
          googleCalendarEmail: 'websecuador.net@gmail.com',
          googleCalendarSyncEnabled: true
        })
      })
      
      console.log('✅ Token guardado en establecimiento:', establecimientoId)
    }

    return sendRedirect(event, '/citas?google_auth=success')

  } catch (error) {
    console.error('❌ Error:', error.message)
    return sendRedirect(event, '/citas?error=auth_failed')
  }
})