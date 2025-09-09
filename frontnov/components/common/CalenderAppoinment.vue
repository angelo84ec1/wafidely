<template>
  <vue-meeting-selector 
    ref="meetingSelector" 
    class="mt-8 meeting-selector w-[100%] md:w-[50%]" 
    v-model="meeting" 
    :date="date"
    :loading="false" 
    :meetings-days="meetingsDays" 
    @next-date="nextDate" 
    @previous-date="previousDate"
    @update:modelValue="change" 
  />

  <!-- Modal con z-index extremadamente alto -->
  <TransitionRoot as="template" :show="openModal">
    <Dialog class="relative z-[999999]" @close="cancelModal">
      <TransitionChild 
        as="template" 
        enter="ease-out duration-300" 
        enter-from="opacity-0" 
        enter-to="opacity-100"
        leave="ease-in duration-200" 
        leave-from="opacity-100" 
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-[999998]" />
      </TransitionChild>

      <div class="fixed inset-0 z-[999999] w-screen overflow-y-auto">
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
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg z-[999999]">
              <form class="" @submit.prevent="sendData">
                <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="">
                    <div v-if="isCongrats" class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" class="text-base font-medium leading-6 text-green-900">
                        ¡Bien Hecho!
                      </DialogTitle>
                      <div class="mt-2">
                        <p class="text-sm text-gray-500">Tu cita ha sido guardada exitosamente</p>
                      </div>
                    </div>
                    <div v-else class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle as="h3" class="text-base font-medium leading-6 text-gray-900">
                        Completa la información para tu cita
                      </DialogTitle>
                      <div class="mt-2 space-y-4">
                        <div class="mb-3">
                          <label class="block text-sm font-medium text-gray-700 mb-2" for="date">
                            Fecha seleccionada:
                          </label>
                          <input 
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                            type="date" 
                            id="date" 
                            v-model="form.date" 
                            required
                          >
                        </div>
                        
                        <div class="mb-3">
                          <label class="block text-sm font-medium text-gray-700 mb-2" for="hour">
                            Hora seleccionada:
                          </label>
                          <input 
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                            type="time" 
                            id="hour" 
                            v-model="form.hour" 
                            required
                          >
                        </div>
                        
                        <div class="mb-3">
                          <label class="block text-sm font-medium text-gray-700 mb-2" for="whatsapp">
                            Número WhatsApp activo:
                          </label>
                          <input 
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                            type="text" 
                            id="whatsapp" 
                            placeholder="Ejm: +593998789123" 
                            v-model="form.whatsapp" 
                            required
                          >
                          <p class="text-xs text-gray-500 mt-1">Incluye el código de país (+593)</p>
                        </div>
                        
                        <div class="mb-3">
                          <label class="block text-sm font-medium text-gray-700 mb-2" for="name">
                            Nombre completo:
                          </label>
                          <input 
                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
                            type="text" 
                            id="name" 
                            placeholder="Ejm: María Fernanda López" 
                            v-model="form.name" 
                            required
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button 
                    v-if="!isCongrats"
                    type="submit" 
                    :disabled="loadingBtn"
                    class="inline-flex items-center justify-center gap-2 w-full rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed sm:ml-3 sm:w-auto"
                  >
                    <span>Guardar Cita</span>
                    <div v-if="loadingBtn" class="simple-spinner">
                      <span></span>
                    </div>
                  </button>
                  
                  <button 
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 transition-all duration-300 ring-inset ring-gray-300 hover:bg-gray-200 sm:mt-0 sm:w-auto"
                    @click.prevent="cancelModal" 
                    ref="cancelButtonRef"
                  > 
                    {{ isCongrats ? 'Cerrar' : 'Cancelar' }}
                  </button>
                </div>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  
<script setup>
import { defineComponent, ref } from "vue";
import VueMeetingSelector from "vue-meeting-selector";
import "vue-meeting-selector/dist/style.css";
import slotsGenerator from "@/helpers/slotsGenerator";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const props = defineProps({
  disabledData: {
    type: Array,
    default: [],
  },
  establishmentId: {
    type: String
  }
})

const {
  public: { baseURL },
} = useRuntimeConfig();

const route = useRoute()

const emit = defineEmits(['fetchCalender'])
const meeting = ref(null);
const meetingsDays = ref([]);
const nbDaysToDisplay = ref(7);
const date = ref(new Date());
const openModal = ref(false)
const loadingBtn = ref(false)
const isCongrats = ref(false)
const calenderData = ref([]);

const form = reactive({
  date: '',
  hour: "",
  whatsapp: '',
  name: '',
  establecimientos: []
})

const getDateTime = computed(() => {
  const dateObj = new Date(meeting.value?.date);

  // Extract date in YYYY-MM-DD format
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(dateObj.getDate()).padStart(2, '0');
  const date = `${year}-${month}-${day}`;

  // Extract time in HH:MM format
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  const time = `${hours}:${minutes}`;

  console.log("Date:", date);
  console.log("Time:", time);

  return { date, time };
})

const disabledTimes = [
  new Date(2024, 5, 29, 10, 0),  // May 25, 2024 10:00 AM
  new Date(2024, 5, 31, 14, 0),  // May 25, 2024 2:00 PM
];

const initMeetingsDays = () => {
  const start = {
    hours: 8,
    minutes: 0,
  };
  const end = {
    hours: 18,
    minutes: 0,
  };
  meetingsDays.value = slotsGenerator(
    new Date(),
    nbDaysToDisplay.value,
    start,
    end,
    30,
    props.disabledData
  );
};

initMeetingsDays();

const meetingSelector = ref(null);

const up = () => meetingSelector.value.previousMeetings();

const down = () => meetingSelector.value.nextMeetings();

const nextDate = () => {
  const start = {
    hours: 8,
    minutes: 0,
  };
  const end = {
    hours: 16,
    minutes: 0,
  };
  const d = new Date(date.value);
  const newDate = new Date(d.setDate(d.getDate() + 7));
  date.value = newDate;
  meetingsDays.value = slotsGenerator(
    newDate,
    nbDaysToDisplay.value,
    start,
    end,
    30,
    props.disabledData
  );
};

const previousDate = () => {
  const start = {
    hours: 8,
    minutes: 0,
  };
  const end = {
    hours: 16,
    minutes: 0,
  };
  const d = new Date(date.value);
  d.setDate(d.getDate() - 7);
  const formatingDate = (dateToFormat) => {
    const dateParsed = new Date(dateToFormat);
    const day =
      dateParsed.getDate() < 10
        ? `0${dateParsed.getDate()}`
        : dateParsed.getDate();
    const month =
      dateParsed.getMonth() + 1 < 10
        ? `0${dateParsed.getMonth() + 1}`
        : dateParsed.getMonth() + 1;
    const year = dateParsed.getFullYear();
    return `${year}-${month}-${day}`;
  };
  const newDate =
    formatingDate(new Date()) >= formatingDate(d)
      ? new Date()
      : new Date(d);
  date.value = newDate;
  meetingsDays.value = slotsGenerator(
    newDate,
    nbDaysToDisplay.value,
    start,
    end,
    30,
    props.disabledData
  );
};

const change = () => {
  console.log(meeting.value);
  form.date = getDateTime.value.date
  form.hour = getDateTime.value.time
  openModal.value = true;
};

const cancelModal = () => {
  openModal.value = false;
  meeting.value = null
  if (isCongrats.value) {
    emit("fetchCalender")
  }
}

const sendData = async () => {
  try {
    form.establecimientos.push(props.establishmentId)
    console.log('form', form)
    loadingBtn.value = true;
    
    const response = await fetch(`${baseURL}/citas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error('Failed to send data: ' + response.statusText);
    }

    const responseData = await response.json();
    isCongrats.value = true
    console.log('Response data:', responseData);
  } catch (error) {
    console.error('Error sending data:', error);
  } finally {
    loadingBtn.value = false
    meeting.value = null;
  }
}
</script>

<style scoped lang="scss">
.simple-spinner {
  width: 16px;
  height: 16px;
}

.simple-spinner span {
  display: block;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-radius: 50%;
  border-right-color: rgba(255, 255, 255, 0.7);
  animation: spinner-anim 0.8s linear infinite;
}

@keyframes spinner-anim {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Asegurar que el meeting selector no interfiera */
:deep(.vue-meeting-selector) {
  z-index: 1 !important;
}

:deep(.vue-meeting-selector .meeting-selector) {
  z-index: 1 !important;
}

/* Personalización del calendario en español */
:deep(.meeting-selector) {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background: white;
}

/* Header del calendario */
:deep(.meeting-selector .meeting-selector__header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  font-weight: 600;
}

/* Días de la semana */
:deep(.meeting-selector .meeting-selector__tabs) {
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  padding: 0.5rem 0;
}

:deep(.meeting-selector .meeting-selector__tab) {
  border: none;
  background: transparent;
  padding: 0.75rem 1rem;
  margin: 0 0.25rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  color: #64748b;
}

:deep(.meeting-selector .meeting-selector__tab:hover) {
  background: #e2e8f0;
  color: #334155;
}

:deep(.meeting-selector .meeting-selector__tab--active) {
  background: #3b82f6;
  color: white;
  font-weight: 600;
}

:deep(.meeting-selector .meeting-selector__tab--disabled) {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Slots de tiempo */
:deep(.meeting-selector .meeting-selector__slots) {
  padding: 1rem;
  background: white;
}

:deep(.meeting-selector .meeting-selector__slot) {
  border: 1px solid #e2e8f0;
  background: white;
  padding: 0.75rem 1rem;
  margin: 0.25rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  cursor: pointer;
  color: #334155;
}

:deep(.meeting-selector .meeting-selector__slot:hover) {
  border-color: #3b82f6;
  background: #eff6ff;
  color: #1d4ed8;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

:deep(.meeting-selector .meeting-selector__slot--selected) {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
  font-weight: 600;
}

:deep(.meeting-selector .meeting-selector__slot--disabled) {
  background: #f1f5f9;
  color: #94a3b8;
  cursor: not-allowed;
  opacity: 0.6;
}

:deep(.meeting-selector .meeting-selector__slot--disabled:hover) {
  transform: none;
  box-shadow: none;
  border-color: #e2e8f0;
  background: #f1f5f9;
}

/* Navegación */
:deep(.meeting-selector .meeting-selector__navigation) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
}

:deep(.meeting-selector .meeting-selector__navigation button) {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

:deep(.meeting-selector .meeting-selector__navigation button:hover) {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

:deep(.meeting-selector .meeting-selector__navigation button:disabled) {
  background: #94a3b8;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Loading states */
:deep(.meeting-selector .loading-tab) {
  background: #f1f5f9;
  color: #64748b;
  position: relative;
  overflow: hidden;
}

:deep(.meeting-selector .loading-tab::after) {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: loading-shine 1.5s infinite;
}

@keyframes loading-shine {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  :deep(.meeting-selector) {
    border-radius: 0;
    margin: 0 -1rem;
  }
  
  :deep(.meeting-selector .meeting-selector__tabs) {
    overflow-x: auto;
    display: flex;
    padding: 0.5rem;
  }
  
  :deep(.meeting-selector .meeting-selector__tab) {
    flex-shrink: 0;
    min-width: 80px;
    text-align: center;
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
  }
  
  :deep(.meeting-selector .meeting-selector__slots) {
    padding: 0.75rem;
  }
  
  :deep(.meeting-selector .meeting-selector__slot) {
    padding: 0.5rem 0.75rem;
    margin: 0.125rem;
    font-size: 0.8rem;
  }
}

/* Mejoras visuales adicionales */
:deep(.meeting-selector .meeting-selector__header h3) {
  margin: 0;
  font-size: 1.125rem;
  text-align: center;
}

:deep(.meeting-selector .meeting-selector__empty) {
  text-align: center;
  padding: 2rem;
  color: #64748b;
  font-style: italic;
}

/* Animaciones de entrada */
:deep(.meeting-selector .meeting-selector__slot) {
  animation: fadeInUp 0.3s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Personalización para los textos en español */
:deep(.meeting-selector .meeting-selector__tab[data-day="lunes"]) {
  position: relative;
}

:deep(.meeting-selector .meeting-selector__tab[data-day="lunes"]::after) {
  content: "L";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
}

/* Estados especiales */
:deep(.meeting-selector .meeting-selector__slot--today) {
  border-color: #10b981;
  background: #ecfdf5;
  color: #047857;
}

:deep(.meeting-selector .meeting-selector__slot--selected.meeting-selector__slot--today) {
  background: #10b981;
  border-color: #10b981;
  color: white;
}

/* Forzar nombres de días en español */
:deep(.vue-meeting-selector .meeting-selector__tab) {
  &[data-day="0"]::after { content: "Dom"; }
  &[data-day="1"]::after { content: "Lun"; }
  &[data-day="2"]::after { content: "Mar"; }
  &[data-day="3"]::after { content: "Mié"; }
  &[data-day="4"]::after { content: "Jue"; }
  &[data-day="5"]::after { content: "Vie"; }
  &[data-day="6"]::after { content: "Sáb"; }
}
</style>