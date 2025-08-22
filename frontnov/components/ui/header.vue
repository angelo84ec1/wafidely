<template>
  <header
    class="fixed top-0 left-0 right-0 w-full p-4 flex justify-between items-center transition-all duration-300 ease-in-out glass-effect"
    :class="{ scrolled: scrolled }"
    ref="navbar"
    style="z-index: 999999 !important;"
  >
    <!-- Logo -->
    <NuxtLink to="/" class="flex items-center space-x-3 relative" style="z-index: 1000001 !important;">
  
      <div>
        
       <!-- Logo dinámico basado en el estado del scroll -->
       <img 
          :src="scrolled ? logoDefault  : logoScrolled"
          class="image-container transition-all duration-300 ease-in-out" 
          style="width: 179px; height: 35px;"
          alt="Logo Wafidely"
        />
          
   
        <p class="text-[8px] transition-colors ml-2" :class="scrolled ? 'text-gray-600' : 'text-gray-200'">
          Fidelidad en Whatsapp
        </p>
      </div>
    </NuxtLink>
    
    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center space-x-6" style="z-index: 1000001 !important;">
      <a 
        href="#features" 
        @click.prevent="scrollToSection('features')"
        class="nav-link transition-all cursor-pointer font-medium px-3 py-2 rounded-lg"
        :class="[
          activeSection === 'features' ? 'nav-link-active' : '',
          scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
        ]"
      >
        Características
      </a>
      <a 
        href="#pricing" 
        @click.prevent="scrollToSection('pricing')"
        class="nav-link transition-all cursor-pointer font-medium px-3 py-2 rounded-lg"
        :class="[
          activeSection === 'pricing' ? 'nav-link-active' : '',
          scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
        ]"
      >
        Precios
      </a>
      <a 
        href="#testimonials" 
        @click.prevent="scrollToSection('testimonials')"
        class="nav-link transition-all cursor-pointer font-medium px-3 py-2 rounded-lg"
        :class="[
          activeSection === 'testimonials' ? 'nav-link-active' : '',
          scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
        ]"
      >
        Testimonios
      </a>

      <a 
        href="https://docs.ai.wafidely.com/" 
        target="_blank"
        rel="noopener noreferrer"
        class="nav-link transition-all cursor-pointer font-medium px-3 py-2 rounded-lg"
        :class="[
          activeSection === 'testimonials' ? 'nav-link-active' : '',
          scrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'
        ]"
      >
        Documentación
      </a>
      <button 
        @click="startFreeTrial"
        class="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Probar Gratis
      </button>
    </div>
    
    <!-- Mobile Menu Button -->
    <div class="mobile-menu md:hidden" style="z-index: 1000001 !important;">
      <button @click="toggleMobileMenu" class="relative w-10 h-10 flex items-center justify-center focus:outline-none">
        <!-- Hamburger Menu Animation -->
        <div class="hamburger-menu" :class="{ 'active': mobileMenuOpen }">
          <span class="line line-1" :class="scrolled ? 'bg-gray-800' : 'bg-white'"></span>
          <span class="line line-2" :class="scrolled ? 'bg-gray-800' : 'bg-white'"></span>
          <span class="line line-3" :class="scrolled ? 'bg-gray-800' : 'bg-white'"></span>
        </div>
      </button>
    </div>
  </header>

  <!-- Mobile Menu Overlay -->
  <div 
    v-if="mobileMenuOpen"
    class="fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-300"
    @click="closeMobileMenu"
    style="z-index: 999998 !important;"
  ></div>

  <!-- Mobile Menu Panel -->
  <div 
    v-if="mobileMenuOpen"
    class="fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col"
    :class="mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    style="z-index: 1000000 !important;"
  >
    <!-- Mobile Menu Header -->
    <div class="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-900 flex-shrink-0">
      <div class="flex items-center space-x-3">
        
        <div>
          <img 
          :src="scrolled ? logoScrolled   : logoDefault"
          class="image-container transition-all duration-300 ease-in-out" 
          style="width: 179px; height: 35px;"
          alt="Logo Wafidely"
        />
          
        </div>
      </div>
      
      <!-- Close Button -->
      <button 
        @click="closeMobileMenu"
        class="w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Content -->
    <div class="flex-1 flex flex-col">
      <!-- Navigation Menu -->
      <div class="flex-1 py-6 overflow-y-auto">
        <ul class="space-y-2 px-6">
          <li>
            <a 
              href="#features" 
              @click.prevent="scrollToSection('features')"
              class="mobile-nav-link flex items-center px-4 py-4 rounded-lg transition-all duration-200 cursor-pointer group"
              :class="activeSection === 'features' ? 'mobile-nav-link-active' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'"
            >
              <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span class="font-medium">Características</span>
            </a>
          </li>
          
          <li>
            <a 
              href="#pricing" 
              @click.prevent="scrollToSection('pricing')"
              class="mobile-nav-link flex items-center px-4 py-4 rounded-lg transition-all duration-200 cursor-pointer group"
              :class="activeSection === 'pricing' ? 'mobile-nav-link-active' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'"
            >
              <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
              <span class="font-medium">Precios</span>
            </a>
          </li>
          
          <li>
            <a 
              href="#testimonials" 
              @click.prevent="scrollToSection('testimonials')"
              class="mobile-nav-link flex items-center px-4 py-4 rounded-lg transition-all duration-200 cursor-pointer group"
              :class="activeSection === 'testimonials' ? 'mobile-nav-link-active' : 'text-gray-700 hover:bg-green-50 hover:text-green-600'"
            >
              <svg class="w-5 h-5 mr-3 text-gray-400 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              <span class="font-medium">Testimonios</span>
            </a>
          </li>
          
          <li class="pt-6">
            <a 
              href="#" 
              @click.prevent="scrollToSection('features')"
              class="flex items-center px-4 py-3 text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
            >
              <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>¿Cómo funciona?</span>
            </a>
          </li>
          
          <li>
            <a 
              href="https://docs.ai.wafidely.com/" 
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center px-4 py-3 text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
            >
              
              <svg class="w-4 h-4 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>
                <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/>
                <path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M10 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span>Documentación</span>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Mobile CTA Button - Fixed at bottom -->
      <div class="flex-shrink-0 p-6 border-t border-gray-200 bg-white">
        <button 
          @click="startFreeTrial"
          class="w-full bg-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span>Probar Gratis</span>
        </button>
        
        <p class="text-center text-xs text-gray-500 mt-3">
          Sin tarjeta de crédito • 5 días gratis
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logoDefault from '~/assets/images/wafidelynegroturquesaverde.png'
import logoScrolled from '~/assets/images/wafidelyblanco.png'

// Reactive variables
const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const navbar = ref(null)
const activeSection = ref('')

// Methods
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  
  // Prevent body scroll when menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    // Set active section immediately for better UX
    activeSection.value = sectionId
    
    // Close mobile menu first
    closeMobileMenu()
    
    // Small delay to let menu close animation finish
    setTimeout(() => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 100)
  }
}

const startFreeTrial = () => {
  navigateTo('https://ai.wafidely.com/register', { 
    external: true,
    open: {
      target: '_blank'
    }
  })
  console.log('Starting free trial...')
  closeMobileMenu()
  // You can emit an event or redirect to signup page
  // navigateTo('/signup')
}



const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset
  
  // Activate scrolled state
  if (currentScrollPosition > 50) {
    scrolled.value = true
  } else {
    scrolled.value = false
  }

  // Update active section based on scroll position
  const sections = ['features', 'pricing', 'testimonials']
  let currentActiveSection = ''
  
  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const rect = element.getBoundingClientRect()
      // Check if section is in viewport (considering header height)
      if (rect.top <= 100 && rect.bottom >= 100) {
        currentActiveSection = sectionId
        break
      }
    }
  }
  
  // Only update if different to prevent unnecessary re-renders
  if (currentActiveSection && currentActiveSection !== activeSection.value) {
    activeSection.value = currentActiveSection
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Set initial active section
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = 'auto'
})

// Watch for escape key to close menu
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && mobileMenuOpen.value) {
      closeMobileMenu()
    }
  }
  
  document.addEventListener('keydown', handleEscape)
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
/* Glass effect for header */
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Header base styles */
header {
  transition: all 0.3s ease-in-out;
  z-index: 999999 !important;
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
}

/* Scrolled state styles */
header.scrolled {
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: headerAppear 0.3s ease-in-out;
}

/* Keyframe animation for header appearance */
@keyframes headerAppear {
  from {
    opacity: 0.7;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Desktop Navigation Link Active States */
.nav-link {
  position: relative;
  border-radius: 9px;
}

.nav-link-active {
  background: rgba(34, 197, 94, 0.1) !important;
  border: 2px solid #22c55e !important;
  color: #16a34a !important;
  font-weight: 600;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2);
}

/* Header scrolled state - active links */
header.scrolled .nav-link-active {
  background: rgba(34, 197, 94, 0.15) !important;
  border: 2px solid #22c55e !important;
  color: #16a34a !important;
}

/* Mobile Navigation Link Active States */
.mobile-nav-link {
  border-radius: 9px;
  position: relative;
}

.mobile-nav-link-active {
  background: rgba(34, 197, 94, 0.15) !important;
  border: 2px solid #22c55e !important;
  color: #16a34a !important;
  font-weight: 600;
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.15);
}

.mobile-nav-link-active .group-hover\:text-green-600 {
  color: #16a34a !important;
}

/* Enhanced transitions for active states */
.nav-link,
.mobile-nav-link {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hamburger Menu Animation */
.hamburger-menu {
  width: 24px;
  height: 18px;
  position: relative;
  cursor: pointer;
}

.line {
  display: block;
  height: 2px;
  width: 100%;
  border-radius: 1px;
  transition: all 0.3s ease-in-out;
  transform-origin: center;
  position: absolute;
}

.line-1 {
  top: 0;
}

.line-2 {
  top: 50%;
  transform: translateY(-50%);
}

.line-3 {
  bottom: 0;
}

/* Active state - Transform to X */
.hamburger-menu.active .line-1 {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-menu.active .line-2 {
  opacity: 0;
  transform: translateY(-50%) scale(0);
}

.hamburger-menu.active .line-3 {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile menu styles */
.mobile-menu {
  display: none;
  z-index: 1000001 !important;
}

.mobile-menu button {
  z-index: 1000001 !important;
  position: relative;
}

/* Mobile responsive */
@media only screen and (max-width: 768px) {
  .mobile-menu {
    display: block !important;
    z-index: 1000001 !important;
  }
  
  header {
    padding: 16px;
  }
}

/* Mobile menu custom width */
@media (max-width: 380px) {
  .fixed.top-0.right-0.w-80 {
    width: 100vw;
  }
}

/* Smooth transitions for all interactive elements */
* {
  transition: color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

/* Enhanced hover effects */
.group:hover .group-hover\:text-green-600 {
  color: #16a34a;
}

/* Better focus states */
button:focus,
a:focus {
  outline: 2px solid #22c55e;
  outline-offset: 2px;
}

/* Prevent body scroll when menu is open */
body.menu-open {
  overflow: hidden;
}

/* Animation for active state changes */
@keyframes activeGlow {
  0% {
    box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2);
  }
  50% {
    box-shadow: 0 6px 16px rgba(34, 197, 94, 0.3);
  }
  100% {
    box-shadow: 0 4px 12px rgba(34, 197, 94, 0.2);
  }
}

.nav-link-active,
.mobile-nav-link-active {
  animation: activeGlow 2s ease-in-out infinite;
}
</style>