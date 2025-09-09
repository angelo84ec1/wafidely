<template>
  <main class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between py-6">
          <div class="flex items-center space-x-4">
            <div class="relative">
              <img 
                v-if="dataUser && dataUser.datos_personales?.foto?.url"
                :src="getProfilePicture(dataUser.datos_personales.foto.url)"
                :alt="dataUser.datos_personales.nombres ?? 'profile-picture'" 
                class="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg" 
              />
              <div v-else class="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white shadow-lg">
                <svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">
                <span v-if="dataUser && dataUser.datos_personales">
                  {{ dataUser.datos_personales.nombres }} {{ dataUser.datos_personales.apellidos }}
                </span>
                <span v-else>Datos Personales</span>
              </h1>
              <p class="text-sm text-gray-600">Completa tu información personal</p>
            </div>
          </div>
          
          <!-- Save Button -->
          <button 
            @click.prevent="save()"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors shadow-lg"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"/>
            </svg>
            Guardar Cambios
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <form ref="formPersonalData" class="space-y-8">
        
        <!-- Photo Section -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 class="text-lg font-semibold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Foto de Perfil
            </h2>
            <p class="text-sm text-gray-600 mt-1">Sube tu foto de perfil desde archivo o webcam</p>
          </div>
          
          <div class="p-6">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- File Upload -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-md font-medium text-gray-900 mb-4">Subir desde Archivo</h3>
                <BaseFileInput 
                  label="Foto de perfil" 
                  name="foto" 
                  @file-updated="captureFile($event)"
                  class="w-full"
                />
                <p class="text-xs text-gray-500 mt-2">Solo archivos PNG, JPG o JPEG. Máximo 5MB.</p>
              </div>
              
              <!-- Webcam Upload -->
              <div class="bg-gray-50 rounded-lg p-6">
                <h3 class="text-md font-medium text-gray-900 mb-4">Capturar desde Webcam</h3>
                <BaseInputImageFromWebcam 
                  label="Foto de perfil de webcam" 
                  name="fotoWebcam"
                  @file-updated="captureFile($event)"
                  class="w-full"
                />
                <p class="text-xs text-gray-500 mt-2">Usa tu cámara web para tomar una foto.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Personal Information -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 class="text-lg font-semibold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              Información Personal
            </h2>
            <p class="text-sm text-gray-600 mt-1">Completa tus datos personales básicos</p>
          </div>
          
          <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BaseInput 
                v-model="names" 
                type="text" 
                label="Nombres" 
                name="nombres"
                placeholder="Ingresa tus nombres completos"
                class="w-full"
              />
              <BaseInput 
                v-model="lastnames" 
                type="text" 
                label="Apellidos" 
                name="apellidos"
                placeholder="Ingresa tus apellidos completos"
                class="w-full"
              />
              <BaseInput 
                v-model="company" 
                type="text" 
                label="Compañía" 
                name="compania"
                placeholder="Nombre de tu empresa (opcional)"
                class="w-full"
              />
              <BaseInput 
                v-model="nationality" 
                type="text" 
                label="Nacionalidad" 
                name="nacionalidad"
                placeholder="Tu nacionalidad"
                class="w-full"
              />
            </div>
          </div>
        </div>

        <!-- Identification Documents -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 class="text-lg font-semibold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 2L3 14h7v8l7-12h-7V2z"/>
              </svg>
              Documentos de Identificación
            </h2>
            <p class="text-sm text-gray-600 mt-1">Información de tus documentos oficiales</p>
          </div>
          
          <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <BaseInput 
                v-model="idRuc" 
                type="text" 
                label="Ruc / Nut / Nit" 
                name="cedula_ruc"
                placeholder="Número de RUC"
                class="w-full"
              />
              <BaseInput 
                v-model="iCedula" 
                type="text" 
                label="Cédula / DNI / ID Nacional" 
                name="cedula"
                placeholder="Número de cédula"
                class="w-full"
              />
              <BaseInput 
                v-model="passport" 
                type="text" 
                label="Pasaporte" 
                name="pasaporte"
                placeholder="Número de pasaporte"
                class="w-full"
              />
            </div>
          </div>
        </div>

        <!-- Location Information -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 class="text-lg font-semibold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              Información de Ubicación
            </h2>
            <p class="text-sm text-gray-600 mt-1">Detalles de tu ubicación y domicilio</p>
          </div>
          
          <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BaseInput 
                v-model="country" 
                type="text" 
                label="País" 
                name="pais"
                placeholder="País de residencia"
                class="w-full"
              />
              <BaseInput 
                v-model="province" 
                type="text" 
                label="Provincia" 
                name="provincia"
                placeholder="Provincia o estado"
                class="w-full"
              />
              <BaseInput 
                v-model="city" 
                type="text" 
                label="Ciudad" 
                name="ciudad"
                placeholder="Ciudad de residencia"
                class="w-full"
              />
              <div class="md:col-span-2">
                <BaseInput 
                  v-model="direction" 
                  type="text" 
                  label="Dirección" 
                  name="direccion"
                  placeholder="Dirección completa de domicilio"
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 class="text-lg font-semibold text-gray-900 flex items-center">
              <svg class="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Información de Contacto
            </h2>
            <p class="text-sm text-gray-600 mt-1">Medios de comunicación para contactarte</p>
          </div>
          
          <div class="p-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BaseInput 
                v-model="cellphone" 
                type="text" 
                label="Celular" 
                name="celular"
                placeholder="Número de celular"
                class="w-full"
              />
              <BaseInput 
                v-model="phone" 
                type="text" 
                label="Teléfono Convencional" 
                name="telefono_convencional"
                placeholder="Teléfono fijo"
                class="w-full"
              />
              <div class="md:col-span-2">
                <BaseInput 
                  v-model="email" 
                  type="email" 
                  label="Correo Electrónico" 
                  name="correo"
                  placeholder="tu@email.com"
                  class="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-end space-x-4 pt-6">
          <button 
            type="button"
            class="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Cancelar
          </button>
          <button 
            @click.prevent="save()"
            class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors shadow-lg"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12"/>
            </svg>
            Guardar Datos
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useAuthStore } from '~/store/auth';
import BaseInput from "~/components/common/inputs/base-input.vue";
import BaseFileInput from "~/components/common/inputs/file-input.vue";
import BaseInputImageFromWebcam from "~/components/common/inputs/file-input-image-webcam.vue";
import type { User } from "~/common/interfaces/user.interface";
import { useToast } from "vue-toastification";

definePageMeta({
  title: "Datos Personales",
  name: "Personal Data Page",
  components: {
    BaseInput,
    BaseFileInput,
    BaseInputImageFromWebcam,
  },
  layout: "private",
  middleware: ["auth"],
});

const authStore = useAuthStore();
const router = useRouter();
const toast = useToast();

const {
  public: { baseURL },
} = useRuntimeConfig();
const BASE_URL = baseURL;

const getProfilePicture = (url: string) => `${BASE_URL}${url}`;

// Form refs
const formPersonalData = ref<HTMLFormElement | null>(null);

// Form data
const file = ref<File | null>(null);
const names = ref<string>("");
const lastnames = ref<string>("");
const company = ref<string>("");
const idRuc = ref<string>("");
const iCedula = ref<string>("");
const passport = ref<string>("");
const nationality = ref<string>("");
const cellphone = ref<string>("");
const phone = ref<string>("");
const email = ref<string>("");
const country = ref<string>("");
const city = ref<string>("");
const direction = ref<string>("");
const province = ref<string>("");
const webCamImage = ref<File | null>(null);

// Fetch user data
const { data: dataUser } = useFetch<User>(`${BASE_URL}/users/${authStore.user?.id}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authStore.token}`,
  },
});

// Watch for data changes and populate form
watch(dataUser, () => {
  if (dataUser.value?.datos_personales) {
    const dp = dataUser.value.datos_personales;
    
    names.value = dp.nombres ?? "";
    lastnames.value = dp.apellidos ?? "";
    company.value = dp.compania ?? "";
    idRuc.value = dp.cedula_ruc ?? "";
    iCedula.value = dp.cedula ?? "";
    passport.value = dp.pasaporte ?? "";
    nationality.value = dp.nacionalidad ?? "";
    cellphone.value = dp.celular ?? "";
    phone.value = dp.telefono_convencional ?? "";
    email.value = dp.correo ?? "";
    country.value = dp.pais ?? "";
    city.value = dp.ciudad ?? "";
    direction.value = dp.direccion ?? "";
    province.value = dp.provincia ?? "";
  }
});

// File capture function
const captureFile = (fileData: File) => {
  if (fileData) {
    webCamImage.value = fileData;
  }
};

// Save function
const save = async () => {
  try {
    const data: Record<string, string> = {};
    const formData = new FormData();
    
    if (formPersonalData.value) {
      const elements = [...formPersonalData.value.elements];
      
      elements.forEach((element: any) => {
        const { name, type, value, files } = element;
        
        if (!["submit", "file", "date"].includes(type)) {
          if (name && name !== "") {
            data[name] = value;
          }
        } else if (type === "date") {
          if (value && value.length > 0) {
            data[name] = value;
          }
        } else if (type === "file") {
          const fileList = [...files];
          fileList.forEach((file: File) => {
            formData.append(`files.${name}`, file, file.name);
          });
        }
      });
    }

    // Handle webcam image
    if (webCamImage.value !== null) {
      formData.delete("files.foto");
      formData.append("files.foto", webCamImage.value, webCamImage.value.name);
    }

    console.log('Data to save:', data);
    formData.append("data", JSON.stringify(data));
    
    const infoUpdated = await $fetch(
      `${baseURL}/datos-personales/${dataUser.value?.datos_personales?.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${authStore.token}`,
        },
        body: formData,
      }
    );
    
    console.log('Updated info:', infoUpdated);
    
    if (dataUser.value) {
      dataUser.value.datos_personales = infoUpdated;
    }
    
    toast.success("Datos actualizados correctamente");
  } catch (error) {
    console.error('Error updating data:', error);
    toast.error("Error al actualizar los datos");
  }
};
</script>

<style scoped>
/* Custom styles for better visual consistency */
.form-section {
  @apply bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden;
}

.section-header {
  @apply px-6 py-4 border-b border-gray-200 bg-gray-50;
}

.section-title {
  @apply text-lg font-semibold text-gray-900 flex items-center;
}

.section-description {
  @apply text-sm text-gray-600 mt-1;
}

.section-content {
  @apply p-6;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
  
  .md\:col-span-2 {
    grid-column: span 1;
  }
}

/* Focus and hover states */
.button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Loading state for save button */
.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>