<template>
  <main>
    <header>
      <div class="header__text">
        <div class="header__description">
          <h1>Calendario Citas</h1>

        </div>


        <div class="header__actions">
          <nuxt-link :to="`/pagos/create`">

          </nuxt-link>

        </div>
      </div>

      <div class="header__actions">
        <button class="button button--secondary" @click.prevent="printPage()">
          <img src="~/assets/images/imprimir-green.png" alt="" srcset="" />
          Imprimir
        </button>
      </div>
    </header>

    <div class="mt-4">
      <div class="flex justify-end mb-5">
        <button class="button button--primary" @click="setPostCalenderModal">
        
            Schedule
          </button>
      </div>
      <vue-cal style="height: 600px" :time-from="7 * 60" :time-to="19 * 60" :time-step="30" :events="getCalenderData">
      </vue-cal>

      <TransitionRoot as="template" :show="postCalenderModal">
    <Dialog class="relative z-10" @close="setPostCalenderModal">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[600px] py-4">
              <CommonCalenderAppoinment :establishmentId="userData?.establecimiento" :disabledData="getDisabledDates" @fetchCalender="fetchCalender" />
   
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
    </div>

  </main>
</template>
<script setup>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useAuthStore } from "~~/store/auth";

definePageMeta({
  name: "Citas",
  layout: "private",
});

const {
  public: { baseURL },
} = useRuntimeConfig();


const calenderData = ref([])
const postCalenderModal = ref(false)
const authStore = useAuthStore();

const userData = computed(() => {
  console.log('authStore.user', authStore.user)
  return authStore.user;
});

const getCalenderData = computed(() => {
  console.log('userData.value', userData.value)
  return calenderData.value
    .filter(event => event?.date && event?.hour && event?.name && event?.whatsapp && event?.establecimientos?.length && event?.establecimientos[0]?.id == userData.value?.establecimiento)
    .map(event => ({
      // id: event._id,
      title: event?.name || 'Appointment',
      start: `${event?.date} ${event?.hour}`,
      end: `${event?.date} ${event?.hour}`,
      background: true
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

const setPostCalenderModal = () => {
  postCalenderModal.value = !postCalenderModal.value
} 
    



const convertDate = (dateString) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

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
    console.log('Response data:', calenderData.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// watch(getCalenderData, (newEvents) => {
//   console.log('calender.value', calender.value)
//   calender.value.calendarApp.events = newEvents

// });

onMounted(async () => {
  await getData()

})
</script>
<style scoped>
header {
  padding: 1rem 0;
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid var(--gray-200);
}


.header__description>h1 {
  font-size: var(--heading-2);
}

.header__description>img {
  width: 56px;
}


main {
  padding: 0 1rem 1rem 1rem;
}

.header__text>h1 {
  font-size: var(--heading-2);
}

.header__text {
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__actions {
  flex-wrap: wrap;
  display: flex;
  gap: 1rem;
}

.header__title {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.header__title>img {
  width: 56px;
  height: auto;
}


.float {
  display: flex;
  align-items: center;
  background-color: var(--green-400);
  color: #ffffff;
}

.float span {
  display: flex;
  align-items: center;
  justify-content: center;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table tr th {
  text-align: left;
}

tr th,
tr td {
  padding-left: .5rem;
}

tr td {
  padding: .5rem 0.5rem;
}

.t_header {
  background-color: #e7e7e7;
}

.t_actions button {
  background-color: #ffffff;
  padding: 0 0.4rem
}

.filters__area {
  display: flex;
  justify-content: space-between;
}

.filters__group {
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-end;
}
</style>
  