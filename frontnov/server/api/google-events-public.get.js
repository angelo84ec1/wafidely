export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const query = getQuery(event)
    const establishmentId = query.establishment
    
    if (!establishmentId) {
      return { events: [] }
    }
  
    try {
      // Obtener eventos guardados en tu base de datos
      const response = await fetch(`${config.public.baseURL}/google-calendar-events?establishment=${establishmentId}`)
      
      if (!response.ok) {
        return { events: [] }
      }
  
      const data = await response.json()
      return { events: data || [] }
      
    } catch (error) {
      console.error('Error:', error)
      return { events: [] }
    }
  })     