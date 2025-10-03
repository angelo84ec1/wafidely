import { google } from 'googleapis'

export default defineEventHandler(async (event) => {
  console.log('=== CALLBACK INICIADO ===')
  
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const code = query.code

  console.log('Code recibido:', code ? 'Sí' : 'No')
  console.log('Client ID:', config.public.googleClientId)
  console.log('Redirect URI:', config.public.googleRedirectUri)

  if (!code) {
    console.error('No se recibió código')
    return sendRedirect(event, '/citas?error=no_code')
  }

  try {
    const oauth2Client = new google.auth.OAuth2(
      config.public.googleClientId,
      config.googleClientSecret,
      config.public.googleRedirectUri
    )

    console.log('Intercambiando código por tokens...')
    const { tokens } = await oauth2Client.getToken(code)
    console.log('Tokens obtenidos exitosamente')
    
    setCookie(event, 'google_token', JSON.stringify(tokens), {
      httpOnly: true,
      secure: false, // false para desarrollo local
      maxAge: 60 * 60 * 24 * 30,
      sameSite: 'lax',
      path: '/'
    })

    console.log('Cookie establecida, redirigiendo...')
    return sendRedirect(event, '/citas?google_auth=success')
  } catch (error) {
    console.error('ERROR EN CALLBACK:', error.message)
    console.error('Stack:', error.stack)
    return sendRedirect(event, '/citas?error=auth_failed')
  }
})