export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const baseURL = config.public.baseURL
    
    console.log('📍 Base URL:', baseURL)
    
    try {
      console.log('🔔 Verificando citas para recordatorios...')
      
      // 1️⃣ Obtener todas las citas
      const citasURL = `${baseURL}/citas`
      console.log('🌐 Llamando a:', citasURL)
      
      const citasResponse = await fetch(citasURL, {
        headers: { 'Content-Type': 'application/json' }
      })
  
      console.log('📡 Status:', citasResponse.status, citasResponse.statusText)
  
      if (!citasResponse.ok) {
        const errorText = await citasResponse.text()
        console.error('❌ Error response:', errorText)
        throw new Error(`Error ${citasResponse.status}: ${errorText}`)
      }
  
      const todasLasCitas = await citasResponse.json()
      console.log(`📋 Total de citas: ${todasLasCitas.length}`)
  
      // 2️⃣ Filtrar citas sin recordatorio
      const citas = todasLasCitas.filter(c => !c.reminderSent)
      console.log(`📋 Sin recordatorio enviado: ${citas.length}`)
      
      if (citas.length > 0) {
        console.log('📋 Primeras 5 citas sin recordatorio:')
        citas.slice(0, 5).forEach(c => {
          console.log(`  - ${c.name}: ${c.date} ${c.hour}`)
        })
      }
  
      // 3️⃣ Definir ventana de tiempo (50-60 minutos desde ahora)
      const now = new Date()
      const oneHourFromNow = new Date(now.getTime() + 60 * 60 * 1000)
      const fiftyMinutesFromNow = new Date(now.getTime() + 50 * 60 * 1000)
  
      console.log(`⏰ Hora actual: ${now.toLocaleString('es-EC', { timeZone: 'America/Guayaquil' })}`)
      console.log(`⏰ Ventana de recordatorios:`)
      console.log(`   Desde: ${fiftyMinutesFromNow.toLocaleString('es-EC', { timeZone: 'America/Guayaquil' })}`)
      console.log(`   Hasta: ${oneHourFromNow.toLocaleString('es-EC', { timeZone: 'America/Guayaquil' })}`)
  
      // 4️⃣ Filtrar citas en la ventana de tiempo
      const citasToRemind = citas.filter(cita => {
        if (!cita.date || !cita.hour) {
          console.log(`⚠️  ${cita.name}: Sin fecha u hora`)
          return false
        }
  
        try {
          // Parsear fecha y hora
          const [year, month, day] = cita.date.split('-').map(Number)
          const [hours, minutes] = cita.hour.split(':').map(Number)
          
          // Crear fecha en zona horaria de Ecuador
          const citaDateTime = new Date(year, month - 1, day, hours, minutes)
  
          // Debug: mostrar la fecha de la cita
          const citaDateStr = citaDateTime.toLocaleString('es-EC', { timeZone: 'America/Guayaquil' })
          
          // Verificar si está en la ventana
          const inWindow = citaDateTime >= fiftyMinutesFromNow && citaDateTime <= oneHourFromNow
  
          // Si está cerca del día actual, mostrar más detalles
          const isToday = citaDateTime.toDateString() === now.toDateString()
          if (isToday) {
            console.log(`  📅 ${cita.name}: ${citaDateStr} - ${inWindow ? '✅ En ventana' : '❌ Fuera de ventana'}`)
          }
  
          return inWindow
        } catch (error) {
          console.error(`❌ Error parseando fecha de ${cita.name}:`, error.message)
          return false
        }
      })
  
      console.log(`📨 Recordatorios a enviar: ${citasToRemind.length}`)
  
      // 5️⃣ Mostrar detalles de citas a recordar
      if (citasToRemind.length > 0) {
        console.log('📤 Citas para enviar recordatorio:')
        citasToRemind.forEach(c => {
          console.log(`  ✓ ${c.name} - ${c.date} ${c.hour}`)
        })
      } else {
        console.log('ℹ️  No hay citas en la ventana de tiempo actual')
        
        // Mostrar las próximas citas
        const futurasCitas = citas
          .filter(c => c.date && c.hour)
          .map(c => {
            const [year, month, day] = c.date.split('-').map(Number)
            const [hours, minutes] = c.hour.split(':').map(Number)
            const citaDateTime = new Date(year, month - 1, day, hours, minutes)
            return { ...c, citaDateTime }
          })
          .filter(c => c.citaDateTime > now)
          .sort((a, b) => a.citaDateTime - b.citaDateTime)
          .slice(0, 3)
  
        if (futurasCitas.length > 0) {
          console.log('📅 Próximas 3 citas programadas:')
          futurasCitas.forEach(c => {
            const timeStr = c.citaDateTime.toLocaleString('es-EC', { timeZone: 'America/Guayaquil' })
            const diffMinutes = Math.floor((c.citaDateTime - now) / (1000 * 60))
            console.log(`  - ${c.name}: ${timeStr} (en ${diffMinutes} minutos)`)
          })
        }
      }
  
      let sent = 0
      let failed = 0
  
      // 6️⃣ Enviar recordatorios
      for (const cita of citasToRemind) {
        try {
          // Formatear fecha legible
          const [year, month, day] = cita.date.split('-')
          const months = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
          ]
          const fechaLegible = `${day} de ${months[parseInt(month) - 1]} de ${year}`
  
          // Mensaje personalizado
          const message = `🔔 *Recordatorio de Cita*
  
  Hola ${cita.name},
  
  Te recordamos tu cita programada para:
  📅 Fecha: ${fechaLegible}
  🕐 Hora: ${cita.hour}
  
  ¡Te esperamos!`
  
          // Limpiar número de WhatsApp
          const phoneNumber = cita.whatsapp.replace(/[\s\-\(\)]/g, '')
          
          // Validar formato del número
          if (!/^\+?\d{10,15}$/.test(phoneNumber)) {
            console.log(`⚠️  ${cita.name}: Número inválido (${phoneNumber})`)
            failed++
            continue
          }
          
          console.log(`📤 Enviando a ${cita.name} (${phoneNumber})...`)
  
// En el código de send-reminders
const whatsappResponse = await fetch(
    'https://ai.wafidely.com/api/v1/messages/send',
    {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer pcp_8be7a7dd768208ecbc6bf0a41fafa49d6aa2528dccd43aa9698dfcb3a2b1f34f',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        channelId: 4,  // ✅ Canal "Bot-Wappiad"
        to: phoneNumber,
        message: message
      })
    }
  )
  
          if (whatsappResponse.ok) {
            // Marcar como enviado
            const updateResponse = await fetch(`${baseURL}/citas/${cita.id}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 
                reminderSent: true,
                reminderSentAt: new Date().toISOString()
              })
            })
  
            if (updateResponse.ok) {
              console.log(`✅ Enviado y marcado: ${cita.name}`)
              sent++
            } else {
              console.log(`⚠️  Enviado pero no se pudo marcar: ${cita.name}`)
              sent++
            }
          } else {
            const errorData = await whatsappResponse.json()
            console.error(`❌ Error WhatsApp:`, errorData)
            failed++
          }
  
          // Pausa entre mensajes
          await new Promise(resolve => setTimeout(resolve, 1000))
  
        } catch (error) {
          console.error(`❌ Error con ${cita.name}:`, error.message)
          failed++
        }
      }
  
      // 7️⃣ Resumen
      const summary = {
        success: true,
        timestamp: new Date().toISOString(),
        stats: {
          totalCitas: todasLasCitas.length,
          sinRecordatorio: citas.length,
          enVentana: citasToRemind.length,
          enviados: sent,
          fallidos: failed
        },
        window: {
          start: fiftyMinutesFromNow.toISOString(),
          end: oneHourFromNow.toISOString()
        }
      }
  
      console.log('\n📊 Resumen final:')
      console.log(JSON.stringify(summary, null, 2))
  
      return summary
  
    } catch (error) {
      console.error('❌ Error completo:', error.message)
      console.error('❌ Stack:', error.stack)
      return {
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      }
    }
  })