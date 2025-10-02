<template>
  <div class="appointment-booking-wrapper">
    <div class="calendar-layout">
      <!-- Left Side: Monthly Calendar -->
      <div class="calendar-section">
        <div class="calendar-header">
          <button 
            type="button"
            class="nav-btn"
            @click="previousMonth"
            :disabled="!canGoPrevious"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div class="month-year">
            <span class="month-name">{{ currentMonthName }}</span>
            <span class="year-number">{{ currentYear }}</span>
          </div>

          <button 
            type="button"
            class="nav-btn"
            @click="nextMonth"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div class="weekdays-grid">
          <div v-for="day in weekDays" :key="day" class="weekday-label">{{ day }}</div>
        </div>

        <div class="calendar-grid">
          <div
            v-for="day in calendarDays"
            :key="day.date?.getTime() || `empty-${day.index}`"
            :class="[
              'calendar-day',
              {
                'empty': !day.date,
                'disabled': day.disabled,
                'selected': isSelectedDay(day.date),
                'today': isToday(day.date),
                'has-slots': day.hasSlots
              }
            ]"
            @click="selectDay(day.date)"
          >
            <span v-if="day.date">{{ day.date.getDate() }}</span>
          </div>
        </div>
      </div>

      <!-- Right Side: Time Slots -->
      <div class="time-slots-section">
        <div v-if="!selectedDate" class="no-selection">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          <h3>Selecciona un día</h3>
          <p>Haz clic en un día del calendario para ver los horarios disponibles</p>
        </div>

        <div v-else class="slots-container">
          <div class="selected-day-header">
            <h3>{{ formatSelectedDate }}</h3>
            <p>{{ selectedDaySlots.length }} horarios disponibles</p>
          </div>

          <div class="slots-list">
            <button
              v-for="slot in selectedDaySlots"
              :key="slot.date.getTime()"
              :class="['time-slot', { 'selected': isSelectedSlot(slot.date) }]"
              @click="selectSlot(slot.date)"
              :disabled="isDisabled(slot.date)"
            >
              {{ formatTime(slot.date) }}
            </button>

            <div v-if="selectedDaySlots.length === 0" class="no-slots">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-small">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
              <p>No hay horarios disponibles para este día</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <TransitionRoot as="template" :show="openModal">
      <Dialog class="relative z-[999999]" @close="handleCloseModal">
        <TransitionChild 
          as="template" 
          enter="ease-out duration-300" 
          enter-from="opacity-0" 
          enter-to="opacity-100"
          leave="ease-in duration-200" 
          leave-from="opacity-100" 
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity z-[999998]" />
        </TransitionChild>

        <div class="fixed inset-0 z-[999999] w-screen overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4">
            <TransitionChild 
              as="template" 
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100" 
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel class="appointment-modal">
                <div v-if="isCongrats" class="success-content">
                  <div class="success-icon">
                    <svg class="checkmark" viewBox="0 0 52 52">
                      <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                      <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                  </div>
                  <DialogTitle as="h3" class="success-title">¡Cita confirmada!</DialogTitle>
                  <p class="success-message">Tu cita ha sido agendada exitosamente. Recibirás una confirmación por WhatsApp.</p>
                  <button type="button" class="btn-primary w-full mt-6" @click="handleCloseModal">Entendido</button>
                </div>

                <div v-else class="appointment-form">
                  <div class="form-header">
                    <DialogTitle as="h3" class="form-title">Confirma tu cita</DialogTitle>
                    <p class="form-subtitle">{{ formatSelectedDate }} a las {{ selectedSlotTime }}</p>
                  </div>

                  <div class="form-content">
                    <div class="form-group">
                      <label for="name" class="form-label">Nombre completo</label>
                      <input type="text" id="name" v-model="form.name" class="form-input" placeholder="Ej: María Fernández" required>
                    </div>

                    <div class="form-group">
                      <label for="whatsapp" class="form-label">WhatsApp</label>
                      <input type="tel" id="whatsapp" v-model="form.whatsapp" class="form-input" placeholder="+593 998 789 123" required>
                      <p class="input-hint">Incluye el código de país</p>
                    </div>
                  </div>

                  <div class="form-actions">
                    <button type="button" class="btn-secondary" @click="handleCloseModal" :disabled="loadingBtn">Cancelar</button>
                    <button type="button" class="btn-primary" :disabled="loadingBtn" @click="sendData">
                      <span v-if="!loadingBtn">Confirmar cita</span>
                      <span v-else class="flex items-center gap-2">
                        <svg class="spinner" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Procesando...
                      </span>
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import slotsGenerator from "@/helpers/slotsGenerator";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';

const props = defineProps({
  disabledData: { type: Array, default: [] },
  establishmentId: { type: String }
});

const { public: { baseURL } } = useRuntimeConfig();
const emit = defineEmits(['fetchCalender']);

const currentMonth = ref(new Date());
const selectedDate = ref(null);
const selectedSlot = ref(null);
const openModal = ref(false);
const loadingBtn = ref(false);
const isCongrats = ref(false);
const meetingsDays = ref([]);

const form = reactive({
  date: '', hour: "", whatsapp: '', name: '', establecimientos: []
});

const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const weekDays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

const currentMonthName = computed(() => monthNames[currentMonth.value.getMonth()]);
const currentYear = computed(() => currentMonth.value.getFullYear());

const canGoPrevious = computed(() => {
  const today = new Date();
  const firstDayOfMonth = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth(), 1);
  return firstDayOfMonth > today;
});

const calendarDays = computed(() => {
  const year = currentMonth.value.getFullYear();
  const month = currentMonth.value.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startingDayOfWeek = firstDay.getDay();
  const days = [];

  // Empty cells before first day
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push({ date: null, index: i });
  }

  // Days of month
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isPast = date < new Date().setHours(0, 0, 0, 0);
    const daySlots = getSlotsForDay(date);
    
    days.push({
      date,
      disabled: isWeekend || isPast,
      hasSlots: daySlots.length > 0
    });
  }

  return days;
});

const selectedDaySlots = computed(() => {
  if (!selectedDate.value) return [];
  return getSlotsForDay(selectedDate.value);
});

const formatSelectedDate = computed(() => {
  if (!selectedDate.value) return '';
  const date = selectedDate.value;
  const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  return `${dayNames[date.getDay()]}, ${date.getDate()} de ${monthNames[date.getMonth()]}`;
});

const selectedSlotTime = computed(() => {
  if (!selectedSlot.value) return '';
  return formatTime(selectedSlot.value);
});

const getSlotsForDay = (date) => {
  if (!date) return [];
  const dayData = meetingsDays.value.find(d => {
    const dDate = new Date(d.date);
    return dDate.getDate() === date.getDate() &&
           dDate.getMonth() === date.getMonth() &&
           dDate.getFullYear() === date.getFullYear();
  });
  return dayData?.slots || [];
};

const isToday = (date) => {
  if (!date) return false;
  const today = new Date();
  return date.getDate() === today.getDate() &&
         date.getMonth() === today.getMonth() &&
         date.getFullYear() === today.getFullYear();
};

const isSelectedDay = (date) => {
  if (!date || !selectedDate.value) return false;
  return date.getDate() === selectedDate.value.getDate() &&
         date.getMonth() === selectedDate.value.getMonth() &&
         date.getFullYear() === selectedDate.value.getFullYear();
};

const isSelectedSlot = (slotDate) => {
  return selectedSlot.value?.getTime() === slotDate.getTime();
};

const isDisabled = (slotDate) => {
  return props.disabledData.some(d => new Date(d).getTime() === slotDate.getTime());
};

const formatTime = (dateObj) => {
  const d = new Date(dateObj);
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
};

const selectDay = (date) => {
  if (!date || calendarDays.value.find(d => d.date === date)?.disabled) return;
  selectedDate.value = date;
  selectedSlot.value = null;
};

const selectSlot = (slotDate) => {
  if (isDisabled(slotDate)) return;
  selectedSlot.value = slotDate;
  const dateObj = new Date(slotDate);
  form.date = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
  form.hour = formatTime(slotDate);
  openModal.value = true;
};

const generateMonthSlots = () => {
  const year = currentMonth.value.getFullYear();
  const month = currentMonth.value.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const allDays = [];

  for (let day = 1; day <= lastDay; day++) {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && date >= new Date().setHours(0, 0, 0, 0)) {
      const start = { hours: 8, minutes: 0 };
      const end = { hours: 18, minutes: 0 };
      const slots = [];
      const startTime = new Date(date);
      startTime.setHours(start.hours, start.minutes, 0, 0);
      const endTime = new Date(date);
      endTime.setHours(end.hours, end.minutes, 0, 0);

      for (let time = startTime.getTime(); time <= endTime.getTime(); time += 30 * 60 * 1000) {
        slots.push({ date: new Date(time) });
      }

      allDays.push({ date, slots });
    }
  }

  meetingsDays.value = allDays;
};

const previousMonth = () => {
  const newMonth = new Date(currentMonth.value);
  newMonth.setMonth(newMonth.getMonth() - 1);
  currentMonth.value = newMonth;
  selectedDate.value = null;
  generateMonthSlots();
};

const nextMonth = () => {
  const newMonth = new Date(currentMonth.value);
  newMonth.setMonth(newMonth.getMonth() + 1);
  currentMonth.value = newMonth;
  selectedDate.value = null;
  generateMonthSlots();
};

generateMonthSlots();

const handleCloseModal = () => {
  openModal.value = false;
  if (isCongrats.value) {
    isCongrats.value = false;
    selectedSlot.value = null;
    form.name = '';
    form.whatsapp = '';
    emit("fetchCalender");
  }
};

const sendData = async () => {
  try {
    form.establecimientos = [props.establishmentId];
    loadingBtn.value = true;
    const response = await fetch(`${baseURL}/citas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (!response.ok) throw new Error('Failed to send data');
    isCongrats.value = true;
  } catch (error) {
    console.error('Error:', error);
  } finally {
    loadingBtn.value = false;
  }
};
</script>

<style scoped>
.appointment-booking-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  
}

.calendar-layout {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 2rem;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  
}

.calendar-section {
  border-right: 1px solid #e5e7eb;
  padding-right: 2rem;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  
}

.nav-btn {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: white;
  border: 1px solid #d1d5db;
  color: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-btn:hover:not(:disabled) {
  background: #f9fafb;
  border-color: #9ca3af;
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-btn svg {
  width: 18px;
  height: 18px;
}

.month-year {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.month-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #ffffff;
}

.year-number {
  font-size: 1rem;
  color: #6b7280;
}

.weekdays-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.weekday-label {
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  padding: 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
  
}

.calendar-day {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  color: #374151;
  position: relative;
}

.calendar-day.empty {
  cursor: default;
  background: transparent;
}

.calendar-day:not(.empty):not(.disabled):hover {
  background: #f3f4f6;
}

.calendar-day.disabled {
  color: #d1d5db;
  cursor: not-allowed;
}

.calendar-day.today {
  color: #232c4d;
  font-weight: 600;
}

.calendar-day.selected {
  background: #232c4d;
  color: white;
  font-weight: 600;
}

.calendar-day.has-slots:not(.disabled)::after {
  content: '';
  position: absolute;
  bottom: 4px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #232c4d;
}

.calendar-day.selected.has-slots::after {
  background: white;
}

.time-slots-section {
  min-height: 500px;
}

.no-selection {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: #9ca3af;
}

.no-selection .icon {
  width: 64px;
  height: 64px;
  margin-bottom: 1rem;
  color: #d1d5db;
}

.no-selection h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #dadada;
  margin-bottom: 0.5rem;
}

.no-selection p {
  font-size: 0.9375rem;
}

.slots-container {
  height: 100%;
}

.selected-day-header {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.selected-day-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
}

.selected-day-header p {
  font-size: 0.875rem;
  color: #6b7280;
}

.slots-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0.75rem;
  max-height: 450px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.slots-list::-webkit-scrollbar {
  width: 6px;
}

.slots-list::-webkit-scrollbar-track {
  background: #f9fafb;
}

.slots-list::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 3px;
}

.time-slot {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 0.75rem;
  font-weight: 500;
  font-size: 0.9375rem;
  color: #374151;
  cursor: pointer;
  transition: all 0.15s ease;
  text-align: center;
}

.time-slot:hover:not(:disabled) {
  background: #f9fafb;
  border-color: #232c4d;
  color: #232c4d;
}

.time-slot.selected {
  background: #232c4d;
  border-color: #232c4d;
  color: white;
}

.time-slot:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background: #f9fafb;
}

.no-slots {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  text-align: center;
  color: #9ca3af;
}

.no-slots .icon-small {
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
  color: #d1d5db;
}

.appointment-modal {
  background: white;
  border-radius: 9px;
  overflow: hidden;  
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  max-width: 480px;
  width: 100%;
  
}

.success-content {
  padding: 3rem 2rem;
  text-align: center;
}

.success-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.checkmark {
  width: 64px;
  height: 64px;
  animation: scaleIn 0.5s ease-in-out;
}

.checkmark-circle {
  stroke: #10b981;
  stroke-width: 2;
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark-check {
  stroke: #10b981;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.6s forwards;
}

@keyframes stroke { to { stroke-dashoffset: 0; } }
@keyframes scaleIn { from { transform: scale(0); } to { transform: scale(1); } }

.success-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
}

.success-message {
  font-size: 0.9375rem;
  color: #6b7280;
  line-height: 1.5;
}

.appointment-form { padding: 0; }

.form-header {
  background: #232c4d;
  padding: 1.5rem 2rem;
  text-align: center;
  color: white;
  
}

.form-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: white;
}

.form-subtitle {
  font-size: 0.9375rem;
  opacity: 0.9;
  color: white;
}

.form-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 0.9375rem;
  color: #111827;
  transition: all 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #232c4d;
  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
}

.input-hint {
  font-size: 0.8125rem;
  color: #6b7280;
}

.form-actions {
  display: flex;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
}

.btn-primary, .btn-secondary {
  flex: 1;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9375rem;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: #232c4d;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #232c4d;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary {
  background: white;
  color: #374151;
  border: 1px solid #d1d5db;
}

.btn-secondary:hover:not(:disabled) {
  background: #f9fafb;
}

.spinner {
  width: 18px;
  height: 18px;
  animation: spin 1s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

@media (max-width: 968px) {
  .calendar-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .calendar-section {
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
    padding-right: 0;
    padding-bottom: 2rem;
  }
}

@media (max-width: 768px) {
  .form-actions {
    flex-direction: column-reverse;
  }
}
</style>