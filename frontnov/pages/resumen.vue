<template>
  <main>
    <header>
      <div class="header__text">
        <div class="socio__profile">
    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
        <path fill="#232c4d" d="m19.675 20.375l.7-.7L18.5 17.8V15h-1v3.2zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v6.7q-.475-.225-.975-.387T19 11.075V5H5v14h6.05q.075.55.238 1.05t.387.95zm0-3v1V5v6.075V11zm2-1h4.075q.075-.525.238-1.025t.362-.975H7zm0-4h6.1q.8-.75 1.788-1.25T17 11.075V11H7zm0-4h10V7H7zm11 14q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23"/>
    </svg>
    <h1>Resumen</h1>
</div>
        <div class="header__actions">
          <button class="button button--secondary" @click.prevent="printPage()">
            <img src="~/assets/images/imprimir-green.png" alt="" srcset="" />
            Imprimir
          </button>

         
        </div>
      </div>
    </header>
    <div class="home__content">
      <div class="backdrop" v-if="showBackDrop && isBackdrop">
        <div class="message-box">
          <!-- <h1>Dummy Message</h1> -->
          <p>Favor llenar los campos pendientes</p>
          <div class="outer" @click="closeBackdrop">
            <div class="inner">
              <label>Back</label>
            </div>
          </div>
        </div>
      </div>

      <div class="socio__info">
        <div class="socio__profile">
          <img v-if="user?.datos_personales?.foto != null" :src="getProfilePicture(user?.datos_personales?.foto.url)"
            :alt="user?.datos_personales?.nombres" class="header__photo" />
          <img v-else src="~/assets/images/profile.png" alt="default-profile-picture" />

          <div>
            <h2 class="socio__name" v-if="user?.datos_personales?.nombres &&
              user.datos_personales.apellidos
              ">
              {{
                `${user?.datos_personales?.nombres} ${user?.datos_personales?.apellidos}`
              }}
            </h2>
            <h2 v-else>
              {{ user?.datos_personales?.nombres ?? "" }}
            </h2>
            <ul>

              <li>
                <b>Correo:</b><span>{{ user?.datos_personales?.correo }}</span>
              </li>
             

              <li v-if="!(isAdmin || isEstablecimiento || authStore.user?.role?.name === 'establecimiento')">
                <b>Fecha Inicio:</b><span>{{ user?.configuracion_pago[0]?.fecha_compra }}</span>

              </li>
              <li v-if="!(isAdmin || isEstablecimiento || authStore.user?.role?.name === 'establecimiento')">
                <b>Fecha Fin:</b><span>{{ user?.configuracion_pago[0]?.fecha_fin }}</span>

              </li>
              <li v-if="!(isAdmin || isEstablecimiento || authStore.user?.role?.name === 'establecimiento')">
                <b>Estado:</b><span>{{ user?.estado }}</span>

              </li>


              <li v-if="!(isAdmin || isEstablecimiento || authStore.user?.role?.name === 'establecimiento')">
                <b>Planes Contratados:</b>&nbsp; 
                <span class="mr-4"><span class="font-bold">Plan Silver:</span> {{ totalPlanSilver }}</span>
                <span class="mr-4"><span class="font-bold">Plan Gold:</span> {{ totalPlanGold }}</span>
                <span class="mr-4"><span class="font-bold">Plan Black:</span> {{ totalPlanBlack }}</span>
                <p class="llamar">Para asistencia vial llama al:</p>
                
                <li class="phonecoris"><span class="text[#C028B9]"><i class="fas fa-phone"></i></span>  02-3-422-504 </li>
              </li>

            </ul>
          </div>
        </div>
    
  
        
      <div v-if="isAdmin" >



        <div class=" ">

  <div class="p-1 xl:ml-75">

    <div class="mt-12">
      <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-12 w-12 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
              <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
              <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clip-rule="evenodd"></path>
              <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
            </svg>
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Plan</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">Wa Medium</h4>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-green-500">+55%</strong>&nbsp;Plan Premiun
            </p>
          </div>
        </div>
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-12 w-12 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" viewBox="0 0 16 16"><path fill="#ffffff" d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z"/></svg>
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Cancelados</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{{ totalPlanesContratados }}</h4>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-green-500">+0%</strong>&nbsp;cancelados
            </p>
          </div>
        </div>
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-12 w-12 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" viewBox="0 0 16 16"><path fill="#ffffff" d="M13.95 4.24C11.86 1 7.58.04 4.27 2.05C1.04 4.06 0 8.44 2.09 11.67l.17.26l-.7 2.62l2.62-.7l.26.17c1.13.61 2.36.96 3.58.96c1.31 0 2.62-.35 3.75-1.05c3.23-2.1 4.19-6.39 2.18-9.71Zm-1.83 6.74c-.35.52-.79.87-1.4.96c-.35 0-.79.17-2.53-.52c-1.48-.7-2.71-1.84-3.58-3.15c-.52-.61-.79-1.4-.87-2.19c0-.7.26-1.31.7-1.75c.17-.17.35-.26.52-.26h.44c.17 0 .35 0 .44.35c.17.44.61 1.49.61 1.58c.09.09.05.76-.35 1.14c-.22.25-.26.26-.17.44c.35.52.79 1.05 1.22 1.49c.52.44 1.05.79 1.66 1.05c.17.09.35.09.44-.09c.09-.17.52-.61.7-.79c.17-.17.26-.17.44-.09l1.4.7c.17.09.35.17.44.26c.09.26.09.61-.09.87Z"/></svg>
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Confirmados</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">  {{ totalEstablecimientos }}  </h4>
           
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-red-500">-2%</strong>&nbsp;mes anterior
            </p>
          </div>
        </div>
        <div class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-12 w-12 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-6 h-6 text-white">
              <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
            </svg>
          </div>
          <div class="p-4 text-right">
            <p class="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Disponibles</p>
            <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900"> {{ totalSocios }}</h4>
          </div>
          <div class="border-t border-blue-gray-50 p-4">
            <p class="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong class="text-green-500">+5%</strong>&nbsp;mes anterior
            </p>
          </div>
        </div>
      </div>
      
     
    </div>
    <div class="text-blue-gray-600">

    </div>
  </div>
</div>



  
            </div>


        <div v-else>

        </div>
      </div>




      <div class="cards__container">
        <div class="card bg-[#FBF8FF]">
          <h3 >Datos personales</h3>
          <ul class="card__list">

            
            <li>
              <b>País:</b>&nbsp;
              <span>{{ user?.datos_personales?.pais }}</span>
            </li>
            <li>
              <b>Ciudad:</b>&nbsp;
              <span>{{ user?.datos_personales?.ciudad }}</span>
            </li>
            <li>
              <b>Dirección:</b>&nbsp;
              <span>{{ user?.datos_personales?.direccion }}</span>
            </li>
            <li>
              <b>Celular:</b>&nbsp;
              <span>{{ user?.datos_personales?.celular }}</span>
            </li>
            <li>
              <b>Teléfono Fijo:</b>&nbsp;
              <span>{{ user?.datos_personales?.telefono_convencional}}</span>
            </li>
            <li v-if="!(isAdmin || isEstablecimiento || authStore.user?.role?.name === 'establecimiento')
        " >
              <b>Fecha de nacimiento: </b>&nbsp;
              <span>{{  user?.configuracion_pago[0]?.fecha_nacimiento }}</span>
            </li>
          </ul>
        </div>

        <!--<div class="card">
          <h3>Aprobaciones</h3>
          <ul class="card__list">
            <li><b>Aprobación del pago:</b>{{ "" }}</li>
            <li><b>Observaciones del pago:</b>{{ "" }}</li>
            <li><b>Fecha de contratación:</b>{{ "" }}</li>
            <li><b>Grupo anticipo:</b>{{ "" }}</li>
            <li><b>Cancelaciones:</b>{{ "" }}</li>
            <li><b>Pago anticipado:</b>{{ "" }}</li>
          </ul>
        </div> -->

        <div v-if="!(!isAdmin || !isEstablecimiento)" class="card">
          <div class="card">
            <h3>Datos del Vehiculo</h3>
            <ul class="card__list">
              <li>
                <b>Fecha Inicio</b>&nbsp;
                <span>{{ user?.configuracion_pago[0]?.fecha_compra }}</span>
              </li>
              <li>
                <b>Fecha Fin</b>&nbsp;
                <span>{{ user?.datos_personales?.fecha_fin }}</span>
              </li>
              <li>
                <b>Tipo Persona </b>&nbsp;
                <span>{{ user?.datos_personales?.tipo_persona }}</span>
              </li>
              <li>
                <b>Tipo Tarjeta</b>&nbsp;
                <span>{{ user?.datos_personales?.tipo_tarjeta }}</span>
              </li>
              <li>

                <!--
                <b>Plan</b>&nbsp;
                <span>{{ user?.datos_personales?.plan }}</span>
              </li>

              -->
                <b>Plan</b>&nbsp;
                <span>{{ user?.configuracion_pago[0]?.producto }}</span>
              </li>

              <li>
                <b>Poliza</b>&nbsp;
                <span>{{ user?.configuracion_pago[0]?.poliza }}</span>
              </li>
              <li>
                <b>Certificado</b>&nbsp;
                <span>{{ user?.configuracion_pago[0]?.certificado }}</span>
              </li>
              <li>
                <b>Marca</b>&nbsp;
                <span>{{ user?.configuracion_pago[0]?.marca }}</span>
              </li>
              <li>
                <b>Modelo</b>&nbsp;
                <span>{{ user?.configuracion_pago[0]?.modelo }}</span>
              </li>
              <li>
                <b>Año</b>&nbsp;
                <span>{{ user?.configuracion_pago[0]?.anio }}</span>
              </li>
              <li>
                <b>Color</b>&nbsp;
                <span>{{ user?.configuracion_pago[0]?.color }}</span>
              </li>
              <li>
                <b>Placa</b>&nbsp;
                <span>{{ user?.configuracion_pago[0]?.placa }}</span>
              </li>
              <li>
                <b>Motor</b>&nbsp;
                <span>{{ user?.configuracion_pago[0]?.motor }}</span>
              </li>
              <li>
                <b>Chasis</b>&nbsp;
                <span>{{ user?.configuracion_pago[0]?.chasis }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
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


const { isAdmin, isEstablecimiento } = useAdmin()
const {
  public: { baseURL },
} = useRuntimeConfig();

const getBase64Image = async (imageUrl) => {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

onMounted( async () => {
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
});

const qrcode = ref(null);
const pdfInfo = ref("");

const generatePDF = async () => {
  try {


    const pdf = new jsPDF();
    const { width, height } = pdf.internal.pageSize;

    // Load the image from the URL
    const imgData = await fetch(qrcode.value).then((res) => res.blob());
    const imgSrc = URL.createObjectURL(imgData);

    // load logo from assets
    const logoData = await fetch(logo).then((res) => res.blob());
    const logoSrc = URL.createObjectURL(logoData);

    // Add logo image png on top
    pdf.addImage(logoSrc, 'PNG', 10, 10, 80, 20);

    // add a line under the logo of color #BF00FF width of screen minus 40px starting from 20 and height of 5px
    pdf.setDrawColor(191, 0, 255);
    pdf.setLineWidth(2);
    pdf.line(10, 32, width - 10, 32);


    // Add image to PDF
    pdf.addImage(imgSrc, 'JPEG', 10, 40, 60, 60);

    // Define el estilo de fuente negrita
    pdf.setFont('poppins', 'bold');


    // Add text to PDF
    pdf.text(pdfInfo.value, 10, 110, { align: 'left' });

    pdf.setFont('Poppins-Regular', 'Poppins', 'normal');



    // Save or display the PDF
    pdf.save('document.pdf');
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw error;
  }
};

const generateQRCode = async () => {

  // Agregar el logo al PDF


  let information = "\n\n";

  // let base64Image = "";


  // const imageUrl = "@assets/images/profile.png";

  // if (user.value?.datos_personales?.foto?.url) {
  //   base64Image = await getBase64Image(
  //     `${baseURL}${user.value?.datos_personales?.foto?.url}`
  //   );
  // } else {
  //   base64Image = await getBase64Image(imageUrl);
  // }
  // if (user.value?.datos_personales?.foto?.url)
  //   information += `${base64Image}\n`;
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
    if (user.value?.configuracion_pago[0]?.placa)
    information += `Placa: ${user.value?.configuracion_pago[0]?.placa}\n\n`;
    if (user.value?.datos_personales?.correo)
    information += `Correo: ${user.value?.datos_personales?.correo}\n\n`;
  information += `Contacto Asistencia Víal: 02-3-422-504 \n\n`;



  // Generate the QR code
  const qrCodeDataUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    information
  )}&size=150x150`;
  // const qrCodeDataUrl = await QRCode.toDataURL(information);
  pdfInfo.value = information
  // generatePDF(information, qrCodeDataUrl);

  qrcode.value = qrCodeDataUrl;

};

const authStore = useAuthStore();
const token = authStore.getToken;
const userData = computed(() => {
  console.log('authStore.user', authStore.user)
  return authStore.user;
});

const getProfilePicture = (url: string) => {
  return `${baseURL}${url}`;
};

// Code By Saeed
const isPrint = ref<boolean>(false);


const isBackdrop = ref(true);

// Function to update the property
const closeBackdrop = () => {
  isBackdrop.value = false;
};

const showBackDrop = computed(() => {
  const userObject = user?.value?.configuracion_pago;
  if (userObject) {
    generateQRCode();
    if (
      !userObject?.fecha_inicio ||
      !userObject?.fecha_fin ||
      !userObject?.tipo_persona ||
      !userObject?.tipo_tarjeta ||
      !userObject?.plan ||
      !userObject?.poliza ||
      !userObject?.certificado ||
      !userObject?.marca ||
      !userObject?.modelo ||
      !userObject?.anio ||
      !userObject?.color ||
      !userObject?.placa ||
      !userObject?.motor ||
      !userObject?.chasis
    ) {
      return true;
    }
  } else {
    return false;
  }
});



const { data: user } = useFetch<User>(`${baseURL}/users/${userData.value?.id}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});


const { data: configData } = useFetch<any[]>(`${baseURL}/config-pagos`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
//const taxes:any = userTaxes.value?.find((t:any)=> t.user === authStore.user?.id);
// if(configData) console.log(configData);

const configToGet: any = configData.value?.find((d: any) => d.user && authStore.user && d.user.id === authStore.user.id);

if (configToGet) {
  console.log(configToGet);

  const { data: taxes } = useFetch(`${baseURL}/config-pagos/${configToGet.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}


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
console.log(userData, totalPlanBlack, totalPlanGold, totalPlanSilver);









// Code By Saeed
const updateDatosPersonales = () => { };
// Code By Saeed

const payment = computed(() => total.value);


const printPage = () => {
  if (typeof window === 'undefined') return;
  window.print()
}

const toast = useToast();



</script>
<style scoped>
main {
  padding: 0 1rem 1rem 1rem;
}

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

.socio__name {
  font-size: var(--heading-3);
}

.socio__profile>img {
  width: 72px;
}

.socio__info {
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.socio__saldos,
.socio__profile {
  display: flex;
  gap: 1rem;
}

.socio__saldos {
  flex-wrap: wrap;
  border-radius: 9px;
  background: linear-gradient(180deg, #fbf8ff 85.42%, #0200ab 89.58%);

  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.05);
}

.socio__profile {
  align-items: start;
}

.socio--activo {
  color: #22c55e;
  font-weight: 600;
}

.socio__saldo {
  position: relative;
  padding: 1rem;
  border: 1px solid var(--gray-200);
  flex: 1;
  white-space: nowrap;
}

.socio__saldo::before {
  content: "";
  top: 0;
  position: absolute;
  left: 0;
  width: 100%;
  display: block;
  height: 1rem;
}

.socio__saldo:nth-child(1):before {
  background-color: #2f1071;
}

.socio__saldo:nth-child(2):before {
  background-color: #2f1071;
}

.socio__saldo:nth-child(3):before {
  background-color: #2f1071;
}

.socio__saldo--positivo {
  color: #6430d0;
}

.socio__saldo--negativo {
  color: #6430d0;
}

.socio__saldo--base {
  color: var(--blue);
}

.socio__saldo>span {
  font-size: var(--heading-3);
  font-weight: 800;
}

.cards__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 520px), 1fr));
  gap: 1rem;
}

.card {
  border: 1px solid var(--gray-200);
}

.card>h3 {
  background-color: var(--gray-200);
  padding: 1rem;
}

.card__list {
  padding: 1rem;
  font-size: 1rem;
}

@media (max-width: 1060px) {
  .button>img {
    width: 1.5rem;
  }
}

@media (max-width: 1060px) {
  .header__title>img {
    width: 40px;
    height: auto;
  }
}

.header__photo {
  width: 3rem;
  height: auto;
  border-radius: 50%;
}

/* Code By Saeed Below this line */

.socio__print_info {
  width: 50%;
}

.socio_print_info_item {
  display: flex;
  justify-content: space-between;
}

.socio_print_info_item h4 {
  width: 65%;
  display: flex;
  justify-content: flex-end;
}

.socio_print_info_item p {
  width: 35%;
  display: flex;
  justify-content: flex-end;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  /* Ensure it appears above other content */
}

/* Styling for the message box */
.message-box {
  background-color: #fff;
  padding: 60px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.outer {
  position: relative;
  margin: auto;
  width: 70px;
  margin-top: 20px;
  cursor: pointer;
}

.inner {
  width: 50px;
  text-align: center;
}

label {
  font-size: 0.8em;
  line-height: 4em;
  text-transform: uppercase;
  /* color: #fff; */
  transition: all 0.3s ease-in;
  opacity: 0;
  cursor: pointer;
}

.inner:before,
.inner:after {
  position: absolute;
  content: "";
  height: 1px;
  width: inherit;
  background: #ffc107;
  left: 0;
  transition: all 0.3s ease-in;
}

.inner:before {
  top: 50%;
  transform: rotate(45deg);
}

.inner:after {
  bottom: 50%;
  transform: rotate(-45deg);
}

.outer:hover label {
  opacity: 1;
}

.outer:hover .inner:before,
.outer:hover .inner:after {
  transform: rotate(0);
}

.outer:hover .inner:before {
  top: 0;
}

.outer:hover .inner:after {
  bottom: 0;
}

.phonecoris {
  position: relative;
  margin: auto;
  color: #C028B9;
  font-size: 1.5em;
  margin-top: -45px;
 margin-left: 165px;
  text-align: left;
  font-weight: bold; 
}

.llamar {
  position: relative;
  margin: auto;
  text-align: center; 
  font-size: 16px; 
  color: #161616;
  margin-left: 30px;
  margin-top: 5px;
  font-weight: bold; 
}

.llamar2 {
  position: relative;
  margin: auto;

  color: #161616;

  font-weight: bold; 
}

a:hover {
  cursor: pointer; /* Cambiar el cursor al pasar sobre el enlace */
}
</style>
