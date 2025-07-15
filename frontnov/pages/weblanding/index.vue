<script setup>
</script>
<template>
  <main>

    <header>
      <div class="header__text">
        <h1>Landing Page</h1>
      </div>
    </header>

    <div class="home__content">
      <div class="home__actions">
        <h1>Sube 1 imagen con tu banner y logo, además puedes subir 5 imágenes para la galería, y completa todos los campos solicitados que correspondan.</h1>
        <div class="home__buttons">

          <button class="button button--secondary" @click.prevent="()=>{router.push(`/weblanding/${currentUserEstablishment[0]?.id}`)}">
            <img src="~/assets/images/landingwhite.png" alt="" /> Ver Landing Page
          </button>
          <button class="button button--secondary" @click.prevent="save()">
            <img src="~/assets/images/save-green.png" alt="" /> Guardar Landing
          </button>


        </div>
      </div>

      <form ref="formPersonalData" class="form">
   
        <div class="form__group">

      

          <div class="flex grid grid-cols-1 md:grid-cols-2 gap-4">

        <!-- Contenido del primer grid -->
        <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md flex">

          <div class="relative flex w-full md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img v-if="banner && banner.length > 0" :src="getProfilePicture(banner[0].url)" alt="" />
<BaseFileInput v-else v-model="bannerFile" label="Subir banner" name="banner" @update:modelValue="captureFile($event, 'banner')" />
  </div>
  <div class="p-6">
    <div class="mb-2 flex items-center justify-between">
      <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
      Banner
      </p>
      <button v-if="banner" @click.prevent="()=>{banner = ''}">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.74 8.99954L14.394 17.9995M9.606 17.9995L9.26 8.99954M19.228 5.78954C19.57 5.84154 19.91 5.89654 20.25 5.95554M19.228 5.79054L18.16 19.6725C18.1164 20.2378 17.8611 20.7657 17.445 21.1508C17.029 21.5359 16.4829 21.7497 15.916 21.7495H8.084C7.5171 21.7497 6.97102 21.5359 6.55498 21.1508C6.13894 20.7657 5.88359 20.2378 5.84 19.6725L4.772 5.78954M19.228 5.78954C18.0739 5.61506 16.9138 5.48264 15.75 5.39254M3.75 5.95454C4.09 5.89554 4.43 5.84054 4.772 5.78954M4.772 5.78954C5.92613 5.61506 7.08623 5.48264 8.25 5.39254M15.75 5.39254V4.47654C15.75 3.29654 14.84 2.31254 13.66 2.27554C12.5536 2.24018 11.4464 2.24018 10.34 2.27554C9.16 2.31254 8.25 3.29754 8.25 4.47654V5.39254M15.75 5.39254C13.2537 5.19962 10.7463 5.19962 8.25 5.39254"
                      stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
            </button>
    </div>
    
  </div>
  <div class="p-6 pt-0">
    <button class="button button--secondary" @click.prevent="uploadFile(bannerFile, 'banner')">
  <img src="~/assets/images/save-green.png" alt="" /> Subir Banner
</button>
  </div>
</div>
</div>





<div class="flex ">
        <!-- Contenido del segundo grid -->
        
        <!-- Contenido del primer grid -->
        <div class=" flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md  ml-0 md:ml-12">

<div class="flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
<div class=" mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 ">
  <img v-if="logo && logo.length > 0" :src="getProfilePicture(logo[0].url)" alt="" />
<BaseFileInput v-else v-model="logoFile" label="Subir logo" name="logo" @update:modelValue="captureFile($event, 'logo')" />
  </div>
  <div class="p-6">
    <div class="mb-2 flex items-center justify-between">
      <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
      Logo
      </p>
      <button v-if="logo" @click.prevent="()=>{logo = ''}">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.74 8.99954L14.394 17.9995M9.606 17.9995L9.26 8.99954M19.228 5.78954C19.57 5.84154 19.91 5.89654 20.25 5.95554M19.228 5.79054L18.16 19.6725C18.1164 20.2378 17.8611 20.7657 17.445 21.1508C17.029 21.5359 16.4829 21.7497 15.916 21.7495H8.084C7.5171 21.7497 6.97102 21.5359 6.55498 21.1508C6.13894 20.7657 5.88359 20.2378 5.84 19.6725L4.772 5.78954M19.228 5.78954C18.0739 5.61506 16.9138 5.48264 15.75 5.39254M3.75 5.95454C4.09 5.89554 4.43 5.84054 4.772 5.78954M4.772 5.78954C5.92613 5.61506 7.08623 5.48264 8.25 5.39254M15.75 5.39254V4.47654C15.75 3.29654 14.84 2.31254 13.66 2.27554C12.5536 2.24018 11.4464 2.24018 10.34 2.27554C9.16 2.31254 8.25 3.29754 8.25 4.47654V5.39254M15.75 5.39254C13.2537 5.19962 10.7463 5.19962 8.25 5.39254"
                      stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
            </button>
    </div>
    
  </div>
  <div class="p-6 pt-0">
    <button class="button button--secondary" @click.prevent="uploadFile(logoFile, 'logo')">
  <img src="~/assets/images/save-green.png" alt="" /> Subir Logo
</button>
        </div>
    </div>
  </div>
</div>



<div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md flex">

<div class="relative flex w-full md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
<div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
  <img v-if="galeria1 && galeria1.length > 0" :src="getProfilePicture(galeria1[0].url)" alt="" />
<BaseFileInput v-else v-model="galeria1File" label="Subir Galeria" name="galeria1" @update:modelValue="captureFile($event, 'galeria1')" />
</div>
<div class="p-6">
<div class="mb-2 flex items-center justify-between">
<p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
Galería 1
</p>
<button v-if="galeria1" @click.prevent="()=>{galeria1= ''}">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.74 8.99954L14.394 17.9995M9.606 17.9995L9.26 8.99954M19.228 5.78954C19.57 5.84154 19.91 5.89654 20.25 5.95554M19.228 5.79054L18.16 19.6725C18.1164 20.2378 17.8611 20.7657 17.445 21.1508C17.029 21.5359 16.4829 21.7497 15.916 21.7495H8.084C7.5171 21.7497 6.97102 21.5359 6.55498 21.1508C6.13894 20.7657 5.88359 20.2378 5.84 19.6725L4.772 5.78954M19.228 5.78954C18.0739 5.61506 16.9138 5.48264 15.75 5.39254M3.75 5.95454C4.09 5.89554 4.43 5.84054 4.772 5.78954M4.772 5.78954C5.92613 5.61506 7.08623 5.48264 8.25 5.39254M15.75 5.39254V4.47654C15.75 3.29654 14.84 2.31254 13.66 2.27554C12.5536 2.24018 11.4464 2.24018 10.34 2.27554C9.16 2.31254 8.25 3.29754 8.25 4.47654V5.39254M15.75 5.39254C13.2537 5.19962 10.7463 5.19962 8.25 5.39254"
                      stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
            </button>
</div>

</div>
<div class="p-6 pt-0">
  <button class="button button--secondary" @click.prevent="uploadFile(galeria1File, 'galeria1')">
  <img src="~/assets/images/save-green.png" alt="" /> Subir Galería 1
</button>
</div>
</div>
</div>





<div class="flex ">
<!-- Contenido del segundo grid -->

<!-- Contenido del primer grid -->
<div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ml-0 md:ml-12">

<div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
<div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 ">
  <img v-if="galeria2 && galeria2.length > 0" :src="getProfilePicture(galeria2[0].url)" alt="" />
<BaseFileInput v-else v-model="galeria2File" label="Subir Galeria 2" name="galeria2" @update:modelValue="captureFile($event, 'galeria2')" />
</div>
<div class="p-6">
<div class="mb-2 flex items-center justify-between">
<p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
Galería 2
</p>
<button v-if="galeria2" @click.prevent="()=>{galeria2= ''}">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.74 8.99954L14.394 17.9995M9.606 17.9995L9.26 8.99954M19.228 5.78954C19.57 5.84154 19.91 5.89654 20.25 5.95554M19.228 5.79054L18.16 19.6725C18.1164 20.2378 17.8611 20.7657 17.445 21.1508C17.029 21.5359 16.4829 21.7497 15.916 21.7495H8.084C7.5171 21.7497 6.97102 21.5359 6.55498 21.1508C6.13894 20.7657 5.88359 20.2378 5.84 19.6725L4.772 5.78954M19.228 5.78954C18.0739 5.61506 16.9138 5.48264 15.75 5.39254M3.75 5.95454C4.09 5.89554 4.43 5.84054 4.772 5.78954M4.772 5.78954C5.92613 5.61506 7.08623 5.48264 8.25 5.39254M15.75 5.39254V4.47654C15.75 3.29654 14.84 2.31254 13.66 2.27554C12.5536 2.24018 11.4464 2.24018 10.34 2.27554C9.16 2.31254 8.25 3.29754 8.25 4.47654V5.39254M15.75 5.39254C13.2537 5.19962 10.7463 5.19962 8.25 5.39254"
                      stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
            </button>
</div>

</div>
<div class="p-6 pt-0">
  <button class="button button--secondary" @click.prevent="uploadFile(galeria2File, 'galeria2')">
  <img src="~/assets/images/save-green.png" alt="" /> Subir Galería 2
</button>
</div>
</div>
</div>
</div>



<div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md flex">

<div class="relative flex w-full md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
<div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
  <img v-if="galeria3 && galeria3.length > 0" :src="getProfilePicture(galeria3[0].url)" alt="" />
<BaseFileInput v-else v-model="galeria3File" label="Subir Galeria 3" name="galeria3" @update:modelValue="captureFile($event, 'galeria3')" />

</div>
<div class="p-6">
<div class="mb-2 flex items-center justify-between">
<p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
Galería 3
</p>
<button v-if="galeria3" @click.prevent="()=>{galeria3= ''}">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.74 8.99954L14.394 17.9995M9.606 17.9995L9.26 8.99954M19.228 5.78954C19.57 5.84154 19.91 5.89654 20.25 5.95554M19.228 5.79054L18.16 19.6725C18.1164 20.2378 17.8611 20.7657 17.445 21.1508C17.029 21.5359 16.4829 21.7497 15.916 21.7495H8.084C7.5171 21.7497 6.97102 21.5359 6.55498 21.1508C6.13894 20.7657 5.88359 20.2378 5.84 19.6725L4.772 5.78954M19.228 5.78954C18.0739 5.61506 16.9138 5.48264 15.75 5.39254M3.75 5.95454C4.09 5.89554 4.43 5.84054 4.772 5.78954M4.772 5.78954C5.92613 5.61506 7.08623 5.48264 8.25 5.39254M15.75 5.39254V4.47654C15.75 3.29654 14.84 2.31254 13.66 2.27554C12.5536 2.24018 11.4464 2.24018 10.34 2.27554C9.16 2.31254 8.25 3.29754 8.25 4.47654V5.39254M15.75 5.39254C13.2537 5.19962 10.7463 5.19962 8.25 5.39254"
                      stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
            </button>
</div>

</div>
<div class="p-6 pt-0">
  <button class="button button--secondary" @click.prevent="uploadFile(galeria3File, 'galeria3')">
  <img src="~/assets/images/save-green.png" alt="" /> Subir Galería 3
</button>
</div>
</div>
</div>





<div class="flex ">
<!-- Contenido del segundo grid -->

<!-- Contenido del primer grid -->
<div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ml-0 md:ml-12">

<div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
<div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 ">
  <img v-if="galeria4 && galeria4.length > 0" :src="getProfilePicture(galeria4[0].url)" alt="" />
<BaseFileInput v-else v-model="galeria4File" label="Subir Galeria 4" name="galeria4" @update:modelValue="captureFile($event, 'galeria4')" />
</div>
<div class="p-6">
<div class="mb-2 flex items-center justify-between">
<p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
Galería 4
</p>
<button v-if="galeria4" @click.prevent="()=>{galeria4= ''}">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.74 8.99954L14.394 17.9995M9.606 17.9995L9.26 8.99954M19.228 5.78954C19.57 5.84154 19.91 5.89654 20.25 5.95554M19.228 5.79054L18.16 19.6725C18.1164 20.2378 17.8611 20.7657 17.445 21.1508C17.029 21.5359 16.4829 21.7497 15.916 21.7495H8.084C7.5171 21.7497 6.97102 21.5359 6.55498 21.1508C6.13894 20.7657 5.88359 20.2378 5.84 19.6725L4.772 5.78954M19.228 5.78954C18.0739 5.61506 16.9138 5.48264 15.75 5.39254M3.75 5.95454C4.09 5.89554 4.43 5.84054 4.772 5.78954M4.772 5.78954C5.92613 5.61506 7.08623 5.48264 8.25 5.39254M15.75 5.39254V4.47654C15.75 3.29654 14.84 2.31254 13.66 2.27554C12.5536 2.24018 11.4464 2.24018 10.34 2.27554C9.16 2.31254 8.25 3.29754 8.25 4.47654V5.39254M15.75 5.39254C13.2537 5.19962 10.7463 5.19962 8.25 5.39254"
                      stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
            </button>
</div>

</div>
<div class="p-6 pt-0">
  <button class="button button--secondary" @click.prevent="uploadFile(galeria4File, 'galeria4')">
  <img src="~/assets/images/save-green.png" alt="" /> Subir Galería 4
</button>
</div>
</div>
</div>
</div>



<!-- Contenido del primer grid -->
<div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">

<div class="relative flex w-full md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
<div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
  <img v-if="galeria5 && galeria5.length > 0" :src="getProfilePicture(galeria5[0].url)" alt="" />
<BaseFileInput v-else v-model="galeria5File" label="Subir Galeria 5" name="galeria5" @update:modelValue="captureFile($event, 'galeria5')" />
</div>
<div class="p-6">
<div class="mb-2 flex items-center justify-between">
<p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
  Subir Galería 5
</p>

<button v-if="galeria5" @click.prevent="()=>{galeria5= ''}">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.74 8.99954L14.394 17.9995M9.606 17.9995L9.26 8.99954M19.228 5.78954C19.57 5.84154 19.91 5.89654 20.25 5.95554M19.228 5.79054L18.16 19.6725C18.1164 20.2378 17.8611 20.7657 17.445 21.1508C17.029 21.5359 16.4829 21.7497 15.916 21.7495H8.084C7.5171 21.7497 6.97102 21.5359 6.55498 21.1508C6.13894 20.7657 5.88359 20.2378 5.84 19.6725L4.772 5.78954M19.228 5.78954C18.0739 5.61506 16.9138 5.48264 15.75 5.39254M3.75 5.95454C4.09 5.89554 4.43 5.84054 4.772 5.78954M4.772 5.78954C5.92613 5.61506 7.08623 5.48264 8.25 5.39254M15.75 5.39254V4.47654C15.75 3.29654 14.84 2.31254 13.66 2.27554C12.5536 2.24018 11.4464 2.24018 10.34 2.27554C9.16 2.31254 8.25 3.29754 8.25 4.47654V5.39254M15.75 5.39254C13.2537 5.19962 10.7463 5.19962 8.25 5.39254"
                      stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
            </button>

</div>

</div>
<div class="p-6 pt-0">
  <button class="button button--secondary" @click.prevent="uploadFile(galeria5File, 'galeria5')">
  <img src="~/assets/images/save-green.png" alt="" /> Subir Galería 5
</button>
</div>
</div>

</div>











</div>



          <div class="two-columns" style="margin-top: 20px;">



            
            
            <BaseSelect v-model="category" label="Categoria" :options="categoryOptions" name="categoria" />


            <BaseInput v-model="contact" type="text" label="Número de Contacto" :disabled="false" name="contacto" />

            <BaseInput v-model="name" type="text" label="Nombre Establecimiento" :disabled="false" name="nombre" />

          


            <BaseInput v-model="whatsa" type="text" label="Whatsapp" name="whatsapp" :disabled="false" placeholder="empezar con +593 luego 09..." />

            <BaseInput v-model="form" type="text" label="Email" name="formulario" :disabled="false" />


            <BaseInput v-model="titulomaps" type="text" label="Ciudad Oficina Matriz" :disabled="false" name="titulogooglemaps" placeholder="Quito" />
            <BaseInput v-model="maps" type="text" label="Google Maps Matriz" :disabled="false" name="googlemaps" placeholder="-0.089666, -78.429636" />
            <BaseInput v-model="direction1" type="text" label="Dirección Oficina Matriz" :disabled="false" name="direccion1" placeholder="Av. 6 de diciembre y Eloy Alfaro " />
            <BaseInput v-model="titulomaps2" type="text" label="Ciudad Sucursal 1" :disabled="false" name="titulogooglemaps2" placeholder="Guayaquil" />
           <BaseInput v-model="maps2" type="text" label="Google Maps Sucursal 1" :disabled="false" name="googlemaps2" placeholder="-0.089666, -78.429636" />
           <BaseInput v-model="direction2" type="text" label="Dirección Sucursal 1" :disabled="false" name="direccion2" placeholder="Av. 6 de diciembre y Eloy Alfaro " />
           <BaseInput v-model="titulomaps3" type="text" label="Ciudad Sucursal 2" :disabled="false" name="titulogooglemaps3" placeholder="Cuenca" /> 
            <BaseInput v-model="maps3" type="text" label="Google Maps Sucursal 2" :disabled="false" name="googlemaps3" placeholder="-0.089666, -78.429636" />
            <BaseInput v-model="direction3" type="text" label="Dirección Sucursal 2" :disabled="false" name="direccion3" placeholder="Av. 6 de diciembre y Eloy Alfaro " />
            <BaseInput v-model="titulomaps4" type="text" label="Ciudad Sucursal 3" :disabled="false" name="titulogooglemaps4" placeholder="Ambato" /> 
            <BaseInput v-model="maps4" type="text" label="Google Maps Sucursal 3" :disabled="false" name="googlemaps4" placeholder="-0.089666, -78.429636" />
            <BaseInput v-model="direction4" type="text" label="Dirección Sucursal 3" :disabled="false" name="direccion4" placeholder="Av. 6 de diciembre y Eloy Alfaro " />
            <BaseInput v-model="titulomaps5" type="text" label="Ciudad Sucursal 4" :disabled="false" name="titulogooglemaps5" placeholder="Ibarra" /> 
            <BaseInput v-model="maps5" type="text" label="Google Maps Sucursal 4" :disabled="false" name="googlemaps5" placeholder="-0.089666, -78.429636" />
            <BaseInput v-model="direction5" type="text" label="Dirección Sucursal 4" :disabled="false" name="direccion5" placeholder="Av. 6 de diciembre y Eloy Alfaro " />

            <BaseInput v-model="titledescription1" type="text" label="Titulo Descripción 1" :disabled="false" name="titulodescripcion1" />
           
            <BaseTextarea v-model="description1" label="Descripcion 1" name="detalledescripcion1" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

            <BaseInput v-model="titledescription2" type="text" label="Titulo Descripción 2" :disabled="false" name="titulodescripcion2" />
           
           <BaseTextarea v-model="description2" label="Descripcion 2" name="detalledescripcion2" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

           <BaseInput v-model="titledescription3" type="text" label="Titulo Descripción 3" :disabled="false" name="titulodescripcion3" />
           
           <BaseTextarea v-model="description3" label="Descripcion 3" name="detalledescripcion3" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

           <BaseInput v-model="titledescription4" type="text" label="Titulo Descripción 4" :disabled="false" name="titulodescripcion4" />
           
           <BaseTextarea v-model="description4" label="Descripcion 4" name="detalledescripcion4" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

           <BaseInput v-model="titledescription5" type="text" label="Titulo Descripción 5" :disabled="false" name="titulodescripcion5" />
           
           <BaseTextarea v-model="description5" label="Descripcion 5" name="detalledescripcion5" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

           <BaseInput v-model="titledescription6" type="text" label="Titulo Descripción 6" :disabled="false" name="titulodescripcion6" />
           
           <BaseTextarea v-model="description6" label="Descripcion 6" name="detalledescripcion4" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

           <BaseInput v-model="titledescription7" type="text" label="Titulo Descripción 7" :disabled="false" name="titulodescripcion7" />
           
           <BaseTextarea v-model="description7" label="Descripcion 7" name="detalledescripcion7" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
 
           <BaseInput v-model="titledescription8" type="text" label="Titulo Descripción 8" :disabled="false" name="titulodescripcion8" />
           
           <BaseTextarea v-model="description8" label="Descripcion 8" name="detalledescripcion8" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

           <BaseInput v-model="titledescription9" type="text" label="Titulo Descripción 9" :disabled="false" name="titulodescripcion9" />
           
           <BaseTextarea v-model="description9" label="Descripcion 9" name="detalledescripcion9" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

           <BaseInput v-model="titledescription10" type="text" label="Titulo Descripción 10" :disabled="false" name="titulodescripcion10" />
           
           <BaseTextarea v-model="description10" label="Descripcion 10" name="detalledescripcion10" class="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

           <BaseInput v-model="face" type="text" label="Facebook" name="facebook" :disabled="false" />

           <BaseInput v-model="insta" type="text" label="Instagram" name="instagram" :disabled="false" />

           <BaseInput v-model="tik" type="text" label="Tiktok" name="tiktok" :disabled="false" />

           <BaseInput v-model="youtu" type="text" label="Youtube" name="youtube" :disabled="false" />


          </div>
        </div>





      </form>
    </div>


  </main>
</template>
<script setup lang="ts">

import BaseInput from "~/components/common/inputs/base-input.vue";

import BaseFileInput from "~/components/common/inputs/file-input.vue";
import BaseTextarea from "~/components/common/inputs/base-textarea.vue";
import useAdmin from '~/composables/useAdmin';
import { useAuthStore } from "~/store/auth";
import BaseSelect from "~/components/common/inputs/base-select.vue";
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
    BaseFileInput
  },
  layout: "private",
  middleware: ["auth"],


});



const { isAdmin, isEstablecimiento } = useAdmin()
const authStore = useAuthStore();
const router = useRouter();
const toast = useToast();




const getProfilePicture = (url: string) => `${BASE_URL}${url}`;



const formPersonalData = ref<HTMLFormElement | null>(null);

const category = ref<boolean>(false);

  const name = ref("");
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
const face = ref("");
const insta = ref("");
const tik = ref("");
const youtu = ref("");
const contact = ref("");
const whatsa = ref("");
const form = ref("");
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



const captureFile = (file: File, type: String) => {
  if (type === "banner") {
    bannerFile.value = file;
  } else if (type === "logo") {
    logoFile.value = file;
  } else if (type === "galeria1") {
    galeria1File.value = file;
  } else if (type === "galeria2") {
    galeria2File.value = file;
  } 
  else if (type === "galeria3") {
    galeria3File.value = file;
  } 
  else if (type === "galeria4") {
    galeria4File.value = file;
  } 
  else if (type === "galeria5") {
    galeria5File.value = file;
  } 
  console.log(file);
};



const uploadFile = (file: File, name: String) => {
  // read File
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    console.log(reader.result);
  };

  // see the readed file
  console.log(file);
  // Create form data
  const formData = new FormData();
  formData.append("files", file);
  fetch(`https://amcacmin.automotorsclub.com/upload`, {
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
  } 
  else if (name === "galeria3") {
    galeria3.value = data;
    toast.success("Galeria 3 subida");
  } 
  else if (name === "galeria4") {
    galeria4.value = data;
    toast.success("Galeria 4 subida");
  } 
  else if (name === "galeria5") {
    galeria5.value = data;
    toast.success("Galeria 5 subida");
  } 
})
  .catch(error => {
    console.error(error)
    toast.error("File size should be less than 1 mb");
  })
};

const currentUserEstablishment = ref<EstableCimientos | null>(null);

const fetchData = ()=>{
  fetch(`https://amcacmin.automotorsclub.com/establecimientos/${currentUserEstablishment.value[0]?.id}`, {
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

onMounted(() => {
  currentUserEstablishment.value = authStore.user?.establecimientos;
  console.log(currentUserEstablishment.value);
  fetchData()
  // console.log(await callLambda("this is a sample text"));
})

// onMounted(async () => {
//   currentUserEstablishment.value = authStore.user?.establecimientos;
//   // console.log(currentUserEstablishment.value);
//   // fetchData()
//   console.log(await callLambda("this is a sample text"));
// })


const callLambda = (text) => {
  const body = {
    "text": text
  };

  return fetch(`https://c6yxx5cyj4wnsavllpnnqwj6540yuiyl.lambda-url.us-east-1.on.aws/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    return data.audio_url; // Here you will get the audio URL
  });
};


const save = async () => {
  try {
    // Validate form inputs here


    // let call1 = await callLambda(description1.value);
    // call1 = await JSON.parse(call1);
    // console.log(call1);

    // let call2 = await callLambda(description2.value);
    // call2 = await JSON.parse(call2);
    // // console.log(call2);

    // let call3 = await callLambda(description3.value);
    // call3 = await JSON.parse(call3);
    // // console.log(call3);

    // let call4 = await callLambda(description4.value);
    // call4 = await JSON.parse(call4);
    // // console.log(call4);

    // let call5 = await callLambda(description5.value);
    // call5 = await JSON.parse(call5);
    // // console.log(call5);



    let description1Url = "";
    let description2Url = "";
    let description3Url = "";
    let description4Url = "";
    let description5Url = "";

    // let description1Url = await callLambda(description1.value);
    // let description2Url = await callLambda(description2.value);
    // let description3Url = await callLambda(description3.value);
    // let description4Url = await callLambda(description4.value);
    // let description5Url = await callLambda(description5.value);




    // Prepare data for submission


    
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



    // Make API call to save the form data
    const response = await fetch(`https://amcacmin.automotorsclub.com/establecimientos/${currentUserEstablishment.value[0]?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authStore.getToken}`
      },
      body: JSON.stringify(data)
    });

    console.log(response)

    if (response.ok) {
      // Handle success
      toast.success("Información guardada");
      fetchData();
      sendEmail();
      
    } else {
      // Handle error
      toast.error("Failed to submit form");
    }
  } catch (error) {
    // Handle error
    toast.error("An error occurred while submitting the form");
    console.log("Error",error);
  }
};




const sendEmail = () => {
  try {



    const emailData = {
      to: "ciatseg@gmail.com",
      subject: 'Landing Page Creada',
      text: `
      Un establecimiento creo la Landing page con la siguiente información a revisar:

          Whatsapp: ${whatsa.value}
          Correo: ${form.value}
        `,

    };

    // Use strapi email plugin to send email
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




const categoryOptions = ref<SelectOption[]>([
  { text: "Escuela de Conducción", value: "Escuela de Conducción" },
  { text: "Lavadora de Vehiculos", value: "Lavadora" },
  { text: "Mecánica", value: "Mecánica" },
  { text: "Repuestos", value: "Repuestos" },
  { text: "Accesorio de Vehículos", value: "Accesorio de Vehiculos" },
  { text: "Parqueaderos", value: "Parqueaderos" },
  { text: "Cursos de Formación", value: "Cursos de Formacion" },
  { text: "Concesionarios", value: "Concesionarios" },
  { text: "Estudio Jurídico", value: "Estudio Jurídico" },
]);



</script>


<style scoped>
header {
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  border-bottom: 1px solid var(--gray-200);
}

.header__text>h1 {
  font-size: var(--heading-2);
}

.header__photo {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.home__actions>h2 {
  font-size: var(--heading-1);
}

.home__actions {
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home__buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.home__link {
  color: var(--links);
}

.home__link:hover {
  color: gray;
  /* Color al hacer hover */
}

.plans {
  margin-right: 9px;
  padding: 10px;
  background-color: #C028B9 !important;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
}

.form {
  padding: 1rem 0;
}

.form__group {
  padding: 2rem 0;
  border-bottom: 1px solid var(--gray-200);
  max-width: 670px;
}



.one-column {
  display: grid;
  gap: 1rem;
  grid-template-columns: auto;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

label>input {
  height: 40px;
  padding: 0 0.5rem;
}

.new-line {
  grid-column: 1;
}

label+h3,
.one-column>h3 {
  margin-top: 1rem;
}

.form__group>h2 {
  margin-bottom: 1rem;
}

.full-column {
  grid-column: 1/-1;
}


.full-column label {
  /* Tus estilos aquí */
  color: #000;
  font-weight: 700;
  /* Grosor de fuente reducido */
  font-size: 2rem;
  /* Tamaño de fuente 1 */

}



.home_buttons {

  text-decoration: none;
  color: var(--green-400);


  align-items: center;
  justify-content: center;
  padding: 1px;
  background-color: transparent;
  border-radius: 6px;


  border: 1px solid var(--green-500);
  /* Borde de 2px sólido en color verde */
}




.home_buttons:hover {
  background-color: var(--green-400);
}

.home_buttons--primary {
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  color: var(--white);
  text-decoration: none;
  color: #000;
  font-weight: 500;
  /* Grosor de fuente reducido */
  font-size: 1rem;
  /* Tamaño de fuente 1 */

}

.button--secondary {}

@media (max-width: 767px) {
  .button--secondary {

    width: 100%;
    /* Ocupa todo el ancho disponible */
    right: 2px;

    padding: 0 1rem;


    z-index: 1;
    /* Asegúrate de que esté en un z-index superior para que esté por encima del contenido */
  }
}


.home_buttons--primary:hover {
  color: var(--white);
}

.home_buttons>img {
  width: 1.5rem;
}

.float {

  position: fixed;
  top: 180px;
  right: 21px;
  z-index: 0;


}

/* Estilos para pantallas más pequeñas (por ejemplo, menos de 768px) */
@media (max-width: 767px) {
  .home_buttons {
    justify-content: center;
    /* Mantén o ajusta los estilos según sea necesario para el diseño responsivo */
    padding: 8px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    /* Puedes ajustar el color de fondo según tu diseño */
    padding: 10px;
    /* Espacio de relleno opcional para separar el enlace del borde inferior */
    text-align: center;
    z-index: 1;
    /* Asegúrate de que esté en un z-index superior para que esté por encima del contenido */
  }
}

/*breackpoint*/
@media only screen and (max-width: 600px) {
  .d-flex {
    display: flex !important;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .full-column,
  .full-column-2 {
    width: 100% !important;
  }

  .form__group {
    max-width: 100% !important;
  }

  .one-column {
    width: 100% !important;
  }
}
</style>
  