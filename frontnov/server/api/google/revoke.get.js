export default defineEventHandler(async (event) => {
    try {
      console.log('🗑️ Revocando sesión de Google...')
      
      // Leer token desde cookie
      const cookieTokens = getCookie(event, 'google_tokens')
      
      if (!cookieTokens) {
        return { success: false, message: 'No hay tokens para revocar' }
      }
  
      const tokens = JSON.parse(cookieTokens)
      
      // Revocar el token en Google
      if (tokens.access_token) {
        await fetch(`https://oauth2.googleapis.com/revoke?token=${tokens.access_token}`, {
          method: 'POST'
        })
      }
      
      // Eliminar cookie local
      deleteCookie(event, 'google_tokens')
      
      console.log('✅ Sesión de Google revocada')
      
      return { success: true, message: 'Sesión revocada correctamente' }
      
    } catch (error) {
      console.error('Error al revocar:', error)
      
      // Aunque falle la revocación en Google, eliminar la cookie local
      deleteCookie(event, 'google_tokens')
      
      return { success: true, message: 'Cookie eliminada localmente' }
    }
  })