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
                
                <button class="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                  </svg>
                </button>
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
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useAuthStore } from "~~/store/auth";
import { computed, ref, onMounted } from 'vue'

definePageMeta({
  name: "Citas",
  layout: "private",
});

const {
  public: { baseURL },
} = useRuntimeConfig();

// Reactive data
const calenderData = ref([])
const postCalenderModal = ref(false)
const currentView = ref('month')
const authStore = useAuthStore();

// Computed properties
const userData = computed(() => {
  return authStore.user;
});

const getCalenderData = computed(() => {
  return calenderData.value
    .filter(event => event?.date && event?.hour && event?.name && event?.whatsapp && event?.establecimientos?.length && event?.establecimientos[0]?.id == userData.value?.establecimiento)
    .map(event => ({
      id: event._id,
      title: `${event?.name} - ${event?.hour}`,
      start: `${event?.date} ${event?.hour}`,
      end: `${event?.date} ${event?.hour}`,
      content: `
        <div class="event-content">
          <strong>${event?.name}</strong><br>
          <small>${event?.hour}</small><br>
          <small>WhatsApp: ${event?.whatsapp}</small>
        </div>
      `,
      class: 'custom-event'
    }));
});

const getDisabledDates = computed(() => {
  return calenderData.value
    .filter(event => event?.date && event?.hour && event?.name && event?.whatsapp && event?.establecimientos?.length && event?.establecimientos[0]?.id == userData.value?.establecimiento)
    .map(event => {
      const [year, month, day] = event.date.split('-');
      const [hours, minutes] = event.hour.split(':');
      return new Date(year, month - 1, day, hours, minutes);
    });
});

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
  const today = new Date().toISOString().split('T')[0];
  return getCalenderData.value.filter(event => event.start.includes(today)).length;
});

const weekAppointments = computed(() => {
  const now = new Date();
  const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
  const weekEnd = new Date(now.setDate(now.getDate() - now.getDay() + 6));
  
  return getCalenderData.value.filter(event => {
    const eventDate = new Date(event.start);
    return eventDate >= weekStart && eventDate <= weekEnd;
  }).length;
});

const monthAppointments = computed(() => {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  
  return getCalenderData.value.filter(event => {
    const eventDate = new Date(event.start);
    return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
  }).length;
});

const nextAppointmentTime = computed(() => {
  const now = new Date();
  const upcoming = getCalenderData.value
    .filter(event => new Date(event.start) > now)
    .sort((a, b) => new Date(a.start) - new Date(b.start))[0];
  
  if (upcoming) {
    return formatDateTime(upcoming.start.split(' ')[0], upcoming.start.split(' ')[1]);
  }
  return 'Sin citas';
});

const upcomingAppointments = computed(() => {
  const now = new Date();
  return calenderData.value
    .filter(event => {
      if (!event?.date || !event?.hour || !event?.establecimientos?.length) return false;
      if (event?.establecimientos[0]?.id !== userData.value?.establecimiento) return false;
      
      const eventDateTime = new Date(`${event.date} ${event.hour}`);
      return eventDateTime > now;
    })
    .sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.hour}`);
      const dateB = new Date(`${b.date} ${b.hour}`);
      return dateA - dateB;
    })
    .slice(0, 5);
});

// Methods
const setPostCalenderModal = () => {
  postCalenderModal.value = !postCalenderModal.value
}

const onEventClick = (event, e) => {
  // Handle event click
  console.log('Event clicked:', event);
}

const formatDateTime = (date, time) => {
  const eventDate = new Date(`${date} ${time}`);
  const options = { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  };
  return eventDate.toLocaleDateString('es-ES', options);
}

const printPage = () => {
  if (typeof window === 'undefined') return;
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
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data: ' + response.statusText);
    }

    calenderData.value = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Lifecycle
onMounted(async () => {
  await getData()
})
</script>

<style scoped>
/* Custom calendar styles */
.calendar-container {
  border-radius: 0.75rem;
  overflow: hidden;
}

/* Force high z-index for any modals created within calendar appointment component */
.calendar-appointment-wrapper :deep(.modal),
.calendar-appointment-wrapper :deep(.dialog),
.calendar-appointment-wrapper :deep([role="dialog"]),
.calendar-appointment-wrapper :deep(.v-dialog),
.calendar-appointment-wrapper :deep(.el-dialog),
.calendar-appointment-wrapper :deep(.ant-modal),
.calendar-appointment-wrapper :deep(.modal-container),
.calendar-appointment-wrapper :deep(.overlay),
.calendar-appointment-wrapper :deep(.backdrop) {
  z-index: 999999 !important;
}

/* Force positioning for nested modals */
.calendar-appointment-wrapper :deep(.modal-overlay),
.calendar-appointment-wrapper :deep(.dialog-overlay),
.calendar-appointment-wrapper :deep(.v-overlay),
.calendar-appointment-wrapper :deep(.fixed) {
  z-index: 999998 !important;
  position: fixed !important;
}

/* Ensure form containers are on top */
.calendar-appointment-wrapper :deep(.form-container),
.calendar-appointment-wrapper :deep(.patient-form),
.calendar-appointment-wrapper :deep(.appointment-form),
.calendar-appointment-wrapper :deep(.info-form) {
  z-index: 999999 !important;
  position: relative !important;
}

/* HeadlessUI Dialog overrides */
.calendar-appointment-wrapper :deep([data-headlessui-state]),
.calendar-appointment-wrapper :deep(.headlessui-dialog-overlay),
.calendar-appointment-wrapper :deep(.headlessui-dialog-panel) {
  z-index: 999999 !important;
}

/* Any element with high z-index classes */
.calendar-appointment-wrapper :deep(.z-50),
.calendar-appointment-wrapper :deep(.z-40),
.calendar-appointment-wrapper :deep(.z-30) {
  z-index: 999999 !important;
}

/* Teleport and portal containers */
body > .modal,
body > .dialog,
body > [role="dialog"],
body > .v-dialog,
body > .portal-target,
body > .teleport-target {
  z-index: 999999 !important;
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

:deep(.vuecal__event:hover) {
  background-color: #2563eb;
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

/* Animation for modal */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}
</style>