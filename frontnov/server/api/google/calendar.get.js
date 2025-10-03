import { google } from 'googleapis'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  try {
    const oauth2Client = new google.auth.OAuth2(
      config.googleClientId,
      config.googleClientSecret,
      config.googleRedirectUri
    )

    const token = getCookie(event, 'google_token')
    if (!token) {
      return { error: 'Not authenticated', authenticated: false }
    }

    oauth2Client.setCredentials(JSON.parse(token))
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client })

    const now = new Date()
    const endDate = new Date()
    endDate.setMonth(endDate.getMonth() + 3)

    const response = await calendar.events.list({
      calendarId: 'primary',
      timeMin: now.toISOString(),
      timeMax: endDate.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
      maxResults: 250
    })

    const events = response.data.items.map(event => ({
      id: event.id,
      title: event.summary || 'Sin título',
      start: event.start.dateTime || event.start.date,
      end: event.end.dateTime || event.end.date,
    }))

    return { events, authenticated: true }
  } catch (error) {
    console.error('Google Calendar API Error:', error)
    return { error: error.message, authenticated: false }
  }
})