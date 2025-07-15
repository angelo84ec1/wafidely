<template>
  <div class="home__container">
    <nav class="drawer">
      <div class="drawer__actions">
        <button id="hambur-menu" class="hambur-menu">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 9H27M5 16H27M5 23H27" stroke="white" stroke-opacity="0.55" stroke-width="3"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <img class="drawer__logo" src="~/assets/images/wafidelyuvaweb.png" width="32" height="32"  alt="">
      </div>
      <img v-if="dataUser && dataUser.datos_personales?.foto?.url"
        :src="getProfilePicture(dataUser.datos_personales.foto.url)"
        :alt="dataUser.datos_personales.nombres ?? 'profile-picture'" class="header__photo" />
      <div class="drawer__list">
        <ul>

          <li>
            <NuxtLink to="/resumen" class="drawer__link">
              <img v-if="route.path.includes('/resumen')" src="~/assets/images/MaterialSymbolsDashboardCustomizeOutlineRounded.png"
                alt="users-icon">
              <img v-else src="~/assets/images/MaterialSymbolsDashboardCustomizeOutlineRounded.png" alt="users-icon" />Escritorio
            </NuxtLink>
            <div class="w-full px-1 inline-flex space-x-1 items-center border-b border-slate-700 py-1 hover:bg-white/5 transition ease-linear duration-150"></div>
          </li>

          <li v-if="isEstablecimiento  ||  authStore.user?.role?.name === 'establecimiento'">
            <NuxtLink to="/pagos" class="drawer__link">
              <img v-if="route.path.includes('/pagos')" src="~/assets/images/CryptocurrencyStq.png"
                alt="users-icon">
              <img v-else src="~/assets/images/CryptocurrencyStq.png" alt="users-icon" />Planes
              Planes Contratados
            </NuxtLink>
            <div class="w-full px-1 inline-flex space-x-1 items-center border-b border-slate-700 py-1 hover:bg-white/5 transition ease-linear duration-150"></div>
          </li>
          <li v-if="isAdmin || authStore.user?.role?.name === 'admin'">
            <NuxtLink to="/pagos" class="drawer__link">
              <img v-if="route.path.includes('/pagos')" src="~/assets/images/CryptocurrencyStq.png"
                alt="users-icon">
              <img v-else src="~/assets/images/CryptocurrencyStq.png" alt="users-icon" />Planes
            </NuxtLink>
            <div class="w-full px-1 inline-flex space-x-1 items-center border-b border-slate-700 py-1 hover:bg-white/5 transition ease-linear duration-150"></div>
          </li>
          <li v-if="isAdmin || authStore.user?.role?.name === 'establecimiento'">
            <NuxtLink to="/citas" class="drawer__link">
              <img v-if="route.path.includes('/citas')" src="~/assets/images/RadixIconsCalendar.png"
                alt="users-icon">
              <img v-else src="~/assets/images/RadixIconsCalendar.png" alt="users-icon" />Citas
    
            </NuxtLink>
            <div class="w-full px-1 inline-flex space-x-1 items-center border-b border-slate-700 py-1 hover:bg-white/5 transition ease-linear duration-150"></div>
          </li>
          <li v-if="isAdmin || authStore.user?.role?.name === 'establecimiento'">
    <NuxtLink 
      to="/socios" 
      :class="{'drawer__link': true, 'active-link': isActive}" 
      @click="handleClick"
    >
    <img v-if="route.path.includes('/socios')" src="~/assets/images/HugeiconsPeerToPeer03.png"
                alt="users-icon">
              <img v-else src="~/assets/images/HugeiconsPeerToPeer03.png" alt="users-icon" />
      Socios
    </NuxtLink>
    <div class="w-full px-1 inline-flex space-x-1 items-center border-b border-slate-700 py-1 hover:bg-white/5 transition ease-linear duration-150"></div>
  </li>
          <li v-if="isEstablecimiento || authStore.user?.role?.name === 'establecimiento'">
            <NuxtLink to="/establecimientos" class="drawer__link">
              <img v-if="route.path.includes('/establecimientos')" src="~/assets/images/building_yellow.png" alt="busqueda-icon" />
              <img  v-else src="~/assets/images/building.png" alt="busqueda-icon" /> Búsqueda Socio
            </NuxtLink>
            <div class="w-full px-1 inline-flex space-x-1 items-center border-b border-slate-700 py-1 hover:bg-white/5 transition ease-linear duration-150"></div>
          </li>
          <li v-if="isEstablecimiento || authStore.user?.role?.name === 'establecimiento'">
            <NuxtLink to="/weblanding" class="drawer__link">
              <img v-if="route.path.includes('/weblanding')" src="~/assets/images/landingyellow.png" alt="landing-icon" />
              <img  v-else src="~/assets/images/landingwhite.png" alt="landing-icon" /> Landing Page
            </NuxtLink>
            <div class="w-full px-1 inline-flex space-x-1 items-center border-b border-slate-700 py-1 hover:bg-white/5 transition ease-linear duration-150"></div>
          </li>
          
          <li v-if="isAdmin || authStore.user?.role.name === 'admin'">
            <NuxtLink to="/usuarios" class="drawer__link">
              <img v-if="route.path.includes('/usuarios')" src="~/assets/images/PhUserCircleCheckFill.png"
                alt="users-icon">
              <img v-else src="~/assets/images/PhUserCircleCheckFill.png" alt="users-icon" />Usuarios
            </NuxtLink>
            <div class="w-full px-1 inline-flex space-x-1 items-center border-b border-slate-700 py-1 hover:bg-white/5 transition ease-linear duration-150"></div>
          </li>
     
          <li >


           
    <div>
        
    
       
    </div>


            
            <NuxtLink to="/personal" class="drawer__link">
              <img v-if="route.path.includes('/citas')" src="~/assets/images/IconParkOutlineEditOne.png"
                alt="users-icon">
              <img v-else src="~/assets/images/IconParkOutlineEditOne.png" alt="users-icon" />
               
              Datos personales
            </NuxtLink>
            <div class="w-full px-1 inline-flex space-x-1 items-center border-b border-slate-700 py-1 hover:bg-white/5 transition ease-linear duration-150"></div>
          </li>
          <li v-if="authStore?.user && authStore?.user?.role?.name !== 'admin' && authStore?.user?.role?.name !== 'establecimiento'">
            <NuxtLink to="/modificaplan" class="drawer__link">
              <img v-if="route.path.includes('/modificaplan')" src="~/assets/images/modplanyellow.png"
                alt="modifica plan">
              <img v-else src="~/assets/images/modplanwhite.png" alt="personal">
              Modificar Planes
            </NuxtLink>
            <div class="w-full px-1 inline-flex space-x-1 items-center border-b border-slate-700 py-1 hover:bg-white/1 transition ease-linear duration-150"></div>
          </li>
    

      


        
 
        </ul>
      </div>
    </nav>
    <div class="content">
      <nav class="navbar">
        <button class="hambur-menu hambur-menu--mobile">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 9H27M5 16H27M5 23H27" stroke="white" stroke-opacity="0.55" stroke-width="3"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        
        <button class="navbar__close-sesion" @click="logout">
          <img src="~/assets/icons/exit-icon.png"  width="25" height="16">
          Cerrar sesion
        </button>
     
        
      </nav>
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import useAdmin from '~/composables/useAdmin';
import { useAuthStore } from '~~/store/auth';
export default {
  data() {
    return {
      activeLink: null // Guarda el enlace activo
    };
  },
  methods: {
    setActiveLink(link) {
      this.activeLink = link; // Establece el enlace activo
    }
  }
};
</script>
<script setup lang="ts">


const {
  public: { baseURL },
} = useRuntimeConfig();

const getProfilePicture = (url: string) => `${BASE_URL}${url}`;

const route = useRoute()
const { isAdmin, isEstablecimiento } = useAdmin()
const authStore = useAuthStore()
const router = useRouter()
onMounted(() => {
  console.log(isAdmin, isEstablecimiento)
  console.log(authStore.user?.role?.name === 'admin')
  console.log(authStore.user?.role?.name === 'establecimiento')
  const hamburMenu = document.getElementById('hambur-menu')
  const hamburMenuMobile = document.querySelector('.hambur-menu--mobile')
  const drawer = document.querySelector('.drawer')
  const drawerLogo = document.querySelector('.drawer__logo')

  if (window.matchMedia('(min-width: 1060px)').matches) {
    hamburMenu?.addEventListener('click', () => {
      drawer?.classList.toggle('drawer--small')
      drawerLogo?.classList.toggle('no-visible')
    })
  }

  hamburMenuMobile?.addEventListener('click', () => {
    drawer?.classList.add('drawer--visible')
  })

  hamburMenu?.addEventListener('click', () => {
    drawer?.classList.remove('drawer--visible')
  })
})

const logout = async () => {
  await authStore.logout()
  router.push('/login')
}

</script>
<style scoped>
.active-link {
  background-color: white;
  border-right: 2px solid black;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}

.inactive-link {
  background-color: transparent;
  border: none;
}
</style>
  