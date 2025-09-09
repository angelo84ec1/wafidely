<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <!-- Header mejorado -->
    <header class="bg-white shadow-sm border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-3">
            <div class="p-2 bg-indigo-100 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-indigo-600">
                <path fill="currentColor" d="m19.675 20.375l.7-.7L18.5 17.8V15h-1v3.2zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v6.7q-.475-.225-.975-.387T19 11.075V5H5v14h6.05q.075.55.238 1.05t.387.95zm0-3v1V5v6.075V11zm2-1h4.075q.075-.525.238-1.025t.362-.975H7zm0-4h6.1q.8-.75 1.788-1.25T17 11.075V11H7zm0-4h10V7H7zm11 14q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23"/>
              </svg>
            </div>
            <h1 class="text-2xl font-bold text-slate-900">Resumen</h1>
          </div>
          
          <div class="flex items-center space-x-4">
            <button 
              @click="printPage"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
              </svg>
              Imprimir
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Modal de backdrop mejorado -->
    <div v-if="showBackDrop && isBackdrop" class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="closeBackdrop"></div>
      <div class="relative bg-white rounded-xl shadow-xl p-8 m-4 max-w-md w-full transform transition-all">
        <div class="flex items-center justify-center w-12 h-12 mx-auto bg-yellow-100 rounded-full mb-4">
          <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 text-center mb-2">Campos Pendientes</h3>
        <p class="text-sm text-gray-500 text-center mb-6">Favor llenar todos los campos obligatorios para continuar</p>
        <button 
          @click="closeBackdrop"
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Entendido
        </button>
      </div>
    </div>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Perfil del usuario mejorado -->
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 mb-8 overflow-hidden">
        <div class="p-6">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            <!-- Info del usuario -->
            <div class="flex items-start space-x-4">
              <div class="relative">
                <img 
                  v-if="user?.datos_personales?.foto != null" 
                  :src="getProfilePicture(user?.datos_personales?.foto.url)"
                  :alt="user?.datos_personales?.nombres" 
                  class="w-20 h-20 rounded-xl object-cover border-2 border-slate-200"
                />
                <img 
                  v-else 
                  src="~/assets/images/profile.png" 
                  alt="default-profile-picture"
                  class="w-20 h-20 rounded-xl object-cover border-2 border-slate-200"
                />
                <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              
              <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold text-slate-900 truncate">
                  {{ user?.datos_personales?.nombres && user.datos_personales.apellidos 
                      ? `${user?.datos_personales?.nombres} ${user?.datos_personales?.apellidos}`
                      : user?.datos_personales?.nombres ?? "Usuario" }}
                </h2>
                
                <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div class="flex items-center text-slate-600">
                    <svg class="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    {{ user?.datos_personales?.correo }}
                  </div>
                  
                  <div v-if="!(isAdmin || isEstablecimiento)" class="flex items-center text-slate-600">
                    <svg class="w-4 h-4 mr-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {{ user?.estado }}
                  </div>
                </div>
              </div>
            </div>

      <!-- Agendamiento Soporte -->
      <div v-if="!(isAdmin || isEstablecimiento)" class=" bg-[#fbf8ff]  rounded-xl p-6 text-white">
              <div class="text-center">
                <p class="text-sm opacity-90 mb-2">Agendamiento Soporte</p>
                <a 
                  href="https://wa.me/593983314957" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex items-center justify-center space-x-2 hover:bg-white hover:bg-opacity-10 rounded-lg p-2 transition-all duration-200"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087"/>
                  </svg>
                  <span class="text-xl font-bold">+593983314957</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Planes contratados -->
          <div v-if="!(isAdmin || isEstablecimiento)" class="mt-6 pt-6 border-t border-slate-200">
            <h3 class="text-sm font-medium text-slate-900 mb-3">Planes Contratados</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="bg-slate-50 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-slate-900">{{ totalPlanSilver }}</div>
                <div class="text-sm text-slate-600">WAPyme</div>
              </div>
              <div class="bg-yellow-50 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-yellow-600">{{ totalPlanGold }}</div>
                <div class="text-sm text-slate-600">WAMedium</div>
              </div>
              <div class="bg-slate-900 rounded-lg p-4 text-center text-white">
                <div class="text-2xl font-bold">{{ totalPlanBlack }}</div>
                <div class="text-sm text-slate-300">WALarge</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Dashboard de administrador -->
      <div v-if="isAdmin" class="mb-8">
        <h2 class="text-xl font-semibold text-slate-900 mb-6">Dashboard Administrativo</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Tarjeta 1 -->
          <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div class="p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                      <path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-4 flex-1">
                  <p class="text-sm font-medium text-slate-600">Plan Premium</p>
                  <p class="text-2xl font-semibold text-slate-900">Wa Medium</p>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-slate-200">
                <p class="text-sm text-slate-600">
                  <span class="text-green-600 font-medium">+55%</span> Plan Premium
                </p>
              </div>
            </div>
          </div>

          <!-- Tarjeta 2 -->
          <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div class="p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-4 flex-1">
                  <p class="text-sm font-medium text-slate-600">Cancelados</p>
                  <p class="text-2xl font-semibold text-slate-900">{{ totalPlanesContratados }}</p>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-slate-200">
                <p class="text-sm text-slate-600">
                  <span class="text-green-600 font-medium">+0%</span> cancelados
                </p>
              </div>
            </div>
          </div>

          <!-- Tarjeta 3 -->
          <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div class="p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-4 flex-1">
                  <p class="text-sm font-medium text-slate-600">Confirmados</p>
                  <p class="text-2xl font-semibold text-slate-900">{{ totalEstablecimientos }}</p>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-slate-200">
                <p class="text-sm text-slate-600">
                  <span class="text-red-600 font-medium">-2%</span> mes anterior
                </p>
              </div>
            </div>
          </div>

          <!-- Tarjeta 4 -->
          <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div class="p-6">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-4 flex-1">
                  <p class="text-sm font-medium text-slate-600">Disponibles</p>
                  <p class="text-2xl font-semibold text-slate-900">{{ totalSocios }}</p>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-slate-200">
                <p class="text-sm text-slate-600">
                  <span class="text-green-600 font-medium">+5%</span> mes anterior
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tarjetas de información -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Datos personales -->
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div class="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
            <h3 class="text-lg font-semibold text-white flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              Datos Personales
            </h3>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div class="flex justify-between py-2 border-b border-slate-100">
                <span class="text-sm font-medium text-slate-600">País:</span>
                <span class="text-sm text-slate-900">{{ user?.datos_personales?.pais || 'No especificado' }}</span>
              </div>
              <div class="flex justify-between py-2 border-b border-slate-100">
                <span class="text-sm font-medium text-slate-600">Ciudad:</span>
                <span class="text-sm text-slate-900">{{ user?.datos_personales?.ciudad || 'No especificado' }}</span>
              </div>
              <div class="flex justify-between py-2 border-b border-slate-100">
                <span class="text-sm font-medium text-slate-600">Dirección:</span>
                <span class="text-sm text-slate-900">{{ user?.datos_personales?.direccion || 'No especificado' }}</span>
              </div>
              <div class="flex justify-between py-2 border-b border-slate-100">
                <span class="text-sm font-medium text-slate-600">Celular:</span>
                <span class="text-sm text-slate-900">{{ user?.datos_personales?.celular || 'No especificado' }}</span>
              </div>
              <div class="flex justify-between py-2 border-b border-slate-100">
                <span class="text-sm font-medium text-slate-600">Teléfono:</span>
                <span class="text-sm text-slate-900">{{ user?.datos_personales?.telefono_convencional || 'No especificado' }}</span>
              </div>
              <div v-if="!(isAdmin || isEstablecimiento)" class="flex justify-between py-2">
                <span class="text-sm font-medium text-slate-600">Fecha de nacimiento:</span>
                <span class="text-sm text-slate-900">{{ user?.configuracion_pago[0]?.fecha_nacimiento || 'No especificado' }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Datos del vehículo -->
        <div v-if="!(isAdmin || isEstablecimiento)" class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div class="bg-gradient-to-r from-green-500 to-teal-600 px-6 py-4">
            <h3 class="text-lg font-semibold text-white flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
             Información Plan
            </h3>
          </div>
          <div class="p-6">
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="text-xs font-medium text-slate-500 uppercase tracking-wide">Fecha Inicio</label>
                  <p class="text-sm text-slate-900 mt-1">{{ user?.configuracion_pago[0]?.fecha_compra || 'No especificado' }}</p>
                </div>
                <div>
                  <label class="text-xs font-medium text-slate-500 uppercase tracking-wide">Fecha Fin</label>
                  <p class="text-sm text-slate-900 mt-1">{{ user?.configuracion_pago[0]?.fecha_fin || 'No especificado' }}</p>
                </div>
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="text-xs font-medium text-slate-500 uppercase tracking-wide">Plan</label>
                  <p class="text-sm text-slate-900 mt-1">{{ user?.configuracion_pago[0]?.producto || 'No especificado' }}</p>
                </div>
               
              </div>

     
            </div>
          </div>
        </div>
      </div>

      <!-- Loading state -->
      <div v-if="pending" class="flex items-center justify-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import QRCode from "qrcode";
import { jsPDF } from 'jspdf';
import { onMounted } from "vue";
import { POSITION, useToast } from "vue-toastification";
import type { ConfiguracionPago, EstableCimientos, User } from "~/common/interfaces/user.interface";
import useAdmin from '~/composables/useAdmin';
import { useAuthStore } from "~~/store/auth";
import logo from "~/assets/logos/logocorisamc.png";

definePageMeta({
  name: "ResumenPage",
  layout: "private",
});

const { isAdmin, isEstablecimiento } = useAdmin();
const {
  public: { baseURL },
} = useRuntimeConfig();

const authStore = useAuthStore();
const token = authStore.getToken;
const userData = computed(() => {
  return authStore.user;
});

// Estados reactivos
const qrcode = ref(null);
const pdfInfo = ref("");
const isBackdrop = ref(true);
const pending = ref(false);

// Funciones utilitarias
const getProfilePicture = (url: string) => {
  return `${baseURL}${url}`;
};

const closeBackdrop = () => {
  isBackdrop.value = false;
};

const printPage = () => {
  if (typeof window === 'undefined') return;
  window.print();
};

// Función para generar PDF mejorada
const generatePDF = async () => {
  try {
    const pdf = new jsPDF();
    const { width, height } = pdf.internal.pageSize;

    // Cargar imagen QR
    const imgData = await fetch(qrcode.value).then((res) => res.blob());
    const imgSrc = URL.createObjectURL(imgData);

    // Cargar logo
    const logoData = await fetch(logo).then((res) => res.blob());
    const logoSrc = URL.createObjectURL(logoData);

    // Añadir logo
    pdf.addImage(logoSrc, 'PNG', 10, 10, 80, 20);

    // Línea decorativa
    pdf.setDrawColor(191, 0, 255);
    pdf.setLineWidth(2);
    pdf.line(10, 32, width - 10, 32);

    // Añadir QR
    pdf.addImage(imgSrc, 'JPEG', 10, 40, 60, 60);

    // Añadir texto
    pdf.setFont('poppins', 'bold');
    pdf.text(pdfInfo.value, 10, 110, { align: 'left' });

    pdf.save('resumen-usuario.pdf');
  } catch (error) {
    console.error("Error generando PDF:", error);
    throw error;
  }
};

// Función para generar QR Code
const generateQRCode = async () => {
  let information = "\n\n";
  
  information += `Nombre: ${user.value?.datos_personales?.nombres} ${user.value?.datos_personales?.apellidos}\n\n`;
  
  if (user.value?.estado) information += `Estado: ${user.value?.estado}\n\n`;
  if (user.value?.datos_personales?.cedula)
    information += `Identificación: ${user.value?.datos_personales?.cedula}\n\n`;
  if (user.value?.configuracion_pago[0]?.producto)
    information += `Plan Silver:${totalPlanSilver.value} Plan Gold:${totalPlanGold.value} Plan Black:${totalPlanBlack.value}\n\n`;
  if (user.value?.configuracion_pago[0]?.fecha_compra)
    information += `Fecha Inicio: ${user.value?.configuracion_pago[0]?.fecha_compra}\n\n`;
  if (user.value?.configuracion_pago[0]?.fecha_fin)
    information += `Fecha Fin: ${user.value?.configuracion_pago[0]?.fecha_fin}\n\n`;

  if (user.value?.datos_personales?.correo)
    information += `Correo: ${user.value?.datos_personales?.correo}\n\n`;
  information += `ttt \n\n`;

  const qrCodeDataUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    information
  )}&size=150x150`;
  
  pdfInfo.value = information;
  qrcode.value = qrCodeDataUrl;
};

// Computed para mostrar backdrop
const showBackDrop = computed(() => {
  const userObject = user?.value?.configuracion_pago;

  return false;
});

// Fetch de datos del usuario
const { data: user } = useFetch<User>(`${baseURL}/users/${userData.value?.id}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// Fetch de configuración de pagos
const { data: configData } = useFetch<any[]>(`${baseURL}/config-pagos`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// Fetch de totales para admin
const { data: totalSocios } = useFetch(`${baseURL}/users/count?role.name=socio`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authStore.getToken}`,
  },
});

const { data: totalEstablecimientos } = useFetch(`${baseURL}/establecimientos/count`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authStore.getToken}`,
  },
});

const { data: totalPlanesContratados } = useFetch(`${baseURL}/config-pagos/count`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authStore.getToken}`,
  },
});

const { data: totalPlanBlack } = useFetch(`${baseURL}/config-pagos/count?user.id=${userData.value?.id}&producto=Plan Black`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authStore.getToken}`,
  },
});

const { data: totalPlanGold } = useFetch(`${baseURL}/config-pagos/count?user.id=${userData.value?.id}&producto=Plan Gold`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authStore.getToken}`,
  },
});

const { data: totalPlanSilver } = useFetch(`${baseURL}/config-pagos/count?user.id=${userData.value?.id}&producto=Plan Silver`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authStore.getToken}`,
  },
});

// Lifecycle
onMounted(async () => {
  try {
    pending.value = true;
    const { data: dataDatos } = await useFetch<EstableCimientos[]>(
      `${baseURL}/establecimientos?correo=${authStore.user?.email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authStore.token,
        },
      }
    );
    authStore.user.establecimientos = dataDatos.value;
  } catch (error) {
    console.error('Error cargando establecimientos:', error);
  } finally {
    pending.value = false;
  }
});

const toast = useToast();
</script>

<style scoped>
/* Estilos para impresión */
@media print {
  .no-print {
    display: none !important;
  }
  
  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}

/* Animaciones personalizadas */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-out;
}

/* Transiciones suaves */
.transition-all {
  transition: all 0.2s ease-in-out;
}

/* Hover effects */
.hover-scale:hover {
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>