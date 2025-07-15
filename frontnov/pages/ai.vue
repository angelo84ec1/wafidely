

<script >

import { useRouter } from 'vue-router';
import { reactive } from 'vue';
import { initFlowbite, 

initAccordions, 
  initCarousels, 
  initCollapses, 
  initDials, 
  initDismisses, 
  initDrawers, 
  initDropdowns, 
  initModals, 
  initPopovers, 
  initTabs, 
  initTooltips} from 'flowbite'



export default {
  components: {


  },
};

onMounted(() => {
    initFlowbite();
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})
</script>

<template >   

    <ui-header class="mb-0 bg-secondary bg-indigo-600 bg-gray-800 p-0 text-white "></ui-header>
    <div class="spacer"></div>
    <section class="bg-[#232c4d] mt-0">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <p class="font-manrope  max-w-2xl mb-2 font-light text-[#ffffff] lg:mb-4 md:text-base lg:text-base dark:text-gray-400">Sistema automático de respuestas en whatsapp</p>

            <h1 class="titulo max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white animated-heading">Fideliza tus clientes en Whatsapp</h1>
            <p class="max-w-2xl mb-6 font-light text-[#ffffff] lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">¡No pierdas más respuestas o confirmaciones olvidadas de tus clientes, tenemos la solución con nuestro sistema confirmación de manera automática en Whatsapp. El 99% de los usuarios de WhatsApp responden a los mensajes sin salir de la app. Ideal para doctores, veterinarios, envío de feliz cumpleaños, confirmación a compromisos, bot de calificación, mantenimiento de vehículos, renovación de seguros, recordatorio de renovación mensualidades de gimnasios, creación de menus digitales para restaurantes y envío de pedidos a whatsapp</p>
        
            <a href="#" class="gradient-button inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Empieza GRATIS
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex pb-12">
            <img src="~/assets/images/imgwhatsapp.png" alt="mockup">
        </div>                
    </div>
</section>


<div class="relative items-center h-64 sm:h-120 lg:h-full pb-12">
    <img alt="House" src="~/assets/images/dashboardwafidely.png" class="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover lg:py-16 pb-12" />
</div>


    <section >
        
            <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2 lg:py-20 pt-16">
                <div class="flex relative z-0 lg:py-20 top-16">
                    <div class="flex relative h-5 sm:h-10 lg:h-full justify-end items-center">
                        <img alt="House"
                       
                            src= "~/assets/images/img_dashboard.png"
                            class="relative absolute inset-3  object-cover" />
                    </div>
                </div>

                

                <div class="items-center bg-[#fbf8ff] bg-opacity-55 top-16 lg:py-20 pt-18"  >
                    
                    <span class=" hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-[#edf0f9]  pb-20"  ></span>
                    <div class="absolute  -rigth-7 w-72 h-72 bg-[#9dfa2b] rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000"></div>
                   
                   
                    <div class="custom-link p-8 sm:p-16 lg:p-13" >
                        
                        <h2 class="custom-link text-2xl font-bold sm:text-3xl  pb-0"  >
                            Crea una cuenta GRATIS por 5 dias y accede a nuestra plataforma Sass las 24 horas del día los 365 dias del año.
                        </h2>

                        <p class="custom-link mt-4 text-gray-600  pb-0 text-justify">
                            
                        Usar mensajes automáticos de Whatsapp para recordatorio de citas con el aplicativo Wafidely ofrece múltiples ventajas para mantener la fidelidad de los clientes. WhatsApp tiene una tasa de apertura del 98%, frente al 20% de los correos electrónicos. Según un estudio, 1 de cada 3 clientes revisa sus notificaciones de texto al minuto de recibir un mensaje. Con WhatsApp, su mensaje tiene muchas más posibilidades de ser visto por sus clientes.
                        </p>
                        
                        <div class="z-[1] custom-link flex-none mt-4 ">
                            
                        <nuxt-link
                              to="/features"
                              class="custom-link  mt-2 flex-none inline-block rounded border gradient-button inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                             >
                               Más Información
                        </nuxt-link>
                        
                                   </div>
         
                
                        
                    </div>
                </div>
            </div>
       
    </section>


    

<section class="py-10 pb-8">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-20 ">
            <div class="mb-1">
                <h2 class="font-manrope text-5xl text-center font-bold text-gray-900 mb-10">Ventajas </h2>
                <p class="text-gray-500 text-center leading-6 pb-8 ">+ de 6 funcionalidades y beneficios al registrarte en nuestro aplicativo web</p>
         
            </div>
    
        </div>
    </section>


    <div id="services" class="section relative pt-20 rounded-lg pb-8 md:pt-16 md:pb-0 bg-white" style="background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png') ;">
    <div class="xl:max-w-6xl mx-auto px-4 rounded-lg">
       
        <!-- row -->
        <div class="flex flex-wrap flex-row -mx-4 rounded-lg text-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
            <div class="flex-shrink px-4 max-w-full w-full rounded-lg sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-[#9dfa2b] rounded-lg bg-opacity-15   transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-green-300"></span>
                    <div class="inline-block text-gray-900 mb-4">
                        <span class="p-5 rounded-full bg-[#232c4d] text-white shadow-lg shadow-[#232c4d] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="#ffffff" d="M11 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6zm2-10V3h6q.825 0 1.413.588T21 5v6zm0 10v-8h8v6q0 .825-.587 1.413T19 21z"/></svg>
                    </span>
                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Página de Aterrizaje</h3>
                    <p class="font-manrope  text-gray-500">Crearás en 2 minutos tu página de aterrizaje con una url personalizada</p>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-[#38f5b3] bg-opacity-15 border-b border-gray-100  transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-green-300"></span>
                    <div class="inline-block text-gray-900 mb-4">
                        <span class="p-5 rounded-full bg-[#232c4d] text-white shadow-lg shadow-[#232c4d] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="#ffffff" d="M13 21v-2h2v2zm-2-2v-5h2v5zm8-3v-4h2v4zm-2-4v-2h2v2zM5 14v-2h2v2zm-2-2v-2h2v2zm9-7V3h2v2zM4.5 7.5h3v-3h-3zM3 8V4q0-.425.288-.712T4 3h4q.425 0 .713.288T9 4v4q0 .425-.288.713T8 9H4q-.425 0-.712-.288T3 8m1.5 11.5h3v-3h-3zM3 20v-4q0-.425.288-.712T4 15h4q.425 0 .713.288T9 16v4q0 .425-.288.713T8 21H4q-.425 0-.712-.288T3 20M16.5 7.5h3v-3h-3zM15 8V4q0-.425.288-.712T16 3h4q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9h-4q-.425 0-.712-.288T15 8m2 13v-3h-2v-2h4v3h2v2zm-4-7v-2h4v2zm-4 0v-2H7v-2h6v2h-2v2zm1-5V5h2v2h2v2zM5.25 6.75v-1.5h1.5v1.5zm0 12v-1.5h1.5v1.5zm12-12v-1.5h1.5v1.5z"/></svg>
                    </span>
                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Qr</h3>
                    <p class="font-manrope text-gray-500">El aplicativo te generá un Qr para que tus clientes accedan agendar citas</p>
                </div>
                <!-- end service block -->
            </div>

            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-[#9dfa2b] bg-opacity-15 border-b border-gray-100  transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-green-300"></span>
                    <div class="inline-block text-gray-900 mb-4">
                        <span class="p-5 rounded-full bg-[#232c4d] text-white shadow-lg shadow-[#232c4d] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="#ffffff" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5zM5 8h14V6H5zm0 0V6zm7 6q-.425 0-.712-.288T11 13t.288-.712T12 12t.713.288T13 13t-.288.713T12 14m-4 0q-.425 0-.712-.288T7 13t.288-.712T8 12t.713.288T9 13t-.288.713T8 14m8 0q-.425 0-.712-.288T15 13t.288-.712T16 12t.713.288T17 13t-.288.713T16 14m-4 4q-.425 0-.712-.288T11 17t.288-.712T12 16t.713.288T13 17t-.288.713T12 18m-4 0q-.425 0-.712-.288T7 17t.288-.712T8 16t.713.288T9 17t-.288.713T8 18m8 0q-.425 0-.712-.288T15 17t.288-.712T16 16t.713.288T17 17t-.288.713T16 18"/></svg>
                    </span>
                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Calendario</h3>
                    <p class="text-gray-500">Tus clientes y tu accederas a un calendario interactivo para administrar tu agenda</p>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-[#38f5b3] bg-opacity-15 border-b border-gray-100  transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-green-300"></span>
                    <div class="inline-block text-gray-900 mb-4">
                        <span class="p-5 rounded-full bg-[#232c4d] text-white shadow-lg shadow-[#232c4d] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="#ffffff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"/></svg>
                    </span>
                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Recordatorio Automático</h3>
                    <p class="text-gray-500">La aplicación enviará de manera automática al whatsapp de tu cliente 4 horas antes de la cita el recordario de confirmar o cancelar</p>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-[#9dfa2b] bg-opacity-15 border-b border-gray-100  transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-green-300"></span>
                    <div class="inline-block text-gray-900 mb-4">
                        <span class="p-5 rounded-full bg-[#232c4d] text-white shadow-lg shadow-[#232c4d] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 32 32"><path fill="#ffffff" d="M3 5v18c0 2.21 1.79 4 4 4h18c2.21 0 4-1.79 4-4V12h-6V5zm2 2h16v16c0 .73.22 1.41.563 2H7c-1.19 0-2-.81-2-2zm2 2v5h12V9zm2 2h8v1H9zm14 3h4v9c0 1.19-.81 2-2 2s-2-.81-2-2zM7 15v2h5v-2zm7 0v2h5v-2zm-7 3v2h5v-2zm7 0v2h5v-2zm-7 3v2h5v-2zm7 0v2h5v-2z"/></svg>
                    </span>
                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Reportes</h3>
                    <p class="text-gray-500">En el administrador podras filtrar por día, mes y año, citas, el número de citas confirmadas y canceladas, número de clientes y descargar en pdf</p>
                </div>
                <!-- end service block -->
            </div>
            <div class="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                <!-- service block -->
                <div class="py-8 px-12 mb-12 bg-[#38f5b3] bg-opacity-15 border-b border-gray-100  transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-green-300"></span>
                    <div class="inline-block text-gray-900 mb-4">
                        <span class="p-5 rounded-full bg-[#232c4d] text-white shadow-lg shadow-[#232c4d] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 512 512"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M176 416v64M80 32h192a32 32 0 0 1 32 32v412a4 4 0 0 1-4 4H48h0V64a32 32 0 0 1 32-32m240 160h112a32 32 0 0 1 32 32v256h0h-160h0V208a16 16 0 0 1 16-16"/><path fill="#ffffff" d="M98.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 240a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 320a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79"/><ellipse cx="256" cy="176" fill="#ffffff" rx="15.95" ry="16.03" transform="rotate(-45 255.99 175.996)"/><path fill="#ffffff" d="M258.08 111.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79M400 400a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-64 160a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16"/></svg>
                    </span>
                    </div>
                    <h3 class="text-lg leading-normal mb-2 font-semibold text-black">Tipo de negocio</h3>
                    <p class="text-gray-500">De acuerdo a la categoría seleccionada el sistema identifica tu giro de negocio dentro de los 9 existentes y activa el módulo respectivo en el menú del admin</p>
                </div>
                <!-- end service block -->
            </div>
        </div>
        <!-- end row -->
    </div>
</div>






    <section class="py-5 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-12">
                <h2 class="font-manrope text-5xl text-center font-bold text-gray-900 mb-4">Preguntas Frecuentes </h2>
                <p class="text-gray-500 text-center leading-6 mb-9">No te quedes con la duda.</p>
         
            </div>
                <!--Grid-->
                
            
        </div>
    </section>


    <div class="mx-auto max-w-6xl mt-5 p-8">
    <div class="divide-y divide-[#38f5b3]">
        <details class="group" >
            <summary
                class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                Que tiempo esta vigente la suscripción?
                <div>
                   
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#38f5b3"  viewBox="0 0 24 24" stroke-width="2" 
                    stroke="#38f5b3"  class=" block h-12 w-12 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
            
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#9dfa2b"  viewBox="0 0 24 24" stroke-width="2"
                    stroke="#9dfa2b"  class="hidden h-12 w-12 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div class="pb-4 text-secondary-500">Cada suscripción tiene la válidez mínimo de 5 dias GRATIS, puedes acceder de forma mensual con pagos desde $79, trimestral o anual , podrás acceder al sistema, el paquete de envíos de whatsapp tiene la validez mientras tengas disponibles</div>
        </details>
        <details class="group" >
            <summary
                class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                Qué es Wafidely?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#38f5b3"  viewBox="0 0 24 24" stroke-width="2" 
                    stroke="#38f5b3"  class=" block h-12 w-12 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
            
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#9dfa2b"  viewBox="0 0 24 24" stroke-width="2"
                    stroke="#9dfa2b"  class="hidden h-12 w-12 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div class="pb-4 text-secondary-500">Es una Startup creada y soportada por WAPPIAD S.A.S. para ayudar a las empresas a fidelizar sus clientes con respuestas automáticas desde whatsapp a la cuenta creada por cada empresa, para tener estadisticas de citas o confirmación a eventos  </div>
        </details>
        <details class="group">
            <summary
                class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                El aplicativo utiliza inteligencia artificial ?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#38f5b3"  viewBox="0 0 24 24" stroke-width="2" 
                    stroke="#38f5b3"  class=" block h-12 w-12 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
            
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#9dfa2b"  viewBox="0 0 24 24" stroke-width="2"
                    stroke="#9dfa2b"  class="hidden h-12 w-12 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div class="pb-4 text-secondary-500">Si utilizamos IA para automatizar procesos, nos apoyamos de AWS, N8N con sus distintas herramientas de IA</div>
        </details>
        <details class="group">
            <summary
                class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                Puedo usar mi número de whatsapp de empresa
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#38f5b3"  viewBox="0 0 24 24" stroke-width="2" 
                    stroke="#38f5b3"  class=" block h-12 w-12 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
            
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#9dfa2b"  viewBox="0 0 24 24" stroke-width="2"
                    stroke="#9dfa2b"  class="hidden h-12 w-12 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div class="pb-4 text-secondary-500">Si lo puede utilizar al seleccionar el plan personalizado, para que se active su número el tiempo que va demorar es de 30 a 90 días</div>
        </details>
        <details class="group">
            <summary
                class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                Puedo tener una página de aterrizaje para embudo de ventas?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#38f5b3"  viewBox="0 0 24 24" stroke-width="2" 
                    stroke="#38f5b3"  class=" block h-12 w-12 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
            
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#9dfa2b"  viewBox="0 0 24 24" stroke-width="2"
                    stroke="#9dfa2b"  class="hidden h-12 w-12 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div class="pb-4 text-secondary-500">Al crear su cuenta en nuestra plataforma el sistema le solicita que llene la información de su empresa o evento para generar una url la misma que puede utlizar con fines comerciales o de agendamiento de citas</div>
        </details>
        <details class="group">
            <summary
                class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                Desde que número de whatsapp llega las notificaciones a mis clientes?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#38f5b3"  viewBox="0 0 24 24" stroke-width="2" 
                    stroke="#38f5b3"  class=" block h-12 w-12 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
            
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#9dfa2b"  viewBox="0 0 24 24" stroke-width="2"
                    stroke="#9dfa2b"  class="hidden h-12 w-12 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div class="pb-4 text-secondary-500">Llega desde un número de whatsapp aprobado por Meta para el envío de las notificaciones, este número se lo utiliza para el envío de todas las cuentas, le llega con el logo y nombre de Wafidely o Wimtut</div>
        </details>
        <details class="group">
            <summary
                class="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                Desde que momento puedo empezar a enviar los recordatorios o confirmación de citas o eventos?
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#38f5b3"  viewBox="0 0 24 24" stroke-width="2" 
                    stroke="#38f5b3"  class=" block h-12 w-12 group-open:hidden">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
            
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#9dfa2b"  viewBox="0 0 24 24" stroke-width="2"
                    stroke="#9dfa2b"  class="hidden h-12 w-12 group-open:block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                    </svg>
                </div>
            </summary>
            <div class="pb-4 text-secondary-500">Se puede empezar a enviar desde el registro al aplicativo con su respectivo pago, puede subir un archivo en formato de excel o csv para importar su información en base al plazo contratado, el sistema hace un conteo de registros y solo sube hasta 2000, si es más registros debe solicitar ayuda a soporte </div>
        </details>
    </div>
</div>                        



   
    <ui-footer></ui-footer>
 
</template>



<style lang="scss" scoped>
.subscription-card {
    width: 100%;
    max-width: 400px;
    margin: 2rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

    @media (width <640px) {
        margin: 1rem;
    }
}

.heading {
    margin-left: 1rem;
    margin-top: 4px;
    padding: 0px 8px;
    background-color: rgb(109, 109, 177);
    border-radius: 16px;
    font-size: 0.8rem;
    color: white;
    font-weight: bold;
}

.wrapper {
    @media (width <640px) {
        margin: 0;
        padding: 0;
    }
}


.button {
  background-color: #8b5cf6;
  border-radius: 9px;
  padding: 15px 25px;
  color: #fff;
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

/* Estilo de hover */
.button:hover {
  background-color: #4a4a4a;
}

/* Estilos normales del contenedor */
.container {
  width: 100%;
  padding: 6px 16px;
  border-radius: 8px;
  background-image: linear-gradient(135deg, #8b5cf6, #00ffff);
  color: #000; /* Cambiar el color de texto según tus preferencias */

  /* Estilos adicionales para ajustar el contenido en diferentes tamaños de pantalla */
  /* ... (otros estilos que puedas necesitar) */
}

/* Estilo del contenedor en modo oscuro */
.dark .container {
  background-color: #333; /* Cambiar el color oscuro según tus preferencias */
  color: #fff; /* Cambiar el color de texto en modo oscuro según tus preferencias */
}

/* Estilos del fondo degradado en la sección */


.titulo {

  background: linear-gradient(90deg, #18f3dc, #9dfa2b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}



.gradient-button {
  background: linear-gradient(90deg, #18f3dc, #9dfa2b);
  border: none;
  color: #232c4d; /* Color del texto */
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  text-transform: uppercase;
  transition: background 0.3s ease;
}

.gradient-button:hover {
  background: linear-gradient(90deg, #9dfa2b, #18f3dc);
}

.sectionfooter {
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(135deg, #8b5cf6, #00ffff);
  width: 100%;
  height: 550px;
  z-index: -1;



}

/* Estilos para el contenedor de las columnas */
.flex {
  display: flex; /* Utilizar Flexbox */
  justify-content: space-between; /* Distribuir el espacio entre las columnas */
  z-index: -1;
  
}

.custom-link {
    border-radius: 9px;

  z-index: 0;
  
}


/* Estilos para cada columna */
.column {
  flex: 1; /* Permitir que las columnas ocupen el mismo ancho */
  padding: 16px; 
  z-index: -1;
}


.desk {
  flex: 1; /* Permitir que las columnas ocupen el mismo ancho */
  padding: 16px; 
  z-index: -1;
}

.subscription-price {
  color: #8b5cf6;
}


.contenedor-imagen{
  max-width: 100%;
  height: auto;
}

.classb{

    border-radius: 9px;
background: #FFFFFF;
font-size: 15px;
flex-shrink: 0;
padding: 15px 25px;
}


.img1{

    display: block; /* Para asegurarse de que la imagen sea un elemento de bloque */
  margin: 0 auto; /* Centra horizontalmente la imagen dentro de su contenedor */
  position: relative; /* Si es necesario para otros estilos */
  overflow: hidden; /* Si es necesario para otros estilos */
  margin-top: -65px; /* Tu valor personalizado para el margen superior */
}

@media only screen and (max-width: 1076px) {
  .img1  {
    display: block; /* Para asegurarse de que la imagen sea un elemento de bloque */
  margin: 0 auto; /* Centra horizontalmente la imagen dentro de su contenedor */
  position: relative; /* Si es necesario para otros estilos */
  overflow: hidden; /* Si es necesario para otros estilos */
  margin-top: -40px; /* Tu valor personalizado para el margen superior */
  }
}

.spacer {
  margin-top: -33px; /* Altura del espacio entre los divs */
}

.spacerfoot {
  height: 25px; /* Altura del espacio entre los divs */
}

.classtitulo{


font-size: 20px;
font-weight: bold; /* Agregar negrita */
flex-shrink: 0;
padding: 15px 25px;
}

.bannerfoot img {

  width: 100%; /* Ajustar la imagen al 100% del ancho de su contenedor */
  height: auto; /* Mantener la proporción de aspecto original */
  display: block; /* Para asegurarse de que la imagen sea un elemento de bloque */

}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-heading {
  animation: fadeInUp 1s ease-in-out;
}


</style>

