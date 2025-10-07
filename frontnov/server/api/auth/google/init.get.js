export default defineEventHandler((event) => {
    const config = useRuntimeConfig()
    const query = getQuery(event)
    const establecimientoId = query.establecimientoId
    
    if (!establecimientoId) {
      return { error: 'Se requiere establecimientoId' }
    }
    
    const host = getRequestHeader(event, 'host')
    const redirectUri = host?.includes('localhost')
      ? `http://${host}/api/auth/google/callback`
      : config.public.googleRedirectUri
    
    // ✅ Agregado prompt=consent al final
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${config.public.googleClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=https://www.googleapis.com/auth/calendar.readonly&access_type=offline&prompt=consent&state=${establecimientoId}`
    
    return sendRedirect(event, authUrl)
  })