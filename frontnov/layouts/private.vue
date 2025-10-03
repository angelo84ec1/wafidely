<template>
  <div class="">
    <nav class="drawer" :class="{ 'drawer--collapsed': isCollapsed, 'drawer--visible': isMobileMenuOpen }">
      <div class="drawer__actions">
        <button id="hambur-menu" class="hambur-menu" @click="toggleDrawer">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 9H27M5 16H27M5 23H27" stroke="white" stroke-opacity="0.55" stroke-width="3"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <transition name="logo-fade">
          <div v-show="!isCollapsed || isMobile" class="drawer__logo">
            <img 
              src="~/assets/images/wafidelyblanco.png" 
              alt="Wafidely Logo"
              class="drawer__logo-img"
            />
          </div>
        </transition>
      </div>
      
      <img v-if="dataUser && dataUser.datos_personales?.foto?.url"
        :src="getProfilePicture(dataUser.datos_personales.foto.url)"
        :alt="dataUser.datos_personales.nombres ?? 'profile-picture'" 
        class="header__photo" />
      
      <div class="drawer__list">
        <ul>
          <li>
            <NuxtLink to="/resumen" class="drawer__link" @click="handleLinkClick">
              <!-- Dashboard Icon SVG -->
              <div class="drawer__icon">
                <svg v-if="route.path.includes('/resumen')" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" stroke="#38f5b3" stroke-width="2" fill="#f59e0b" fill-opacity="0.2"/>
                </svg>
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" stroke="white" stroke-width="2" fill="none"/>
                </svg>
              </div>
              <span class="drawer__text">Escritorio</span>
            </NuxtLink>
            <div class="drawer__divider"></div>
          </li>

          <li v-if="isEstablecimiento || authStore.user?.role.name === 'establecimiento'">
            <NuxtLink to="/pagos" class="drawer__link" @click="handleLinkClick">
              <div class="drawer__icon">
                <svg v-if="route.path.includes('/pagos')" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#38f5b3"/>
                </svg>
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"/>
                </svg>
              </div>
              <span class="drawer__text">Planes Contratados</span>
            </NuxtLink>
            <div class="drawer__divider"></div>
          </li>

          <li v-if="isAdmin || authStore.user?.role.name === 'admin'">
            <NuxtLink to="/pagos" class="drawer__link" @click="handleLinkClick">
              <div class="drawer__icon">
                <svg v-if="route.path.includes('/pagos')" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#38f5b3"/>
                </svg>
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"/>
                </svg>
              </div>
              <span class="drawer__text">Planes</span>
            </NuxtLink>
            <div class="drawer__divider"></div>
          </li>

          <li v-if="isAdmin || authStore.user?.role.name === 'establecimiento'">
            <NuxtLink to="/citas" class="drawer__link" @click="handleLinkClick">
              <div class="drawer__icon">
                <svg v-if="route.path.includes('/citas')" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" fill="#38f5b3"/>
                </svg>
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" fill="white"/>
                </svg>
              </div>
              <span class="drawer__text">Citas</span>
            </NuxtLink>
            <div class="drawer__divider"></div>
          </li>

          <li v-if="isAdmin || authStore.user?.role.name === 'establecimiento'">
            <NuxtLink 
              to="/socios" 
              :class="{'drawer__link': true, 'active-link': isActive}" 
              @click="handleLinkClick"
            >
              <div class="drawer__icon">
                <svg v-if="route.path.includes('/socios')" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-.5-.98-.88-1.72-.88H16c-.8 0-1.54.37-2.01.97L12 12l-2.99-3.03A2.5 2.5 0 0 0 7 8H5.46c-.8 0-1.54.37-2.01.97L1 14.63V22h2v-6h2.5l2.5-7.5L10.5 12H8v10h8V12h-2.5L16 8.5 18.5 16H21v6h-1z" fill="#38f5b3"/>
                </svg>
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63c-.34-.5-.98-.88-1.72-.88H16c-.8 0-1.54.37-2.01.97L12 12l-2.99-3.03A2.5 2.5 0 0 0 7 8H5.46c-.8 0-1.54.37-2.01.97L1 14.63V22h2v-6h2.5l2.5-7.5L10.5 12H8v10h8V12h-2.5L16 8.5 18.5 16H21v6h-1z" fill="white"/>
                </svg>
              </div>
              <span class="drawer__text">Socios</span>
            </NuxtLink>
            <div class="drawer__divider"></div>
          </li>

          <li v-if="isEstablecimiento || authStore.user?.role.name === 'establecimiento'">
            <NuxtLink to="/establecimientos" class="drawer__link" @click="handleLinkClick">
              <div class="drawer__icon">
                <svg v-if="route.path.includes('/establecimientos')" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3l8 5v11H4V8l8-5z" fill="#38f5b3"/>
                  <path d="M8 11h2v6H8v-6zm6 0h2v6h-2v-6z" fill="white"/>
                </svg>
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3l8 5v11H4V8l8-5z" fill="white"/>
                  <path d="M8 11h2v6H8v-6zm6 0h2v6h-2v-6z" fill="#334155"/>
                </svg>
              </div>
              <span class="drawer__text">Búsqueda Socio</span>
            </NuxtLink>
            <div class="drawer__divider"></div>
          </li>

          <li v-if="isEstablecimiento || authStore.user?.role.name === 'establecimiento'">
            <NuxtLink to="/aiembudo" class="drawer__link" @click="handleLinkClick">
              <div class="drawer__icon">
                <svg v-if="route.path.includes('/aiembudo')" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="#38f5b3"/>
                </svg>
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="white"/>
                </svg>
              </div>
              <span class="drawer__text">Landing Page</span>
            </NuxtLink>
            <div class="drawer__divider"></div>
          </li>
          
          <li v-if="isAdmin || authStore.user?.role.name === 'admin'">
            <NuxtLink to="/usuarios" class="drawer__link" @click="handleLinkClick">
              <div class="drawer__icon">
                <svg v-if="route.path.includes('/usuarios')" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 7c0-2.21-1.79-4-4-4S8 4.79 8 7s1.79 4 4 4 4-1.79 4-4zm-4 7c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#f59e0b"/>
                  <circle cx="18" cy="8" r="2" fill="#f59e0b"/>
                </svg>
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 7c0-2.21-1.79-4-4-4S8 4.79 8 7s1.79 4 4 4 4-1.79 4-4zm-4 7c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="white"/>
                  <circle cx="18" cy="8" r="2" fill="white"/>
                </svg>
              </div>
              <span class="drawer__text">Usuarios</span>
            </NuxtLink>
            <div class="drawer__divider"></div>
          </li>
     
          <li>
            <NuxtLink to="/personal" class="drawer__link" @click="handleLinkClick">
              <div class="drawer__icon">
                <svg v-if="route.path.includes('/personal')" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#38f5b3"/>
                </svg>
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="white"/>
                </svg>
              </div>
              <span class="drawer__text">Datos personales</span>
            </NuxtLink>
            <div class="drawer__divider"></div>
          </li>

          <li v-if="authStore?.user && authStore?.user?.role?.name !== 'admin' && authStore?.user?.role?.name !== 'establecimiento'">
            <NuxtLink to="/modificaplan" class="drawer__link" @click="handleLinkClick">
              <div class="drawer__icon">
                <svg v-if="route.path.includes('/modificaplan')" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z" fill="#38f5b3"/>
                </svg>
                <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z" fill="white"/>
                </svg>
              </div>
              <span class="drawer__text">Modificar Planes</span>
            </NuxtLink>
            <div class="drawer__divider"></div>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Overlay para cerrar menú al hacer clic fuera -->
    <div 
      v-if="isMobile && isMobileMenuOpen" 
      class="mobile-overlay" 
      @click="closeMobileMenu"
    ></div>

    <div class="content">
      <nav class="navbar">
        <button class="hambur-menu hambur-menu--mobile" @click="toggleMobileDrawer">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 9H27M5 16H27M5 23H27" stroke="white" stroke-opacity="0.55" stroke-width="3"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        
        <button class="navbar__close-sesion" @click="logout">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.59L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" fill="currentColor"/>
          </svg>
          <span class="navbar__text">Cerrar sesion</span>
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
      activeLink: null,
      isCollapsed: false,
      isMobile: false,
      isMobileMenuOpen: false // Nuevo estado para controlar el menú móvil
    };
  },
  methods: {
    setActiveLink(link) {
      this.activeLink = link;
    },
    toggleDrawer() {
      if (!this.isMobile) {
        this.isCollapsed = !this.isCollapsed;
      }
    },
    toggleMobileDrawer() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    // Método para manejar clicks en los enlaces
    handleLinkClick() {
      if (this.isMobile) {
        this.closeMobileMenu();
      }
      // Llamar al método original si existe
      if (this.handleClick) {
        this.handleClick();
      }
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth < 1060;
      // Cerrar menú móvil si cambiamos a desktop
      if (!this.isMobile) {
        this.isMobileMenuOpen = false;
      }
    },
    handleResize() {
      this.checkScreenSize();
      // Reset collapse state on mobile
      if (this.isMobile) {
        this.isCollapsed = false;
      }
    }
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  // Watcher para cerrar menú cuando cambia la ruta
  watch: {
    '$route'() {
      if (this.isMobile) {
        this.closeMobileMenu();
      }
    }
  }
};
</script>

<script setup lang="ts">
const {
  public: { baseURL },
} = useRuntimeConfig();

const getProfilePicture = (url: string) => `${baseURL}${url}`;
const route = useRoute();
const { isAdmin, isEstablecimiento } = useAdmin();
const authStore = useAuthStore();
const router = useRouter();
const dataUser = computed(() => authStore.user);

const logout = async () => {
  await authStore.logout();
  router.push('/login');
};
</script>

<style scoped>
/* Base drawer styles */
.drawer {
  background: #1e293b;
  width: 280px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  overflow: hidden;
}

/* Collapsed state - shows only icons */
.drawer--collapsed {
  width: 70px;
}

.drawer--collapsed .drawer__text {
  opacity: 0;
  visibility: hidden;
  width: 0;
  overflow: hidden;
}

.drawer--collapsed .drawer__link {
  justify-content: center;
  padding: 12px;
}

.drawer--collapsed .drawer__logo {
  opacity: 0;
  visibility: hidden;
}

.drawer--collapsed .header__photo {
  width: 35px;
  height: 35px;
  margin: 10px auto;
}

/* Drawer actions */
.drawer__actions {
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 15px;
}

.hambur-menu {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  transition: background 0.2s;
}

.hambur-menu:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Logo */
.drawer__logo {
  flex: 1;
  transition: all 0.3s ease;
}

.drawer__logo-img {
  width: 100%;
  height: auto;
  max-width: 150px;
  object-fit: contain;
}

/* Profile photo */
.header__photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 20px;
  display: block;
  transition: all 0.3s ease;
}

/* Navigation links */
.drawer__list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.drawer__list li {
  margin-bottom: 5px;
}

.drawer__link {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  gap: 15px;
  border-radius: 0 25px 25px 0;
  margin-right: 10px;
}

.drawer__link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.drawer__link.router-link-active {
  background: rgba(245, 158, 11, 0.2);
  border-right: 3px solid #38f5b3 ;
}

.drawer__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.drawer__text {
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  transition: all 0.3s ease;
  overflow: hidden;
}

.drawer__divider {
  width: 100%;
  height: 1px;
  background: rgba(148, 163, 184, 0.3);
  margin: 8px 0;
}

/* Content area */
.content {
  margin-left: 280px;
  transition: margin-left 0.3s ease;
  min-height: 100vh;
}

.drawer--collapsed + .content {
  margin-left: 70px;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  background: #ffffff;
  color: white;
}

.navbar__close-sesion {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #232c4d;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.navbar__close-sesion:hover {
  background: #b91c1c;
}

.hambur-menu--mobile {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

/* Overlay móvil */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
  backdrop-filter: blur(2px);
}

/* Mobile styles */
@media (max-width: 1059px) {
  .drawer {
    transform: translateX(-100%);
    width: 280px;
    z-index: 101; /* Mayor que el overlay */
  }

  .drawer--visible {
    transform: translateX(0);
  }

  .drawer--collapsed {
    width: 280px;
    transform: translateX(-100%);
  }

  .drawer--collapsed.drawer--visible {
    transform: translateX(0);
  }

  .drawer--collapsed .drawer__text {
    opacity: 1;
    visibility: visible;
    width: auto;
  }

  .drawer--collapsed .drawer__link {
    justify-content: flex-start;
    padding: 15px 20px;
  }

  .drawer--collapsed .drawer__logo {
    opacity: 1;
    visibility: visible;
  }

  .content {
    margin-left: 0;
  }

  .drawer--collapsed + .content {
    margin-left: 0;
  }

  .hambur-menu--mobile {
    display: block;
  }

  /* Hide desktop hamburger on mobile */
  .drawer__actions .hambur-menu {
    display: none;
  }
}

/* Tablet styles */
@media (max-width: 768px) {
  .navbar {
    padding: 12px 15px;
  }

  .navbar__text {
    display: none;
  }

  .drawer__link {
    padding: 12px 15px;
    font-size: 14px;
  }
}

/* Logo fade transition */
.logo-fade-enter-active,
.logo-fade-leave-active {
  transition: opacity 0.3s ease;
}

.logo-fade-enter-from,
.logo-fade-leave-to {
  opacity: 0;
}

/* Active link styles */
.active-link {
  background: rgba(245, 158, 11, 0.2) !important;
  border-right: 3px solid #f59e0b;
}

/* Utility classes for responsive design */
.logo-small {
  width: 100%;
  height: auto;
  min-width: 20px;
  max-width: 200px;
  min-height: 20px;
  max-height: 200px;
  object-fit: contain;
}

/* Smooth scrollbar */
.drawer {
  scrollbar-width: thin;
  scrollbar-color: rgba(148, 163, 184, 0.5) transparent;
}

.drawer::-webkit-scrollbar {
  width: 6px;
}

.drawer::-webkit-scrollbar-track {
  background: transparent;
}

.drawer::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.5);
  border-radius: 3px;
}

.drawer::-webkit-scrollbar-thumb:hover {
  background: rgba(148, 163, 184, 0.7);
}

/* Animaciones mejoradas para móvil */
@media (max-width: 1059px) {
  .drawer {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .mobile-overlay {
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>