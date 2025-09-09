<script setup>
</script>
<template>
  <main class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Constructor de Landing Page</h1>
            <p class="text-sm text-gray-600 mt-1">Organiza tu contenido por secciones</p>
          </div>
          
          <!-- Action Buttons -->
          <div class="flex items-center space-x-3">
            <button 
              @click.prevent="router.push(`/aiembudo/${currentUserEstablishment[0]?.id}`)"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              Ver Landing Page
            </button>
            
            <button 
              @click.prevent="save()"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"/>
              </svg>
              Guardar Landing
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Progress Indicator -->
    <div class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center py-3">
          <div class="flex items-center space-x-2">
            <div v-for="(tab, index) in tabs" :key="tab.id" class="flex items-center">
              <div :class="[
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors',
                activeTab === tab.id ? 'bg-indigo-600 text-white' : 
                completedTabs.includes(tab.id) ? 'bg-green-500 text-white' :
                'bg-gray-200 text-gray-600'
              ]">
                <svg v-if="completedTabs.includes(tab.id)" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span v-else>{{ index + 1 }}</span>
              </div>
              <div v-if="index < tabs.length - 1" :class="[
                'w-12 h-0.5 mx-2 transition-colors',
                completedTabs.includes(tab.id) ? 'bg-green-500' : 'bg-gray-200'
              ]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Tab Navigation -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div class="border-b border-gray-200">
          <nav class="flex space-x-0 overflow-x-auto">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="[
                'flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap',
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-600 bg-indigo-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              ]"
            >
              <div class="flex items-center space-x-2">
                <component :is="tab.icon" class="w-5 h-5" />
                <span>{{ tab.name }}</span>
                <span v-if="completedTabs.includes(tab.id)" class="w-2 h-2 bg-green-500 rounded-full"></span>
              </div>
            </button>
          </nav>
        </div>

        <!-- Tab Content -->
        <div class="p-6">
          <!-- Images Tab -->
          <div v-show="activeTab === 'images'" class="space-y-8">
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">Gestión de Imágenes</h3>
              <p class="text-sm text-gray-600 mb-6">Sube tu banner, logo y hasta 5 imágenes para la galería</p>
            </div>

            <!-- Banner and Logo Row -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Banner -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="text-md font-medium text-gray-900 mb-4">Banner Principal</h4>
                <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div class="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center">
        <img v-if="banner && banner.length > 0" 
             :src="getProfilePicture(banner[0].url)" 
             alt="Banner" 
             class="max-w-full max-h-full object-contain"/>
        <BaseFileInput v-else 
                       v-model="bannerFile" 
                       label="Subir banner" 
                       name="banner" 
                       @update:modelValue="captureFile($event, 'banner')" />
      </div>
                  <div class="p-4">
                    <div class="flex items-center justify-between mb-3">
                      <span class="text-sm font-medium text-gray-700">Banner Principal</span>
                      <button v-if="banner" @click.prevent="banner = ''" class="text-red-500 hover:text-red-700">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                        </svg>
                      </button>
                    </div>
                    <button @click.prevent="uploadFile(bannerFile, 'banner')" 
                            class="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                      Subir Banner
                    </button>
                  </div>
                </div>
              </div>

              <!-- Logo -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="text-md font-medium text-gray-900 mb-4">Logo de la Empresa</h4>
                <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div class="aspect-square bg-gray-100">
                    <img v-if="logo && logo.length > 0" 
                         :src="getProfilePicture(logo[0].url)" 
                         alt="Logo" 
                         class="w-full h-48 object-contain"/>
                    <BaseFileInput v-else 
                                   v-model="logoFile" 
                                   label="Subir logo" 
                                   name="logo" 
                                   @update:modelValue="captureFile($event, 'logo')" />
                  </div>
                  <div class="p-4">
                    <div class="flex items-center justify-between mb-3">
                      <span class="text-sm font-medium text-gray-700">Logo</span>
                      <button v-if="logo" @click.prevent="logo = ''" class="text-red-500 hover:text-red-700">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                        </svg>
                      </button>
                    </div>
                    <button @click.prevent="uploadFile(logoFile, 'logo')" 
                            class="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                      Subir Logo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Gallery -->
            <div>
              <h4 class="text-md font-medium text-gray-900 mb-4">Galería de Imágenes</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Gallery Item Template -->
                <div v-for="(gallery, index) in galleries" :key="index" class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div class="aspect-square bg-gray-100">
                    <img v-if="gallery.ref.value && gallery.ref.value.length > 0" 
                         :src="getProfilePicture(gallery.ref.value[0].url)" 
                         alt="" 
                         class="w-full h-40 object-cover"/>
                    <BaseFileInput v-else 
                                   v-model="gallery.file.value" 
                                   :label="`Subir ${gallery.label}`" 
                                   :name="gallery.name" 
                                   @update:modelValue="captureFile($event, gallery.name)" />
                  </div>
                  <div class="p-4">
                    <div class="flex items-center justify-between mb-3">
                      <span class="text-sm font-medium text-gray-700">{{ gallery.label }}</span>
                      <button v-if="gallery.ref.value" @click.prevent="gallery.ref.value = ''" class="text-red-500 hover:text-red-700">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                        </svg>
                      </button>
                    </div>
                    <button @click.prevent="uploadFile(gallery.file.value, gallery.name)" 
                            class="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm">
                      Subir {{ gallery.label }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- General Info Tab -->
          <div v-show="activeTab === 'general'" class="space-y-6">
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">Información General</h3>
              <p class="text-sm text-gray-600 mb-6">Configura la información básica de tu establecimiento</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BaseInput v-model="name" type="text" label="Nombre del Establecimiento" name="nombre" />
              <BaseSelect v-model="category" label="Categoría" :options="categoryOptions" name="categoria" />
              <BaseInput v-model="contact" type="text" label="Número de Contacto" name="contacto" />
              <BaseInput v-model="whatsa" type="text" label="WhatsApp" name="whatsapp" placeholder="empezar con +593 luego 09..." />
              <div class="md:col-span-2">
                <BaseInput v-model="form" type="email" label="Email de Contacto" name="formulario" />
              </div>
            </div>
          </div>

          <!-- Locations Tab -->
          <div v-show="activeTab === 'locations'" class="space-y-8">
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">Ubicaciones</h3>
              <p class="text-sm text-gray-600 mb-6">Configura tu oficina matriz y hasta 4 sucursales</p>
            </div>

            <!-- Main Office -->
            <div class="bg-blue-50 rounded-lg p-6">
              <h4 class="text-md font-medium text-blue-900 mb-4 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                Oficina Matriz
              </h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <BaseInput v-model="titulomaps" type="text" label="Ciudad" placeholder="Quito" />
                <BaseInput v-model="maps" type="text" label="Coordenadas Google Maps" placeholder="-0.089666, -78.429636" />
                <BaseInput v-model="direction1" type="text" label="Dirección" placeholder="Av. 6 de diciembre y Eloy Alfaro" />
              </div>
            </div>

            <!-- Branches -->
            <div class="space-y-6">
              <h4 class="text-md font-medium text-gray-900">Sucursales</h4>
              <div v-for="(branch, index) in branches" :key="index" class="bg-gray-50 rounded-lg p-6">
                <h5 class="text-sm font-medium text-gray-700 mb-4">Sucursal {{ index + 1 }}</h5>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <BaseInput v-model="branch.title.value" type="text" :label="`Ciudad Sucursal ${index + 1}`" :placeholder="branch.cityPlaceholder" />
                  <BaseInput v-model="branch.coords.value" type="text" :label="`Google Maps Sucursal ${index + 1}`" placeholder="-0.089666, -78.429636" />
                  <BaseInput v-model="branch.address.value" type="text" :label="`Dirección Sucursal ${index + 1}`" placeholder="Av. 6 de diciembre y Eloy Alfaro" />
                </div>
              </div>
            </div>
          </div>

          <!-- Content Tab -->
          <div v-show="activeTab === 'content'" class="space-y-6">
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">Contenido de la Landing Page</h3>
              <p class="text-sm text-gray-600 mb-6">Crea hasta 10 secciones de contenido para tu landing page</p>
            </div>

            <div class="space-y-8">
              <div v-for="(content, index) in contentSections" :key="index" class="bg-gray-50 rounded-lg p-6">
                <h4 class="text-md font-medium text-gray-900 mb-4">Sección {{ index + 1 }}</h4>
                <div class="space-y-4">
                  <BaseInput v-model="content.title.value" type="text" :label="`Título Descripción ${index + 1}`" />
                  <BaseTextarea v-model="content.description.value" :label="`Descripción ${index + 1}`" 
                                class="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
              </div>
            </div>
          </div>

          <!-- Social Media Tab -->
          <div v-show="activeTab === 'social'" class="space-y-6">
            <div>
              <h3 class="text-lg font-medium text-gray-900 mb-4">Redes Sociales</h3>
              <p class="text-sm text-gray-600 mb-6">Conecta tus redes sociales para ampliar tu alcance</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-blue-50 rounded-lg p-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <h4 class="text-md font-medium text-blue-900">Facebook</h4>
                </div>
                <BaseInput v-model="face" type="url" label="URL de Facebook" placeholder="https://facebook.com/tu-pagina" />
              </div>

              <div class="bg-pink-50 rounded-lg p-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center mr-3">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M12.017 6.015a.75.75 0 00-1.034 1.09l1.615 1.533H6.75a.75.75 0 100 1.5h5.848l-1.615 1.533a.75.75 0 101.034 1.09l2.85-2.71a.75.75 0 000-1.09l-2.85-2.71z" clip-rule="evenodd"/>
                      <path fill-rule="evenodd" d="M7.75 3.5c-1.933 0-3.5 1.567-3.5 3.5v6c0 1.933 1.567 3.5 3.5 3.5h4.5c1.933 0 3.5-1.567 3.5-3.5V7c0-1.933-1.567-3.5-3.5-3.5h-4.5z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <h4 class="text-md font-medium text-pink-900">Instagram</h4>
                </div>
                <BaseInput v-model="insta" type="url" label="URL de Instagram" placeholder="https://instagram.com/tu-perfil" />
              </div>

              <div class="bg-gray-50 rounded-lg p-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center mr-3">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <h4 class="text-md font-medium text-gray-900">TikTok</h4>
                </div>
                <BaseInput v-model="tik" type="url" label="URL de TikTok" placeholder="https://tiktok.com/@tu-perfil" />
              </div>

              <div class="bg-red-50 rounded-lg p-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"/>
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"/>
                    </svg>
                  </div>
                  <h4 class="text-md font-medium text-red-900">YouTube</h4>
                </div>
                <BaseInput v-model="youtu" type="url" label="URL de YouTube" placeholder="https://youtube.com/tu-canal" />
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Footer -->
        <div class="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-between items-center">
          <button 
            @click="previousTab"
            :disabled="currentTabIndex === 0"
            :class="[
              'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-colors',
              currentTabIndex === 0 
                ? 'text-gray-400 bg-gray-100 cursor-not-allowed' 
                : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
            ]"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Anterior
          </button>

          <div class="text-sm text-gray-500">
            {{ currentTabIndex + 1 }} de {{ tabs.length }}
          </div>

          <button 
            @click="nextTab"
            :disabled="currentTabIndex === tabs.length - 1"
            :class="[
              'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-colors',
              currentTabIndex === tabs.length - 1 
                ? 'text-gray-400 bg-gray-100 cursor-not-allowed' 
                : 'text-white bg-indigo-600 hover:bg-indigo-700'
            ]"
          >
            Siguiente
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import BaseInput from "~/components/common/inputs/base-input.vue";
import BaseFileInput from "~/components/common/inputs/file-input.vue";
import BaseTextarea from "~/components/common/inputs/base-textarea.vue";
import BaseSelect from "~/components/common/inputs/base-select.vue";
import useAdmin from '~/composables/useAdmin';
import { useAuthStore } from "~/store/auth";
import type { User, EstableCimientos } from "~/common/interfaces/user.interface";
import { useToast } from "vue-toastification";

const {
  public: { baseURL },
} = useRuntimeConfig();
const BASE_URL = baseURL;

definePageMeta({
  title: "Landing",
  name: "Landing Page",
  components: {
    BaseInput,
    BaseTextarea,
    BaseFileInput,
    BaseSelect
  },
  layout: "private",
  middleware: ["auth"],
});

const { isAdmin, isEstablecimiento } = useAdmin()
const authStore = useAuthStore();
const router = useRouter();
const toast = useToast();

// Active tab management
const activeTab = ref('images')
const completedTabs = ref<string[]>([])

// Tab configuration
const tabs = [
  { 
    id: 'images', 
    name: 'Imágenes', 
    icon: 'svg',
  },
  { 
    id: 'general', 
    name: 'Info General', 
    icon: 'svg',
  },
  { 
    id: 'locations', 
    name: 'Ubicaciones', 
    icon: 'svg',
  },
  { 
    id: 'content', 
    name: 'Contenido', 
    icon: 'svg',
  },
  { 
    id: 'social', 
    name: 'Redes Sociales', 
    icon: 'svg',
  }
]

const currentTabIndex = computed(() => tabs.findIndex(tab => tab.id === activeTab.value))

// Navigation methods
const nextTab = () => {
  if (currentTabIndex.value < tabs.length - 1) {
    // Mark current tab as completed
    if (!completedTabs.value.includes(activeTab.value)) {
      completedTabs.value.push(activeTab.value)
    }
    activeTab.value = tabs[currentTabIndex.value + 1].id
  }
}

const previousTab = () => {
  if (currentTabIndex.value > 0) {
    activeTab.value = tabs[currentTabIndex.value - 1].id
  }
}

// Existing form data
const getProfilePicture = (url: string) => `${BASE_URL}${url}`;
const formPersonalData = ref<HTMLFormElement | null>(null);

// Form fields
const category = ref<boolean>(false);
const name = ref("");
const contact = ref("");
const whatsa = ref("");
const form = ref("");

// Maps and locations
const maps = ref("");
const maps2 = ref("");
const maps3 = ref("");
const maps4 = ref("");
const maps5 = ref("");
const titulomaps = ref("");
const titulomaps2 = ref("");
const titulomaps3 = ref("");
const titulomaps4 = ref("");
const titulomaps5 = ref("");
const direction1 = ref("");
const direction2 = ref("");
const direction3 = ref("");
const direction4 = ref("");
const direction5 = ref("");

// Content sections
const titledescription1 = ref("");
const description1 = ref("");
const titledescription2 = ref("");
const description2 = ref("");
const titledescription3 = ref("");
const description3 = ref("");
const titledescription4 = ref("");
const description4 = ref("");
const titledescription5 = ref("");
const description5 = ref("");
const titledescription6 = ref("");
const description6 = ref("");
const titledescription7 = ref("");
const description7 = ref("");
const titledescription8 = ref("");
const description8 = ref("");
const titledescription9 = ref("");
const description9 = ref("");
const titledescription10 = ref("");
const description10 = ref("");

// Social media
const face = ref("");
const insta = ref("");
const tik = ref("");
const youtu = ref("");

// Images
const banner = ref(null);
const logo = ref(null);
const galeria1 = ref(null);
const galeria2 = ref(null);
const galeria3 = ref(null);
const galeria4 = ref(null);
const galeria5 = ref(null);
const bannerFile = ref<File | null>(null);
const logoFile = ref<File | null>(null);
const galeria1File = ref<File | null>(null);
const galeria2File = ref<File | null>(null);
const galeria3File = ref<File | null>(null);
const galeria4File = ref<File | null>(null);
const galeria5File = ref<File | null>(null);

// Organized data structures for templates
const galleries = [
  { name: 'galeria1', label: 'Galería 1', ref: galeria1, file: galeria1File },
  { name: 'galeria2', label: 'Galería 2', ref: galeria2, file: galeria2File },
  { name: 'galeria3', label: 'Galería 3', ref: galeria3, file: galeria3File },
  { name: 'galeria4', label: 'Galería 4', ref: galeria4, file: galeria4File },
  { name: 'galeria5', label: 'Galería 5', ref: galeria5, file: galeria5File },
]

const branches = [
  { 
    title: titulomaps2, 
    coords: maps2, 
    address: direction2, 
    cityPlaceholder: 'Guayaquil' 
  },
  { 
    title: titulomaps3, 
    coords: maps3, 
    address: direction3, 
    cityPlaceholder: 'Cuenca' 
  },
  { 
    title: titulomaps4, 
    coords: maps4, 
    address: direction4, 
    cityPlaceholder: 'Ambato' 
  },
  { 
    title: titulomaps5, 
    coords: maps5, 
    address: direction5, 
    cityPlaceholder: 'Ibarra' 
  },
]

const contentSections = [
  { title: titledescription1, description: description1 },
  { title: titledescription2, description: description2 },
  { title: titledescription3, description: description3 },
  { title: titledescription4, description: description4 },
  { title: titledescription5, description: description5 },
  { title: titledescription6, description: description6 },
  { title: titledescription7, description: description7 },
  { title: titledescription8, description: description8 },
  { title: titledescription9, description: description9 },
  { title: titledescription10, description: description10 },
]

const categoryOptions = ref([
  { text: "Veterinaria", value: "Veterinaria" },
  { text: "Clínica", value: "Clínica" },
  { text: "Agencias de IA", value: "Agencias de IA" },
  { text: "Gimnasios", value: "Gimnasios" },
  { text: "Talleres Vehículos", value: "Talleres Vehículos" },
]);

const currentUserEstablishment = ref<EstableCimientos | null>(null);

// Existing methods
const captureFile = (file: File, type: String) => {
  if (type === "banner") {
    bannerFile.value = file;
  } else if (type === "logo") {
    logoFile.value = file;
  } else if (type === "galeria1") {
    galeria1File.value = file;
  } else if (type === "galeria2") {
    galeria2File.value = file;
  } else if (type === "galeria3") {
    galeria3File.value = file;
  } else if (type === "galeria4") {
    galeria4File.value = file;
  } else if (type === "galeria5") {
    galeria5File.value = file;
  } 
  console.log(file);
};

const uploadFile = (file: File, name: String) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    console.log(reader.result);
  };

  console.log(file);
  const formData = new FormData();
  formData.append("files", file);
  fetch(`https://wafiapi.wafidely.com/upload`, {
    method: "POST",
    body: formData,
  }).then(response => response.json())
  .then(data => {
    console.log(data);
    if (name === "banner") {
      banner.value = data;
      toast.success("Banner subido");
    } else if (name === "logo") {
      logo.value = data;
      toast.success("Logo subido");
    } else if (name === "galeria1") {
      galeria1.value = data;
      toast.success("Galeria 1 subida");
    } else if (name === "galeria2") {
      galeria2.value = data;
      toast.success("Galeria 2 subida");
    } else if (name === "galeria3") {
      galeria3.value = data;
      toast.success("Galeria 3 subida");
    } else if (name === "galeria4") {
      galeria4.value = data;
      toast.success("Galeria 4 subida");
    } else if (name === "galeria5") {
      galeria5.value = data;
      toast.success("Galeria 5 subida");
    } 
  })
  .catch(error => {
    console.error(error)
    toast.error("File size should be less than 1 mb");
  })
};

const fetchData = () => {
  fetch(`https://wafiapi.wafidely.com/establecimientos/${currentUserEstablishment.value[0]?.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${authStore.getToken}`
    }
  }).then(response => response.json())
  .then(data => {
    console.log(data);
    banner.value = data.banner
    logo.value = data.logo
    galeria1.value = data.galeria1
    galeria2.value = data.galeria2
    galeria3.value = data.galeria3
    galeria4.value = data.galeria4
    galeria5.value = data.galeria5
    category.value = data.categoria
    name.value = data.nombre
    titledescription1.value = data.titulodescripcion1
    description1.value = data.detalledescripcion1
    titledescription2.value = data.titulodescripcion2
    description2.value = data.detalledescripcion2
    titledescription3.value = data.titulodescripcion3
    description3.value = data.detalledescripcion3
    titledescription4.value = data.titulodescripcion4
    description4.value = data.detalledescripcion4
    titledescription5.value = data.titulodescripcion5
    description5.value = data.detalledescripcion5
    titledescription6.value = data.titulodescripcion6
    description6.value = data.detalledescripcion6
    titledescription7.value = data.titulodescripcion7
    description7.value = data.detalledescripcion7
    titledescription8.value = data.titulodescripcion8
    description8.value = data.detalledescripcion8
    titledescription9.value = data.titulodescripcion9
    description9.value = data.detalledescripcion9
    titledescription10.value = data.titulodescripcion10
    description10.value = data.detalledescripcion10
    contact.value = data.numerocontacto
    face.value = data.facebook
    insta.value = data.instagram
    tik.value = data.tiktok
    youtu.value = data.youtube
    whatsa.value = data.whatsapp
    form.value = data.formulario

    maps.value = data.googlemaps
    maps2.value = data.googlemaps2
    maps3.value = data.googlemaps3
    maps4.value = data.googlemaps4
    maps5.value = data.googlemaps5
    titulomaps.value = data.titulogooglemaps
    titulomaps2.value = data.titulogooglemaps2
    titulomaps3.value = data.titulogooglemaps3
    titulomaps4.value = data.titulogooglemaps4
    titulomaps5.value = data.titulogooglemaps5
    direction1.value = data.direccion1
    direction2.value = data.direccion2
    direction3.value = data.direccion3
    direction4.value = data.direccion4
    direction5.value = data.direccion5
  })
}

const save = async () => {
  try {
    let description1Url = "";
    let description2Url = "";
    let description3Url = "";
    let description4Url = "";
    let description5Url = "";

    const data = {
      banner: banner.value,
      logo: logo.value,
      galeria1: galeria1.value,
      galeria2: galeria2.value,
      galeria3: galeria3.value,
      galeria4: galeria4.value,
      galeria5: galeria5.value,
      categoria: category.value,
      nombre: name.value,
     
      titulodescripcion1: titledescription1.value,
      detalledescripcion1: description1.value,
      detalledescripcion1Url: description1Url,

      titulodescripcion2: titledescription2.value,
      detalledescripcion2: description2.value,
      detalledescripcion2Url: description2Url,

      titulodescripcion3: titledescription3.value,
      detalledescripcion3: description3.value,
      detalledescripcion3Url: description3Url,

      titulodescripcion4: titledescription4.value,
      detalledescripcion4: description4.value,
      detalledescripcion4Url: description4Url,

      titulodescripcion5: titledescription5.value,
      detalledescripcion5: description5.value,
      detalledescripcion5Url: description5Url,

      titulodescripcion6: titledescription6.value,
      detalledescripcion6: description6.value,
      titulodescripcion7: titledescription7.value,
      detalledescripcion7: description7.value,
      titulodescripcion8: titledescription8.value,
      detalledescripcion8: description8.value,
      titulodescripcion9: titledescription9.value,
      detalledescripcion9: description9.value,
      titulodescripcion10: titledescription10.value,
      detalledescripcion10: description10.value,
      facebook: face.value,
      instagram: insta.value,
      tiktok: tik.value,
      youtube: youtu.value,
      numerocontacto: contact.value,
      whatsapp: whatsa.value,
      formulario: form.value,

      googlemaps: maps.value,
      googlemaps2: maps2.value,
      googlemaps3: maps3.value,
      googlemaps4: maps4.value,
      googlemaps5: maps5.value,
      titulogooglemaps: titulomaps.value,
      titulogooglemaps2: titulomaps2.value,
      titulogooglemaps3: titulomaps3.value,
      titulogooglemaps4: titulomaps4.value,
      titulogooglemaps5: titulomaps5.value,
      direccion1: direction1.value,
      direccion2: direction2.value,
      direccion3: direction3.value,
      direccion4: direction4.value,
      direccion5: direction5.value,
    };

    const response = await fetch(`https://wafiapi.wafidely.com/establecimientos/${currentUserEstablishment.value[0]?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authStore.getToken}`
      },
      body: JSON.stringify(data)
    });

    console.log(response)

    if (response.ok) {
      toast.success("Información guardada");
      fetchData();
      sendEmail();
    } else {
      toast.error("Failed to submit form");
    }
  } catch (error) {
    toast.error("An error occurred while submitting the form");
    console.log("Error",error);
  }
};

const sendEmail = () => {
  try {
    const emailData = {
      to: "websecuador.net@gmail.com",
      subject: 'Landing Page Creada',
      text: `
      Un establecimiento creo la Landing page con la siguiente información a revisar:

          Whatsapp: ${whatsa.value}
          Correo: ${form.value}
        `,
    };

    fetch(`${baseURL}/email/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })
      .then((res) => {
        if (res.ok) {
          toast.success('Información enviada a Revisión');
        } else {
          toast.error('Error al enviar el correo');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.error("Error sending email", error);
  }
};

onMounted(() => {
  currentUserEstablishment.value = authStore.user?.establecimientos;
  console.log(currentUserEstablishment.value);
  fetchData()
})
</script>

<style scoped>
/* Custom styles for better visual hierarchy */
.aspect-w-16 {
  position: relative;
  width: 100%;
}

.aspect-w-16::before {
  content: "";
  display: block;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.aspect-w-16 > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.aspect-square {
  aspect-ratio: 1;
}
</style>