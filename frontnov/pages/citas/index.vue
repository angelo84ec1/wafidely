<template>
  <main class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between py-6">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h1 class="text-2xl font-bold text-gray-900">Calendario de Citas</h1>
                <p class="text-sm text-gray-600">Gestiona las citas de tu establecimiento</p>
              </div>
            </div>
          </div>
          
          <!-- Actions -->
          <div class="flex items-center space-x-3">
            <button 
              v-if="!isGoogleAuthenticated"
              @click="syncWithGoogle"
              class="inline-flex items-center px-4 py-2 border border-blue-300 text-sm font-medium rounded-lg text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sincronizar Google
            </button>
            
            <button 
              v-else
              @click="refreshGoogleCalendar"
              class="inline-flex items-center px-4 py-2 border border-green-300 text-sm font-medium rounded-lg text-green-700 bg-green-50 hover:bg-green-100 focus:outline-none transition-colors"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              Actualizar Google
            </button>

            <button 
              @click.prevent="printPage()"
              class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
              </svg>
              Imprimir
            </button>
            
            <button 
              @click="setPostCalenderModal"
              class="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors shadow-lg"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
              Nueva Cita
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Citas Hoy</p>
              <p class="text-2xl font-bold text-gray-900">{{ todayAppointments }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Esta Semana</p>
              <p class="text-2xl font-bold text-gray-900">{{ weekAppointments }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg class="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Próxima Cita</p>
              <p class="text-sm font-bold text-gray-900">{{ nextAppointmentTime }}</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Total Mes</p>
              <p class="text-2xl font-bold text-gray-900">{{ monthAppointments }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Calendar Controls -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
        <div class="px-6 py-4 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-semibold text-gray-900">Calendario de Citas</h3>
            
            <!-- View Controls -->
            <div class="flex items-center space-x-2">
              <div class="flex rounded-lg border border-gray-300 p-1">
                <button 
                  @click="currentView = 'month'"
                  :class="[
                    'px-3 py-1 text-sm font-medium rounded-md transition-colors',
                    currentView === 'month' 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  ]"
                >
                  Mes
                </button>
                <button 
                  @click="currentView = 'week'"
                  :class="[
                    'px-3 py-1 text-sm font-medium rounded-md transition-colors',
                    currentView === 'week' 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  ]"
                >
                  Semana
                </button>
                <button 
                  @click="currentView = 'day'"
                  :class="[
                    'px-3 py-1 text-sm font-medium rounded-md transition-colors',
                    currentView === 'day' 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  ]"
                >
                  Día
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Calendar -->
        <div class="p-6">
          <div class="calendar-container">
            <vue-cal 
              :style="{ height: calendarHeight }"
              :time-from="7 * 60" 
              :time-to="19 * 60" 
              :time-step="30" 
              :events="getCalenderData"
              :view="currentView"
              :disable-views="['years']"
              locale="es"
              :twelve-hour="false"
              @event-click="onEventClick"
              :cell-click-hold="false"
              :drag-to-create-event="false"
              class="custom-calendar"
            />
          </div>
        </div>
      </div>

      <!-- Recent Appointments -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-semibold text-gray-900">Próximas Citas</h3>
          <p class="text-sm text-gray-600 mt-1">Las siguientes citas programadas</p>
        </div>
        
        <div class="p-6">
          <div class="space-y-4">
            <div 
              v-for="appointment in upcomingAppointments" 
              :key="appointment._id"
              class="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div class="flex items-center space-x-4">
                <div class="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">{{ appointment.name }}</h4>
                  <p class="text-sm text-gray-600">{{ formatDateTime(appointment.date, appointment.hour) }}</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-3">
                <a 
                  :href="`https://wa.me/${appointment.whatsapp}`" 
                  target="_blank"
                  class="text-green-600 hover:text-green-700 p-2 rounded-lg hover:bg-green-50 transition-colors"
                  title="Contactar por WhatsApp"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.63"/>
                  </svg>
                </a>
                
                <!-- Menu con opción de eliminar -->
                <Menu as="div" class="relative">
                  <MenuButton class="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                    </svg>
                  </MenuButton>

                  <Transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <MenuItems class="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                      <div class="py-1">
                        <MenuItem v-slot="{ active }">
                          <button
                            @click="deleteAppointment(appointment._id)"
                            :class="[
                              active ? 'bg-red-50 text-red-700' : 'text-red-600',
                              'group flex items-center w-full px-4 py-2 text-sm'
                            ]"
                          >
                            <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                            </svg>
                            Eliminar cita
                          </button>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>
            
            <div v-if="upcomingAppointments.length === 0" class="text-center py-8">
              <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <h3 class="mt-2 text-sm font-medium text-gray-900">No hay citas programadas</h3>
              <p class="mt-1 text-sm text-gray-500">Programa tu primera cita haciendo clic en "Nueva Cita".</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for New Appointment -->
    <TransitionRoot as="template" :show="postCalenderModal">
      <Dialog class="relative z-[9999]" @close="setPostCalenderModal">
        <TransitionChild 
          as="template" 
          enter="ease-out duration-300" 
          enter-from="opacity-0" 
          enter-to="opacity-100"
          leave="ease-in duration-200" 
          leave-from="opacity-100" 
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-[9998]" />
        </TransitionChild>

        <div class="fixed inset-0 z-[9999] w-screen overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild 
              as="template" 
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100" 
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel class="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl z-[10000]">
                <div class="bg-white px-6 py-6">
                  <div class="flex items-center justify-between mb-6">
                    <h3 class="text-lg font-semibold text-gray-900">Nueva Cita</h3>
                    <button 
                      @click="setPostCalenderModal"
                      class="text-gray-400 hover:text-gray-600 transition-colors z-[10001]"
                    >
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                  
                  <div class="appointment-form-container relative z-[10000]">
                    <CommonCalenderAppoinment 
                      :establishmentId="userData?.establecimiento" 
                      :disabledData="getDisabledDates" 
                      @fetchCalender="fetchCalender" 
                    />
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </main>
</template>

<script setup>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { useAuthStore } from "~~/store/auth"
import { computed, ref, onMounted } from 'vue'

definePageMeta({
  name: "Citas",
  layout: "private",
})

const {
  public: { baseURL },
} = useRuntimeConfig()

// Reactive data
const calenderData = ref([])
const googleEvents = ref([])
const postCalenderModal = ref(false)
const currentView = ref('month')
const isGoogleAuthenticated = ref(false)
const authStore = useAuthStore()

// Computed properties
const userData = computed(() => {
  return authStore.user
})

const getCalenderData = computed(() => {
  // Eventos locales (de la base de datos)
  const localEvents = calenderData.value
    .filter(event => 
      event?.date && 
      event?.hour && 
      event?.name && 
      event?.establecimientos?.length && 
      event?.establecimientos[0]?.id == userData.value?.establecimiento
    )
    .map(event => {
      const isGoogle = event.source === 'google'
      
      return {
        id: event._id,
        title: `${event?.name} - ${event?.hour}`,
        start: `${event?.date} ${event?.hour}`,
        end: `${event?.date} ${event?.hour}`,
        content: `
          <div class="event-content">
            <strong>${event?.name}</strong><br>
            <small>${event?.hour}</small><br>
            ${isGoogle ? '<small>📅 Google Calendar</small>' : `<small>WhatsApp: ${event?.whatsapp}</small>`}
          </div>
        `,
        class: isGoogle ? 'google-event' : 'custom-event',
        source: event.source || 'local'
      }
    })

  // Eventos de Google (si hay)
  const googleEventsFormatted = googleEvents.value.map(event => {
    const startDate = new Date(event.start)
    const endDate = new Date(event.end)
    
    const formatDate = (date) => {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      return `${year}-${month}-${day} ${hours}:${minutes}`
    }
    
    return {
      id: `google-${event.id}`,
      title: event.title,
      start: formatDate(startDate),
      end: formatDate(endDate),
      content: `
        <div class="event-content">
          <strong>${event.title}</strong><br>
          <small>Google Calendar</small>
        </div>
      `,
      class: 'google-event',
      source: 'google'
    }
  })

  return [...localEvents, ...googleEventsFormatted]
})

const getDisabledDates = computed(() => {
  const localDates = calenderData.value
    .filter(event => 
      event?.date && 
      event?.hour && 
      event?.name && 
      event?.establecimientos?.length && 
      event?.establecimientos[0]?.id == userData.value?.establecimiento
    )
    .map(event => {
      const [year, month, day] = event.date.split('-')
      const [hours, minutes] = event.hour.split(':')
      return new Date(year, month - 1, day, hours, minutes)
    })

  const googleDates = googleEvents.value.map(event => new Date(event.start))

  return [...localDates, ...googleDates]
})

const calendarHeight = computed(() => {
  switch (currentView.value) {
    case 'day':
      return '600px'
    case 'week':
      return '700px'
    default:
      return '800px'
  }
})

// Stats computations
const todayAppointments = computed(() => {
  const today = new Date().toISOString().split('T')[0]
  return getCalenderData.value.filter(event => event.start.includes(today)).length
})

const weekAppointments = computed(() => {
  const now = new Date()
  const weekStart = new Date(now.setDate(now.getDate() - now.getDay()))
  const weekEnd = new Date(now.setDate(now.getDate() - now.getDay() + 6))
  
  return getCalenderData.value.filter(event => {
    const eventDate = new Date(event.start)
    return eventDate >= weekStart && eventDate <= weekEnd
  }).length
})

const monthAppointments = computed(() => {
  const now = new Date()
  const currentMonth = now.getMonth()
  const currentYear = now.getFullYear()
  
  return getCalenderData.value.filter(event => {
    const eventDate = new Date(event.start)
    return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear
  }).length
})

const nextAppointmentTime = computed(() => {
  const now = new Date()
  const upcoming = getCalenderData.value
    .filter(event => {
      const eventDate = new Date(event.start)
      return !isNaN(eventDate.getTime()) && eventDate > now
    })
    .sort((a, b) => new Date(a.start) - new Date(b.start))[0]
  
  if (upcoming) {
    const eventDate = new Date(upcoming.start)
    
    if (isNaN(eventDate.getTime())) {
      return 'Sin citas'
    }
    
    const options = { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    }
    return eventDate.toLocaleDateString('es-ES', options)
  }
  return 'Sin citas'
})

const upcomingAppointments = computed(() => {
  const now = new Date()
  return calenderData.value
    .filter(event => {
      if (!event?.date || !event?.hour || !event?.establecimientos?.length) return false
      if (event?.establecimientos[0]?.id !== userData.value?.establecimiento) return false
      
      const eventDateTime = new Date(`${event.date} ${event.hour}`)
      return eventDateTime > now
    })
    .sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.hour}`)
      const dateB = new Date(`${b.date} ${b.hour}`)
      return dateA - dateB
    })
    .slice(0, 5)
})

// Methods
const setPostCalenderModal = () => {
  postCalenderModal.value = !postCalenderModal.value
}

const onEventClick = (event, e) => {
  console.log('Event clicked:', event)
}

const formatDateTime = (date, time) => {
  const eventDate = new Date(`${date} ${time}`)
  const options = { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  }
  return eventDate.toLocaleDateString('es-ES', options)
}

const printPage = () => {
  if (typeof window === 'undefined') return
  window.print()
}

const fetchCalender = () => {
  getData()
  setPostCalenderModal()
}

const getData = async () => {
  try {
    const response = await fetch(`${baseURL}/citas`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data: ' + response.statusText)
    }

    calenderData.value = await response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// Función para eliminar cita
const deleteAppointment = async (appointmentId) => {
  if (!confirm('¿Estás seguro de que deseas eliminar esta cita?')) {
    return
  }

  try {
    const response = await fetch(`${baseURL}/citas/${appointmentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to delete appointment')
    }

    // Recargar los datos después de eliminar
    await getData()
  } catch (error) {
    console.error('Error deleting appointment:', error)
    alert('Error al eliminar la cita')
  }
}

// Google Calendar Integration
const syncWithGoogle = () => {
  const config = useRuntimeConfig()
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${config.public.googleClientId}&redirect_uri=${config.public.googleRedirectUri}&response_type=code&scope=https://www.googleapis.com/auth/calendar.readonly&access_type=offline`
  
  window.location.href = authUrl
}

const refreshGoogleCalendar = async () => {
  if (!process.client) return
  
  try {
    console.log('Obteniendo eventos de Google Calendar...')
    
    const response = await $fetch('/api/google/calendar', {
      method: 'GET'
    })

    if (response.error) {
      throw new Error(response.error)
    }

    const googleEventsFromAPI = response.events || []
    isGoogleAuthenticated.value = response.authenticated || true
    
    console.log('Eventos de Google obtenidos:', googleEventsFromAPI.length)

    if (googleEventsFromAPI.length > 0) {
      await saveGoogleEventsAsCitas(googleEventsFromAPI)
    }

    await getData()
    
  } catch (error) {
    console.error('Error:', error)
    isGoogleAuthenticated.value = false
  }
}

const saveGoogleEventsAsCitas = async (events) => {
  try {
    const existingGoogleCitas = calenderData.value.filter(
      c => c.source === 'google' && 
      c.establecimientos?.[0]?.id == userData.value?.establecimiento
    )
    
    for (const cita of existingGoogleCitas) {
      await fetch(`${baseURL}/citas/${cita._id}`, {
        method: 'DELETE'
      })
    }

    for (const event of events) {
      const startDate = new Date(event.start)
      const date = startDate.toISOString().split('T')[0]
      const hour = startDate.toTimeString().substring(0, 5)

      await fetch(`${baseURL}/citas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: event.title,
          date: date,
          hour: hour,
          whatsapp: '0000000000',
          source: 'google',
          establecimientos: [userData.value?.establecimiento]
        })
      })
    }
    
    console.log('Eventos de Google guardados como citas:', events.length)
  } catch (error) {
    console.error('Error guardando eventos:', error)
  }
}

const checkGoogleAuth = async () => {
  if (!process.client) return
  
  try {
    const response = await $fetch('/api/google/calendar', {
      method: 'GET'
    })
    
    console.log('Check auth response:', response)
    
    if (response.authenticated && !response.error) {
      isGoogleAuthenticated.value = true
      googleEvents.value = response.events || []
      console.log('Ya autenticado, eventos cargados:', googleEvents.value.length)
    }
  } catch (error) {
    console.log('No autenticado o error:', error)
    isGoogleAuthenticated.value = false
  }
}

onMounted(async () => {
  console.log('Componente montado')
  
  await getData()
  await checkGoogleAuth()
  
  if (process.client) {
    const urlParams = new URLSearchParams(window.location.search)
    const googleAuth = urlParams.get('google_auth')
    
    if (googleAuth === 'success') {
      console.log('Autenticación exitosa, obteniendo eventos...')
      isGoogleAuthenticated.value = true
      
      setTimeout(async () => {
        await refreshGoogleCalendar()
        window.history.replaceState({}, '', '/citas')
      }, 500)
    }
  }
})
</script>

<style scoped>
/* Custom calendar styles */
.calendar-container {
  border-radius: 0.75rem;
  overflow: hidden;
}

:deep(.vuecal__menu) {
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

:deep(.vuecal__title-bar) {
  background-color: #ffffff;
  color: #1f2937;
  font-weight: 600;
}

:deep(.vuecal__cell) {
  border-color: #e5e7eb;
}

:deep(.vuecal__cell.today) {
  background-color: #eff6ff;
}

:deep(.vuecal__event) {
  background-color: #3b82f6;
  border: none;
  border-radius: 0.375rem;
  color: white;
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
}

:deep(.vuecal__event.custom-event) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

:deep(.vuecal__event.google-event) {
  background: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

:deep(.vuecal__event:hover) {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
}

:deep(.vuecal__time-column) {
  background-color: #f9fafb;
  border-right: 1px solid #e5e7eb;
}

:deep(.vuecal__time-cell) {
  color: #6b7280;
  font-size: 0.75rem;
}

:deep(.vuecal__weekdays-headings) {
  background-color: #f8fafc;
  color: #374151;
  font-weight: 600;
}

:deep(.vuecal__arrow) {
  color: #4f46e5;
}

:deep(.vuecal__arrow:hover) {
  background-color: #eef2ff;
}

/* Print styles */
@media print {
  .no-print {
    display: none !important;
  }
  
  .calendar-container {
    height: auto !important;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .calendar-container {
    margin: 0 -1rem;
  }
  
  :deep(.vuecal__event) {
    font-size: 0.75rem;
    padding: 0.125rem 0.25rem;
  }
}
</style>