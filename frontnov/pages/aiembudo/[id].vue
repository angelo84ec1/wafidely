<script setup>
</script>

<template>


  <div class="max-w-[1600px] w-full mx-auto " style="overflow: hidden;">
    <img v-if="establecimientos?.banner && establecimientos?.banner.length !== 0"
      :src="getProfilePicture(establecimientos?.banner[0].url)" class="cssbanner w-full" alt="..." />
  </div>


<div class="max-w-full -translate-y-2 px-[10px] mob:max-w-[480px] sm:max-w-[600px] md:max-w-[700px] tab:max-w-[800px] lg:max-w-[980px] desk:max-w-[1050px] xl:max-w-[1280px] 2xl:max-w-[1500px] mx-auto overflow-x-hidden">

  <div class="top md:flex md:item-start md:justify-start md:gap-[20px] lg:gap-[30px] w-full">

    <div class="left w-full lg:w-[60%] ">
    <!-- Profile area start -->
      <div class="flex items-center justify-start gap-[15px] sm:gap-[25px] md:gap-[40px]">

        <div class="h-[8rem] w-[8rem] sm:h-[10rem] sm:w-[10rem] tab:h-[12rem] tab:w-[12rem] rounded-full overflow-hidden">
          <img v-if="establecimientos?.logo && establecimientos?.logo.length !== 0"
              :src="getProfilePicture(establecimientos?.logo[0].url)"
              class="csslogo w-full h-full object-fill" alt="..."
          />
        </div>

          <div class="flex flex-col items-start justify-start gap-[10px] sm:gap-[14px]">
          
          <div class="text-area">
            <div class="titulo font-bold leading-[normal] text-[10px] mini:text-[14px] mob:text-xl lg:text-[30px] lg:leading-[42px] text-black">{{ establecimientos?.nombre }}</div>
            <div class="descripcion leading-[normal] font-[400] text-[8px] mini:text-[10px] mob:text-sm text-[#1A1A1A]">{{ establecimientos?.categoria }}</div>
          </div>

            <div class="flex items-center justify-start gap-[6px] mini:gap-[10px]">
              <div class="cssface ">
                <a :href="'https://www.facebook.com/' + (establecimientos?.facebook || '')" target="_blank">
                  <img src="~/assets/images/Facebook.png" alt="Facebook">
                </a>
              </div>

              <div>
                <a :href="'https://www.tiktok.com/' + (establecimientos?.tiktok || '')" target="_blank">
                  <img src="~/assets/images/tiktok.png" alt="Tiktok" class="csstiktok rounded-lg">
                </a>
              </div>

              <div>
                <a :href="'https://www.instagram.com/' + (establecimientos?.instagram || '')" target="_blank">
                  <img src="~/assets/images/Instagram.png" alt="Instagram" class="cssinstagram rounded-lg">
                </a>
              </div>

              <div>
                <a :href="'https://www.youtube.com/' + (establecimientos?.youtube || '')" target="_blank">
                  <img src="~/assets/images/YouTube.png" alt="Youtube" class="cssyoutube rounded-lg">
                </a>
              </div>
            </div>

          </div>

      </div>
      <!-- Profile area end -->

      <!------------- Circle area start --------------------->

      <div class="grid-container pt-[30px] pb-[10px] flex items-center justify-center gap-x-[6px] sm:gap-x-[10px] md:gap-x-[15px] w-full lg:w-[80%] mx-auto">
          <img v-if="establecimientos?.galeria1 && establecimientos?.galeria1.length !== 0"
            :src="getProfilePicture(establecimientos?.galeria1[0].url)"
            class="cssgaleria1 h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem] md:h-[4rem] md:w-[4rem] xl:h-[5rem] xl:w-[5rem] rounded-full custom-shadow" alt="..."/>

          <img v-if="establecimientos?.galeria2 && establecimientos?.galeria2.length !== 0"
            :src="getProfilePicture(establecimientos?.galeria2[0].url)"
            class="cssgaleria2 h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem] md:h-[4rem] md:w-[4rem] xl:h-[5rem] xl:w-[5rem] rounded-full custom-shadow" alt="..."/>
          <img v-if="establecimientos?.galeria3 && establecimientos?.galeria3.length !== 0"
            :src="getProfilePicture(establecimientos?.galeria3[0].url)"
            class="cssgaleria3 h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem] md:h-[4rem] md:w-[4rem] xl:h-[5rem] xl:w-[5rem] rounded-full custom-shadow" alt="..."/>
          <img v-if="establecimientos?.galeria4 && establecimientos?.galeria4.length !== 0"
            :src="getProfilePicture(establecimientos?.galeria4[0].url)"
            class="cssgaleria4 h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem] md:h-[4rem] md:w-[4rem] xl:h-[5rem] xl:w-[5rem] rounded-full custom-shadow" alt="..."/>
          <img v-if="establecimientos?.galeria5 && establecimientos?.galeria5.length !== 0"
            :src="getProfilePicture(establecimientos?.galeria5[0].url)"
            class="cssgaleria5 h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem] md:h-[4rem] md:w-[4rem] xl:h-[5rem] xl:w-[5rem] rounded-full custom-shadow" alt="..."/>
      </div>

    <!------------- Circle area end --------------------->
    <!------------- Filter area start --------------------->

      <div class="w-full grid grid-cols-5 gap-y-[5px] gap-x-[2%] relative h-[400px] lg:h-auto py-[50px]">
        <div class="">
          <input class="peer sr-only" type="radio" value="yes" name="answer" id="yes" checked />
          <label class="flex justify-center cursor-pointer rounded-xl border text-center bg-[#232c4d] py-2 text-white hover:text-[#232c4d] px-4 hover:bg-gray-50 hover:border-[#232c4d] focus:outline-none peer-checked:border-[#232c4d] transition-all duration-500 ease-in-out text-[6px] micro:text-[4px] mob:text-[8px] md:text-[6px] tab:text-[12px] font-bold font-movile" for="yes"  v-if="establecimientos && establecimientos.titulodescripcion1"> {{ establecimientos.titulodescripcion1 }}</label>
          
          <div class="margindesc overflow-auto h-auto max-h-[200px] lg:h-auto absolute bg-white shadow-lg p-5 border top-[35%] pho:top-[40%] sm:top-[40%] md:top-[45%] lg:top-[80%] border-[#232c4d] rounded-lg w-full mx-auto transition-all duration-500 ease-in-out left-[100%] opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:left-0 text-[10px] micro:text-[12px] md:text-[14px] tab:text-[16px] font-movile" >
            <audio  v-if="audioUrldetalledescripcion1" controls preload="auto|metadata|none">
                <source :src="audioUrldetalledescripcion1" type="audio/mpeg" />
                <source :src="audioUrldetalledescripcion1.replace('.mp3', '.ogg')" type="audio/ogg" />
             
                Your browser does not support the audio element.
            </audio>
            
            {{ establecimientos?.detalledescripcion1 }}
          </div>

        </div>

        <div class="">
          <input class="peer sr-only" type="radio" value="no" name="answer" id="no" />
          <label class="flex justify-center cursor-pointer rounded-xl border text-center bg-[#232c4d] py-2 text-white hover:text-[#232c4d]  px-4 hover:bg-gray-50 hover:border-[#232c4d]] focus:outline-none peer-checked:border-[#232c4d]] transition-all duration-500 ease-in-out text-[6px] micro:text-[4px] mob:text-[8px] md:text-[6px] tab:text-[12px] font-bold  font-movile" for="no"  v-if="establecimientos && establecimientos.titulodescripcion2">{{ establecimientos?.titulodescripcion2 }}</label>
          
          <div class="margindesc overflow-auto h-auto max-h-[200px] lg:h-auto absolute bg-white shadow-lg p-5 border top-[35%] pho:top-[40%] sm:top-[40%] md:top-[45%] lg:top-[80%] border-[#232c4d] rounded-lg w-full mx-auto transition-all duration-500 ease-in-out left-[100%] opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:left-0 text-[10px] micro:text-[12px] md:text-[14px] tab:text-[16px] font-movile">
            <audio   v-if="audioUrldetalledescripcion2" controls preload="auto">
                <source :src="audioUrldetalledescripcion2" type="audio/mpeg" />
                <source :src="audioUrldetalledescripcion2.replace('.mp3', '.ogg')" type="audio/ogg" />
          
                Your browser does not support the audio element.
            </audio>
            {{ establecimientos?.detalledescripcion2 }}
          </div>

        </div>

        <div class="">
          <input class="peer sr-only" type="radio" value="yesno" name="answer" id="yesno" />
          <label class="flex justify-center cursor-pointer rounded-xl border text-center bg-[#232c4d] py-2 text-white hover:text-[#232c4d]  px-4 hover:bg-gray-50 hover:border-[#232c4d] focus:outline-none peer-checked:border-[#232c4d] transition-all duration-500 ease-in-out text-[6px] micro:text-[4px] mob:text-[8px] md:text-6px] tab:text-[12px] font-bold  font-movile " for="yesno"  v-if="establecimientos && establecimientos.titulodescripcion3">{{ establecimientos?.titulodescripcion3 }}</label>
          
          <div class="margindesc overflow-auto h-auto max-h-[200px] lg:h-auto absolute bg-white shadow-lg p-5 border top-[35%] pho:top-[40%] sm:top-[40%] md:top-[45%] lg:top-[80%] border-[#232c4d] rounded-lg w-full mx-auto transition-all duration-500 ease-in-out left-[100%] opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:left-0 text-[10px] micro:text-[12px] md:text-[14px] tab:text-[16px] font-movile">
            <audio v-if="audioUrldetalledescripcion3"  controls preload="auto">
                <source :src="audioUrldetalledescripcion3" type="audio/mpeg; codecs=mp3" />
                <source :src="audioUrldetalledescripcion3.replace('.mp3', '.ogg')" type="audio/ogg" />
              
                Your browser does not support the audio element.
            </audio>
            {{ establecimientos?.detalledescripcion3 }}
          </div>

        </div>

        <div class="">
          <input class="peer sr-only" type="radio" value="yesno1" name="answer" id="yesno1" />
          <label class="flex justify-center cursor-pointer rounded-xl border text-center bg-[#232c4d] py-2 text-white hover:text-[#232c4d]  px-4 hover:bg-gray-50 hover:border-[#232c4d] focus:outline-none peer-checked:border-[#232c4d] transition-all duration-500 ease-in-out text-[6px] micro:text-[4px] mob:text-[10px] md:text-[6px] tab:text-[12px] font-bold  font-movile" for="yesno1"  v-if="establecimientos && establecimientos.titulodescripcion4">{{ establecimientos.titulodescripcion4 }}</label>
          
          <div class="margindesc overflow-auto h-auto max-h-[200px] lg:h-auto absolute bg-white shadow-lg p-5 border top-[35%] pho:top-[40%] sm:top-[40%] md:top-[45%] lg:top-[80%] border-[#232c4d] rounded-lg w-full mx-auto transition-all duration-500 ease-in-out left-[100%] opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:left-0 text-[10px] micro:text-[12px] md:text-[14px] tab:text-[16px] font-movile">
            <audio  v-if="audioUrldetalledescripcion4" controls preload="auto">
                <source :src="audioUrldetalledescripcion4" type="audio/mpeg" />
                <source :src="audioUrldetalledescripcion4.replace('.mp3', '.ogg')" type="audio/ogg" />
               
                Your browser does not support the audio element.
            </audio>

            {{ establecimientos.detalledescripcion4 }}
          </div>

        </div>

        <div class="">
          <input class="peer sr-only" type="radio" value="yesno2" name="answer" id="yesno2" />
          <label class="flex justify-center cursor-pointer rounded-xl border text-center bg-[#232c4d] py-2 text-white hover:text-[#232c4d]  px-4 hover:bg-gray-50 hover:border-[#232c4d] focus:outline-none peer-checked:border-[#232c4d] transition-all duration-500 ease-in-out text-[6px] micro:text-[4px] mob:text-[10px] md:text-[6px] tab:text-[12px] font-bold  font-movile" for="yesno2"  v-if="establecimientos && establecimientos.titulodescripcion5">{{ establecimientos.titulodescripcion5 }}</label>
            
            <div id="audio" class="margindesc overflow-auto h-auto max-h-[200px] lg:h-auto absolute bg-white shadow-lg p-5 border top-[35%] pho:top-[40%] sm:top-[40%] md:top-[45%] lg:top-[80%] border-[#232c4d] rounded-lg w-full mx-auto transition-all duration-500 ease-in-out left-[100%] opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:left-0 text-[10px] micro:text-[12px] md:text-[14px] tab:text-[16px] font-movile">
              <audio  v-if="audioUrldetalledescripcion5" controls preload="auto">
                <source :src="audioUrldetalledescripcion5" type="audio/mpeg" />
                <source :src="audioUrldetalledescripcion5.replace('.mp3', '.ogg')" type="audio/ogg" />
            
                Your browser does not support the audio element.
              </audio>
              <div class="flex flex-col space-y-2">
    <label for="color" class="text-sm text-gray-700">Selecciona un color:</label>
    <input
      type="color"
      id="color"
      v-model="establecimientos.detalledescripcion5"
      class="w-16 h-10 p-0 border border-gray-300 rounded"
    />
    <p class="text-sm text-gray-600">Color seleccionado: {{ establecimientos.detalledescripcion5 }}</p>
  </div>
            </div>

        </div>

      </div>

    <!------------- Filter area end --------------------->
    </div>

    <div class="mb-12" v-if="calenderLoading">
   
      <div class="bg-slate-200 w-[250px] h-5 mb-12" v-for="n,i in 6" :key="i">&nbsp;</div>
    </div>
    <CommonCalenderAppoinment :establishmentId="route.params.id" :disabledData="getCalenderData" @fetchCalender="getDataAppoinments"  v-else />
   


  </div>





  <!-- Tercera columna -->
  <div class="mt-[130px] w-full h-auto lg:h-[600px] relative mb-14" >

    <div class="relative h-[920px] pho:h-[880px] sm:h-[780px] md:h-[740px] lg:h-auto">
        
        <div class="grid grid-cols-3 lg:grid-cols-5 gap-y-[20px] gap-x-[2%] relative">

          <div class="w-ful mt-8">
            <input class="peer sr-only " type="radio" value="tab1" name="tabs" id="tab1" checked />
            <label class="w-full max-w-[200px]  inline-flex justify-center cursor-pointer rounded-xl border border-gray-300 mt-8 text-white bg-[#232c4d] py-2 hover:bg-gray-50 hover:text-black focus:outline-none peer-checked:border-[#232c4d] transition-all duration-500 ease-in-out text-[2vh] font-bold font-movile" for="tab1" v-if="establecimientos && establecimientos.titulogooglemaps">{{ establecimientos?.titulogooglemaps }}</label>
            
            <div class="cssdirecciones ml-[40px] max-w-[240px]" for="tab1" v-if="establecimientos && establecimientos.direccion1" v-show="establecimientos && establecimientos.titulogooglemaps">
              <span class="direccion-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#dc2626" d="M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"/></svg>
                {{ establecimientos?.direccion1 }}
              </span>
            </div>

            <div class="absolute margindesc bg-white shadow-lg p-2 border top-[500px] pho:top-[460px] micro:top-[440px] sm:top-[360px] md:top-[320px] lg:top-[185px] border-[#232c4d] rounded-lg w-full lg:w-[50%] transition-all duration-500 ease-in-out left-[100%] opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:left-0 text-[2.8vh] font-movile">
              <GoogleMap :apiKey="GOOGLE_MAPS_API" :center="establecimientos?.googlemaps" :zoom="19"
                style="width: 100%; height: 358px">
                <Marker :options="markerOptions">
                  <InfoWindow>
                    <article>
                      <h1>{{ establecimientos?.nombre }}</h1>
                      <p class="cssdirecciones">{{ establecimientos?.direccion1 }}</p>
                    </article>
                  </InfoWindow>
                </Marker>
              </GoogleMap>
            </div>
          </div>

          <div class="w-full">
            <input class="peer sr-only" type="radio" value="tab2" name="tabs" id="tab2" />
            <label class="w-full max-w-[200px] inline-flex justify-center cursor-pointer rounded-xl border border-gray-300 bg-[#FFF200] py-2 hover:bg-gray-50 focus:outline-none peer-checked:border-[#232c4d] transition-all duration-500 ease-in-out text-[2vh] font-bold font-movile" for="tab2" v-if="establecimientos && establecimientos.titulogooglemaps2">{{ establecimientos?.titulogooglemaps2 }}</label>
            
            <div class="cssdirecciones ml-[40px] max-w-[240px]" for="tab2" v-if="establecimientos && establecimientos.direccion2" v-show="establecimientos && establecimientos.titulogooglemaps">
                <span class="direccion-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#dc2626" d="M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"/></svg>
                  {{ establecimientos?.direccion2 }}
                </span>
              </div>

            <div class="absolute margindesc bg-white shadow-lg p-2 border top-[500px] pho:top-[460px] micro:top-[440px] sm:top-[360px] md:top-[320px] lg:top-[185px]  border-[#232c4d] rounded-lg w-full lg:w-[50%] transition-all duration-500 ease-in-out left-[100%] opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:left-0 text-[2.8vh] font-movile">
              <GoogleMap :apiKey="GOOGLE_MAPS_API" :center="establecimientos?.googlemaps2" :zoom="19"
                  style="width: 99%; height: 358px">
                  <Marker :options="markerOptions">
                    <InfoWindow>
                      <article>
                        <h1>{{ establecimientos?.nombre }}</h1>
                        <p>{{ establecimientos?.direccion3 }}</p>
                      </article>
                    </InfoWindow>
                  </Marker>
                </GoogleMap>
            </div>

          </div>

          <div class="w-full">
            <input class="peer sr-only" type="radio" value="tab3" name="tabs" id="tab3"/>
            <label class="w-full max-w-[200px] inline-flex justify-center cursor-pointer rounded-xl border border-gray-300 bg-[#FFF200] py-2 hover:bg-gray-50 focus:outline-none peer-checked:border-[#232c4d] transition-all duration-500 ease-in-out text-[2vh] font-bold font-movile" for="tab3" v-if="establecimientos && establecimientos.titulogooglemaps3">{{ establecimientos?.titulogooglemaps3 }}</label>
            
            <div class="cssdirecciones ml-[40px] max-w-[240px]" for="tab3" v-if="establecimientos && establecimientos.direccion3" v-show="establecimientos && establecimientos.titulogooglemaps2">
                <span class="direccion-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#dc2626" d="M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"/></svg>
                  {{ establecimientos?.direccion3 }}
                </span>
              </div>

            <div class="absolute margindesc bg-white shadow-lg p-2 border top-[500px] pho:top-[460px] micro:top-[440px] sm:top-[360px] md:top-[320px] lg:top-[185px] border-[#232c4d] rounded-lg w-full lg:w-[50%] transition-all duration-500 ease-in-out left-[100%] opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:left-0 text-[2.8vh] font-movile">
              <GoogleMap :apiKey="GOOGLE_MAPS_API" :center="establecimientos?.googlemaps3" :zoom="19"
                style="width: 99%; height: 358px">
                <Marker :options="markerOptions">
                  <InfoWindow>
                    <article>
                      <h1>{{ establecimientos?.nombre }}</h1>
                      <p>{{ establecimientos?.direccion }}</p>
                    </article>
                  </InfoWindow>
                </Marker>
              </GoogleMap>
            </div>

          </div>

          <div class="w-full">
            <input class="peer sr-only" type="radio" value="tab4" name="tabs" id="tab4" />
            <label class="w-full max-w-[200px] inline-flex justify-center cursor-pointer rounded-xl border border-gray-300 bg-[#FFF200] py-2 hover:bg-gray-50 focus:outline-none peer-checked:border-[#232c4d] transition-all duration-500 ease-in-out text-[2vh] font-bold font-movile" for="tab4" v-if="establecimientos && establecimientos.titulogooglemaps4">{{ establecimientos?.titulogooglemaps4 }}</label>
            
            <div class="cssdirecciones ml-[40px] max-w-[240px]" for="tab4" v-if="establecimientos && establecimientos.direccion4" v-show="establecimientos && establecimientos.titulogooglemaps3">
                <span class="direccion-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#dc2626" d="M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"/></svg>
                  {{ establecimientos?.direccion4 }}  
                </span>
              </div>

            <div class="absolute margindesc bg-white shadow-lg p-2 border  border top-[500px] pho:top-[460px] micro:top-[440px] sm:top-[360px] md:top-[320px] lg:top-[185px] border-[#232c4d] rounded-lg w-full lg:w-[50%] transition-all duration-500 ease-in-out left-[100%] opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:left-0 text-[2.8vh] font-movile">
              <GoogleMap :apiKey="GOOGLE_MAPS_API" :center="establecimientos?.googlemaps4" :zoom="19"
                  style="width: 99%; height: 358px">
                  <Marker :options="markerOptions">
                    <InfoWindow>
                      <article>
                        <h1>{{ establecimientos?.nombre }}</h1>
                        <p>{{ establecimientos?.direccion }}</p>
                      </article>
                    </InfoWindow>
                  </Marker>
                </GoogleMap>
            </div>
          </div>

          <div class="w-full ">
            <input class="peer sr-only" type="radio" value="tab5" name="tabs" id="tab5" />
            <label class="w-full max-w-[200px] inline-flex justify-center cursor-pointer rounded-xl border border-gray-300 bg-[#FFF200] py-2 hover:bg-gray-50 focus:outline-none peer-checked:border-[#232c4d] transition-all duration-500 ease-in-out text-[2vh] font-bold font-movile" for="tab5" v-if="establecimientos && establecimientos.titulogooglemaps5">{{ establecimientos?.titulogooglemaps5 }}</label>
            
            <div class="cssdirecciones ml-[40px] max-w-[240px]" for="tab5" v-if="establecimientos && establecimientos.direccion5" v-show="establecimientos && establecimientos.titulogooglemaps4">
                <span class="direccion-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#dc2626" d="M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"/></svg>
                  {{ establecimientos?.direccion5 }}  
                </span>
              </div>

            <div class="absolute margindesc bg-white shadow-lg p-2 border top-[500px] pho:top-[460px] micro:top-[440px] sm:top-[360px] md:top-[320px] lg:top-[175px] border-[#232c4d] rounded-lg w-full lg:w-[50%] transition-all duration-500 ease-in-out left-[100%] opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:left-0 text-[2.8vh] font-movile">
              <GoogleMap :apiKey="GOOGLE_MAPS_API" :center="establecimientos?.googlemaps5" :zoom="19"
                style="width: 99%; height: 358px">
                <Marker :options="markerOptions">
                  <InfoWindow>
                    <article>
                      <h1>{{ establecimientos?.nombre }}</h1>
                      <p>{{ establecimientos?.direccion }}</p>
                    </article>
                  </InfoWindow>
                </Marker>
              </GoogleMap>
            </div>
          </div>

        </div>
        
    </div>

      <!-- Columna para el formulario -->
      <div class="lg:absolute lg:top-[130px] xl:top-[130px] left-0 lg:left-[55%]">
        <div class="relative cssformulariolanding w-full px-2">
          <FormularioColumnaLanding :email="establecimientos?.formulario" />
          <div class="whatsapp-float absolute bottom-0 right-0">
            <a :href="'https://wa.me/' + (establecimientos?.whatsapp || '')" target="_blank"    rel="noopener noreferrer" class="w-[70px]"> 
                <img
      src="https://amcacmin.automotorsclub.com/uploads/Animation_1750186633654_d5a4a6806e.gif"
      alt="WhatsApp"
      class="whatsapp-icon"
    />
            </a>
          </div>
        </div>
      </div>
    

  </div>



  <div class="spacer"></div>

</div>


<div class="w-full text-white" :style="{ backgroundColor: establecimientos.detalledescripcion5 }">


    <div class="max-w-7xl mx-auto flex justify-center items-center p-8">
      <p class="text-xl font-semibold" style="color: white">&copy; LANDING PAGE - EMBUDO DE VENTAS CREADO DE FORMA AUTOMÁTICA CON AI WAFIDELY</p>
 
    </div>

</div>

</template>


<script setup lang="ts">
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map';
import { ref, computed, onMounted } from "vue";
import BaseInput from "~/components/common/inputs/base-input.vue";
import BaseFileInput from "~/components/common/inputs/file-input.vue";
import useAdmin from '~/composables/useAdmin';
import { useAuthStore } from "~/store/auth";
import type { User, EstableCimientos } from "~/common/interfaces/user.interface";
import { useToast } from "vue-toastification";



const calenderLoading = ref(true)
const calenderData = ref([])
const googleEventsPublic = ref([]) // ✅ Agregar para eventos de Google
const audioUrldetalledescripcion1 = ref(null);
const audioUrldetalledescripcion2 = ref(null);
const audioUrldetalledescripcion3 = ref(null);
const audioUrldetalledescripcion4 = ref(null);
const audioUrldetalledescripcion5 = ref(null);



const getCalenderData = computed(() => {
  // Obtener fechas de citas locales
  const localDates = calenderData.value
    .filter(event => 
      event?.date && 
      event?.hour && 
      event?.name && 
      event?.whatsapp && 
      event?.establecimientos?.length && 
      event?.establecimientos[0]?.id == route.params.id
    )
    .map(event => {
      const [year, month, day] = event.date.split('-');
      const [hours, minutes] = event.hour.split(':');
      return new Date(year, month - 1, day, hours, minutes);
    });

  // ✅ Obtener fechas de eventos de Google Calendar
  const googleDates = googleEventsPublic.value.map(event => {
    return new Date(event.start);
  });

  // ✅ Combinar ambas listas
  const allDisabledDates = [...localDates, ...googleDates];
  
  console.log('Fechas locales bloqueadas:', localDates.length);
  console.log('Fechas Google bloqueadas:', googleDates.length);
  console.log('Total fechas bloqueadas:', allDisabledDates.length);

  return allDisabledDates;
});

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



definePageMeta({
  title: "Single",
  name: "Single Page",
  components: {
    BaseInput,
    BaseFileInput,

    },
  });


  
  
  const { isAdmin, isEstablecimiento } = useAdmin()
  const authStore = useAuthStore();
  const router = useRouter();
  
  const {
    public: { baseURL, GOOGLE_MAPS_API },
  } = useRuntimeConfig();
  const BASE_URL = baseURL;
  

  const getProfilePicture = (url: string) => `${BASE_URL}${url}`;
  
  const toast = useToast();
  const route = useRoute();
  
  // console.log(route);
  const establecimientos = ref<any>(null);
  
  if (route.params.id != "create") {
    const { data } = await useFetch<any[]>(
      `${baseURL}/establecimientos/${route.params.id}`,
      {
        method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (data.value?.activateLanding === false) {
    toast.error("Landing page desactivada por administrador");
    router.push("/");
  }
  console.log("????????? ", data.value);

  establecimientos.value = data.value;

  // convert establecimientos.value.googlemaps to object with lat and lng
  establecimientos.value.googlemaps = {
    lat: parseFloat(establecimientos.value?.googlemaps?.split(",")[0]),
    lng: parseFloat(establecimientos.value?.googlemaps?.split(",")[1]),
  };

  establecimientos.value.googlemaps2 = {
    lat: parseFloat(establecimientos.value?.googlemaps2?.split(",")[0]),
    lng: parseFloat(establecimientos.value?.googlemaps2?.split(",")[1]),
  };

  establecimientos.value.googlemaps3 = {
    lat: parseFloat(establecimientos.value?.googlemaps3?.split(",")[0]),
    lng: parseFloat(establecimientos.value?.googlemaps3?.split(",")[1]),
  };

  establecimientos.value.googlemaps4 = {
    lat: parseFloat(establecimientos.value?.googlemaps4?.split(",")[0]),
    lng: parseFloat(establecimientos.value?.googlemaps4?.split(",")[1]),
  };


  establecimientos.value.googlemaps5 = {
    lat: parseFloat(establecimientos.value?.googlemaps5?.split(",")[0]),
    lng: parseFloat(establecimientos.value?.googlemaps5?.split(",")[1]),
  };



  console.log("????????? ", establecimientos.value);
  //get selected user
  //   const {data} = await useFetch<any[]>(`${baseURL}/users/`, {
  //   method: "GET",
  //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${authStore.getToken}`,
    //   },
    // });
  }

  const markerOptions = {
    position: {
      lat: establecimientos.value.googlemaps.lat - 0.00011,
      lng: establecimientos.value.googlemaps.lng + 0.00024,
      lat: establecimientos.value.googlemaps2.lat - 0.00011,
      lng: establecimientos.value.googlemaps2.lng + 0.00024,
      lat: establecimientos.value.googlemaps3.lat - 0.00011,
      lng: establecimientos.value.googlemaps3.lng + 0.00024,
      lat: establecimientos.value.googlemaps4.lat - 0.00011,
      lng: establecimientos.value.googlemaps4.lng + 0.00024,
      lat: establecimientos.value.googlemaps5.lat - 0.00011,
      lng: establecimientos.value.googlemaps5.lng + 0.00024
    },
    anchorPoint: 'TOP_CENTER',
    label: 'O',
    title: 'Oleg Rõbnikov Web Development'
  }

  const getDataAppoinments = async () => {
  try {
    calenderLoading.value = true;
    
    // Obtener citas locales
    const response = await fetch(`${BASE_URL}/citas`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data: ' + response.statusText);
    }

    calenderData.value = await response.json();
    console.log('Citas locales obtenidas:', calenderData.value.length);

    // ✅ Obtener eventos de Google Calendar para este establecimiento
    await getGoogleEvents();

  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    calenderLoading.value = false;
  }
};

// ✅ Nueva función para obtener eventos de Google
const getGoogleEvents = async () => {
  try {
    const response = await fetch(`${BASE_URL}/google-events/${route.params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      googleEventsPublic.value = data.events || [];
      console.log('Eventos de Google obtenidos:', googleEventsPublic.value.length);
    } else {
      console.log('No se pudieron obtener eventos de Google');
      googleEventsPublic.value = [];
    }
  } catch (error) {
    console.error('Error obteniendo eventos de Google:', error);
    googleEventsPublic.value = [];
  }
};



onMounted(async () => {
  await getDataAppoinments();

  // Aquí asignas un valor por defecto si aún no tiene uno
  if (!establecimientos.value.detalledescripcion5) {
    establecimientos.value.detalledescripcion5 = '#ffffff'; // o el color que quieras
  }
    audioUrldetalledescripcion1.value = await callLambda(establecimientos.value?.detalledescripcion1);
    audioUrldetalledescripcion2.value = await callLambda(establecimientos.value?.detalledescripcion2);
    audioUrldetalledescripcion3.value = await callLambda(establecimientos.value?.detalledescripcion3);
    audioUrldetalledescripcion4.value = await callLambda(establecimientos.value?.detalledescripcion4);
    audioUrldetalledescripcion5.value = await callLambda(establecimientos.value?.detalledescripcion5);
  });







</script>


<style scoped lang="scss">

  .custom-shadow {
    box-shadow: 0 0 10px #232c4d
    ;
  } 
  .whatsapp-float {
  
  position: fixed;
  bottom: 20px;
  right: 20px;
  
  z-index: 1000;
}

.whatsapp-icon {
  
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  margin-top: -150px;
}

.whatsapp-icon:hover {

transform: scale(1.1);
}
// body {

//   position: relative;
// }


// .flex {
//   overflow-x: hidden !important;
//   position: relative;
//   overflow: hidden;

// }




// .margin-top-lg {
//   margin-top: -263px; /* Valor para pantallas grandes */
// }

// @media screen and (max-width: 480px) {
//   .margin-top-lg {
//     margin-top: -15px; /* Valor para dispositivos móviles */
//     margin-bottom: 50px;
//   }

//   .font-movile {
//     font-size: 0.299rem; /* Tamaño de fuente más pequeño para dispositivos móviles */

//     padding-left: 10px;
//     padding-right: 10px;
//     text-align: left; /* Centrar el texto */
//   }



//   .grid {
//     display: grid;
//   grid-template-columns: repeat(5, 0fr); /* 5 columnas en la cuadrícula */
  
//   }

// }

// .spacer {
//   height: 15px;
//   /* Altura del espacio entre los divs */
// }

// .image-container {
//   position: relative;
//   display: inline-block;
//   min-height: 96vh;
//   /* Establecer la altura mínima del contenedor al 100% del alto de la ventana gráfica (viewport) */




//   @media screen and (max-device-width : 1680px) {
//     position: relative;
//     display: inline-block;
//     min-height: 96vh;
//     /* Establecer la altura mínima del contenedor al 100% del alto de la ventana gráfica (viewport) */


//   }


//   @media screen and (max-device-width : 1440px) {
//     position: relative;
//     display: inline-block;
//     min-height: 101vh;
//     /* Establecer la altura mínima del contenedor al 100% del alto de la ventana gráfica (viewport) */
//   }

//   @media screen and (max-device-width : 1400px) {
//     position: relative;
//     display: inline-block;
//     min-height: 101vh;
//     /* Establecer la altura mínima del contenedor al 100% del alto de la ventana gráfica (viewport) */
//   }



// }

// .centerImage {
//   @apply flex justify-center items-center;
// }

// .image {
//   max-width: 100%;
//   /* Asegura que la imagen no sea más ancha que su contenedor */
// }

// .text-overlay {
//   position: absolute;
//   top: 50%;
//   /* Coloca el texto en el centro vertical */
//   left: 18%;
//   /* Coloca el texto en el centro horizontal */
//   transform: translate(-50%, -50%);
//   /* Alinea el centro del texto con el centro del contenedor */
//   font-family: 'Poppins', sans-serif;
//   /* Establece la fuente 'Poppins' como tipografía */
//   font-weight: 300;
//   /* Establece el grosor de fuente 'Medium' */
//   /* El resto de tus estilos para el texto superpuesto */
//   font-size: 2vw;
//   color: white;
//   /* Cambia el color del texto según tus preferencias */
//   background: rgba(0, 0, 0, 0.6);
//   /* Fondo semitransparente para hacer que el texto sea legible */
//   padding: 2px 5px;
//   /* Añade relleno al texto */
//   border-radius: 5px;
//   /* Añade esquinas redondeadas al fondo del texto */
// }

// .text-overlay-file2 {
//   position: absolute;
//   top: 65%;
//   /* Coloca el texto en el centro vertical */
//   left: 32%;
//   /* Coloca el texto en el centro horizontal */

//   transform: translate(-50%, -50%);
//   /* Alinea el centro del texto con el centro del contenedor */
//   font-family: 'Poppins', sans-serif;
//   /* Establece la fuente 'Poppins' como tipografía */
//   font-weight: 200;
//   /* Establece el grosor de fuente 'Medium' */
//   /* El resto de tus estilos para el texto superpuesto */
//   font-size: 1.5vw;
//   /* Tamaño del texto relativo al ancho de la pantalla */
//   color: white;
//   background: rgba(0, 0, 0, 0.6);
//   /* Fondo semitransparente para hacer que el texto sea legible */
//   padding: 0.5em 1em;
//   border-radius: 5px;
// }

// .grid-container {
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: auto auto;
//   /* Ajusta las alturas de las filas según sea necesario */
//   gap: 28px;
//   /* Espacio entre los elementos */
// }


// .titulo {
//   overflow: hidden;
//   margin-top: -29vh !important;
//   /* Ajuste del margen superior usando porcentaje */
//   color: rgb(0, 0, 0);
//   margin-left: -18vw;
//   /* Ajuste del margen izquierdo usando porcentaje */
//   font-size: 2vw;
//   /* Tamaño de fuente relativo al ancho de la ventana */
//   z-index: 1;


//   @media screen and (max-width: 1024px) {
//     font-size: 4vw;
//     /* Tamaño de fuente en pantallas pequeñas */

//     margin-top: -4vh;
//     /* Margen superior en pantallas pequeñas */
//     margin-left: -2vw;
//     /* Margen izquierdo en pantallas pequeñas */
//   }


//   /* Media query para hacerlo responsive */
//   @media screen and (max-width: 768px) {
//     font-size: 4vw;
//     /* Tamaño de fuente en pantallas aún más pequeñas */
//     margin-top: -86vh !important;
//     /* Ajuste del margen superior usando porcentaje */
//     margin-left: -7vw;
//     /* Margen izquierdo en pantallas aún más pequeñas */
//   }

//   @media screen and (max-width: 480px) {
//     font-size: 4vw;
//     /* Tamaño de fuente en pantallas aún más pequeñas */
//     margin-top: -86vh !important;
//     /* Ajuste del margen superior usando porcentaje */
//     margin-left: -7vw;
//     /* Margen izquierdo en pantallas aún más pequeñas */
//   }








//   @media screen and (min-width: 375px) and (max-width: 812px) {

//     font-size: 4vw;
//     /* Tamaño de fuente en pantallas aún más pequeñas */
//     margin-top: -82vh !important;
//     /* Ajuste del margen superior usando porcentaje */
//     margin-left: -7vw;
//     /* Margen izquierdo en pantallas aún más pequeñas */


// }


// /* Estilos para iPhone X/XS/11 Pro */
// @media screen and (min-width: 390px) and (max-width: 844px) {
//   font-size: 4vw;
//     /* Tamaño de fuente en pantallas aún más pequeñas */
//     margin-top: -82vh !important;
//     /* Ajuste del margen superior usando porcentaje */
//     margin-left: -7vw;
//     /* Margen izquierdo en pantallas aún más pequeñas */



// }


// }

// .descripcion {
//   overflow: hidden;

//   font-family: 'Poppins', sans-serif;
//   /* Establece la fuente 'Poppins' como tipografía */
//   font-weight: 200;
//   /* Establece el grosor de fuente 'Medium' */
//   /* El resto de tus estilos para el texto superpuesto */
//   font-size: 1.0vw;
//   /* Tamaño del texto relativo al ancho de la pantalla */
//   color: rgb(26, 26, 26);
//   padding: 0.5em 6em;
//   border-radius: 5px;
//   margin-top: -25vh;
//   margin-left: -24%;
//   z-index: 1 !important;
//   grid-row: 2 / 3;


  
//   @media screen and (max-width: 568px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: auto;
//     /* Ancho del logo en pantallas pequeñas */

//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -85vh;
//     /* Margen superior en pantallas pequeñas */
//     margin-left: -15%;
//     z-index: 1 !important;
//   }



//   @media screen and (max-width: 480px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: auto;
//     /* Ancho del logo en pantallas pequeñas */

//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -84.2vh;
//     /* Margen superior en pantallas pequeñas */
//     margin-left: -11%;
//     z-index: 1 !important;
//   }


//   @media screen and (min-width: 375px) and (max-width: 812px) {

//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: auto;
//     /* Ancho del logo en pantallas pequeñas */

//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -79.5vh;
//     /* Margen superior en pantallas pequeñas */
//     margin-left: -11%;
//     z-index: 1 !important;


// }


// /* Estilos para iPhone X/XS/11 Pro */
// @media screen and (min-width: 390px) and (max-width: 844px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: auto;
//     /* Ancho del logo en pantallas pequeñas */

//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -79.5vh;
//     /* Margen superior en pantallas pequeñas */
//     margin-left: -11%;
//     z-index: 1 !important;



// }



// }

// h1.text-base {

//   font-size: 18px;
// }

// .margindesc {

//   margin-top: 20px;



//   /* Media query para hacerlo responsive */
//   @media screen and (max-width: 768px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 90%;
//     /* Ancho del logo en pantallas pequeñas */


//   }

  
//   /* Media query para hacerlo responsive */
//   @media screen and (max-width: 568px) {

//     width: 90%;
//     /* Ancho del logo en pantallas pequeñas */


//   }

//   @media screen and (max-width: 480px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 90%;


//   }



// }

// .csslogo {
//   overflow: hidden;
//   margin-top: 24%;
//   /* Margen superior en pantallas pequeñas */

//   width: 200px;
//   /* Ancho del logo */
//   height: 200px;
//   /* Altura del logo */
//   z-index: 1;
//   border-radius: 50%;
//   /* Borde circular */
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   /* Sombras */

//   @media screen and (max-device-width : 1680px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 200px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 200px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: 24%;
//     /* Margen superior en pantallas pequeñas */


//   }


//   @media screen and (max-device-width : 1440px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 200px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 200px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: 27%;
//     /* Margen superior en pantallas pequeñas */
//   }


//   @media screen and (max-device-width : 1400px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 200px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 200px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: 27%;
//     /* Margen superior en pantallas pequeñas */
//   }



//   @media screen and (max-device-width : 1050px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 200px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 200px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: 27%;
//     /* Margen superior en pantallas pequeñas */


//   }


//   @media (min-width: 769px) and (max-width: 1024px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 200px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 200px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: 30%;
//     /* Margen superior en pantallas pequeñas */
//   }


//   /* Media query para hacerlo responsive */
//   @media screen and (max-width: 768px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 200px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 200px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -115%;
//     /* Margen superior en pantallas pequeñas */
//   }

  
//   /* Media query para hacerlo responsive */
//   @media screen and (max-width: 568px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 200px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 200px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -120%;
//     /* Margen superior en pantallas pequeñas */
//   }

//   @media screen and (max-width: 480px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 100px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 100px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -120%;
//     /* Margen superior en pantallas pequeñas */
//     margin-right: -13%;
//   }




//   @media screen and (min-width: 375px) and (max-width: 812px) {


//   /* Estilos para pantallas de 13 y 14 pulgadas */
//   width: 100px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 100px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -100%;
//     /* Margen superior en pantallas pequeñas */
//     margin-right: -13%;


// }


// /* Estilos para iPhone X/XS/11 Pro */
// @media screen and (min-width: 390px) and (max-width: 844px) {

//   /* Estilos para pantallas de 13 y 14 pulgadas */
//   width: 100px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 100px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -100%;
//     /* Margen superior en pantallas pequeñas */
//     margin-right: -13%;



// }


// }


// .cssbanner {
//   overflow: hidden;
//   margin-top: -35vh;

//   /* Media query para hacerlo responsive */
//   @media screen and (max-width: 768px) {

//     margin-top: -115vh;
//   }

//   @media screen and (max-width: 568px) {

// margin-top: -87vh;
// }

//   @media screen and (max-width: 480px) {

//     margin-top: -87vh;
//   }





// @media screen and (min-width: 375px) and (max-width: 812px) {


//   margin-top: -81vh;


// }


// /* Estilos para iPhone X/XS/11 Pro */
// @media screen and (min-width: 390px) and (max-width: 844px) {

//   margin-top: -81vh;

// }

// }

// .cssgaleria1 {


//   z-index: 1px;
//   margin-top: -22vh;
//   grid-row: 1 / 2;
//   border-radius: 50%;
//   /* Borde circular */
//   box-shadow: 0 0 10px rgba(192, 40, 185);
//   /* Sombras */


//   @media screen and (max-device-width : 1680px) {

//     grid-row: 1 / 2;
//     margin-top: -22%;
//     /* Margen superior en pantallas pequeñas */
//     border-radius: 50%;
//     /* Borde circular */
//     box-shadow: 0 0 10px rgba(192, 40, 185);
//     /* Sombras */

//   }


//   @media screen and (max-device-width : 1440px) {
//     grid-row: 1 / 2;
//     margin-top: -22%;
//     border-radius: 50%;
//     /* Borde circular */
//     box-shadow: 0 0 10px rgba(192, 40, 185);
//     /* Sombras */
//   }


//   @media screen and (max-device-width : 1400px) {
//     grid-row: 1 / 2;
//     margin-top: -28%;
//     border-radius: 50%;
//     /* Borde circular */
//     box-shadow: 0 0 10px rgba(192, 40, 185);
//     /* Sombras */
//   }




//   @media screen and (max-device-width : 1050px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 200px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 200px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -38%;
//     /* Margen superior en pantallas pequeñas */


//   }


//   @media (min-width: 769px) and (max-width: 1024px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 100px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 100px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -38%;
//     /* Margen superior en pantallas pequeñas */
//   }




//   @media screen and (max-width: 480px) {

// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// width: 50px;
//   /* Ancho del logo */
//   height: 50px;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -143%;
// /* Margen superior en pantallas pequeñas */
// margin-right: 5vw;
// }



// @media screen and (min-width: 375px) and (max-width: 812px) {


//   overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// width: 50px;
//   /* Ancho del logo */
//   height: 50px;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -115%;
// /* Margen superior en pantallas pequeñas */
// margin-right: 5vw;



// }


// /* Estilos para iPhone X/XS/11 Pro */
// @media screen and (min-width: 390px) and (max-width: 844px) {
//   overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// width: 50px;
//   /* Ancho del logo */
//   height: 50px;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -115%;
// /* Margen superior en pantallas pequeñas */
// margin-right: 5vw;



// }



// }

// .cssgaleria2 {

//   z-index: 1px;
//   margin-top: -22vh;
//   grid-row: 1 / 2;
//   border-radius: 50%;
//   /* Borde circular */
//   box-shadow: 0 0 10px rgba(192, 40, 185);

//   /* Sombras */
//   @media screen and (max-device-width : 1680px) {
//     grid-row: 1 / 2;
//     margin-top: -22%;
//     border-radius: 50%;
//     /* Borde circular */
//     box-shadow: 0 0 10px rgba(192, 40, 185);
//     /* Sombras */

//   }


//   @media screen and (max-device-width : 1440px) {
//     grid-row: 1 / 2;
//     margin-top: -22%;
//     border-radius: 50%;
//     /* Borde circular */
//     box-shadow: 0 0 10px rgba(192, 40, 185);
//     /* Sombras */
//   }


//   @media screen and (max-device-width : 1400px) {
//     grid-row: 1 / 2;
//     margin-top: -28%;
//     border-radius: 50%;
//     /* Borde circular */
//     box-shadow: 0 0 10px rgba(192, 40, 185);
//     /* Sombras */
//   }

//   @media screen and (max-device-width : 1050px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 200px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 200px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -38%;
//     /* Margen superior en pantallas pequeñas */


//   }


//   @media (min-width: 769px) and (max-width: 1024px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 100px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 100px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -38%;
//     /* Margen superior en pantallas pequeñas */
//   }


//   @media screen and (max-width: 480px) {

// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// width: 50px;
//   /* Ancho del logo */
//   height: 50px;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -143%;
// /* Margen superior en pantallas pequeñas */
// margin-right: 2vw;
// }




// @media screen and (min-width: 375px) and (max-width: 812px) {


// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// width: 50px;
// /* Ancho del logo */
// height: 50px;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -115%;
// /* Margen superior en pantallas pequeñas */
// margin-right: 2vw;



// }


// /* Estilos para iPhone X/XS/11 Pro */
// @media screen and (min-width: 390px) and (max-width: 844px) {
// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// width: 50px;
// /* Ancho del logo */
// height: 50px;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -115%;
// /* Margen superior en pantallas pequeñas */
// margin-right: 2vw;



// }



// }

// .cssgaleria3 {

//   z-index: 1px;
//   margin-top: -22vh;
//   grid-row: 1 / 2;
//   border-radius: 50%;
//   /* Borde circular */
//   box-shadow: 0 0 10px rgba(192, 40, 185);

//   /* Sombras */
//   @media screen and (max-device-width : 1680px) {
//     grid-row: 1 / 2;
//     margin-top: -22%;
//     border-radius: 50%;
//     /* Borde circular */
//     box-shadow: 0 0 10px rgba(192, 40, 185);
//     /* Sombras */

//   }

//   @media screen and (max-device-width : 1440px) {
//     grid-row: 1 / 2;
//     margin-top: -22%;
//     border-radius: 50%;
//     /* Borde circular */
//     box-shadow: 0 0 10px rgba(192, 40, 185);
//     /* Sombras */
//   }


//   @media screen and (max-device-width : 1400px) {
//     grid-row: 1 / 2;
//     margin-top: -28%;
//     border-radius: 50%;
//     /* Borde circular */
//     box-shadow: 0 0 10px rgba(192, 40, 185);
//     /* Sombras */
//   }



//   @media screen and (max-device-width : 1050px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 200px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 200px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -38%;
//     /* Margen superior en pantallas pequeñas */


//   }


//   @media (min-width: 769px) and (max-width: 1024px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 100px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 100px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -38%;
//     /* Margen superior en pantallas pequeñas */
//   }


//   @media screen and (max-width: 480px) {

// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// width: 50px;
//   /* Ancho del logo */
//   height: 50px;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -143%;
// /* Margen superior en pantallas pequeñas */
// margin-right: -0vw;
// }



// @media screen and (min-width: 375px) and (max-width: 812px) {


// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// width: 50px;
// /* Ancho del logo */
// height: 50px;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -115%;
// /* Margen superior en pantallas pequeñas */
// margin-right: -0vw;



// }


// /* Estilos para iPhone X/XS/11 Pro */
// @media screen and (min-width: 390px) and (max-width: 844px) {
// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// width: 50px;
// /* Ancho del logo */
// height: 50px;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -115%;
// /* Margen superior en pantallas pequeñas */
// margin-right: -0vw;



// }



// }

// .cssgaleria4 {

//   z-index: 1px;
//   margin-top: -22vh;
//   grid-row: 1 / 2;
//   border-radius: 50%;
//   /* Borde circular */
//   box-shadow: 0 0 10px rgba(192, 40, 185);

//   /* Sombras */
//   @media screen and (max-device-width : 1680px) {
//     grid-row: 1 / 2;
//     margin-top: -22%;
//     border-radius: 50%;
//     /* Borde circular */
//     box-shadow: 0 0 10px rgba(192, 40, 185);
//     /* Sombras */
//   }


//   @media screen and (max-device-width : 1440px) {
//     grid-row: 1 / 2;
//     margin-top: -22%;
//     border-radius: 50%;
//     /* Borde circular */
//     box-shadow: 0 0 10px rgba(192, 40, 185);
//     /* Sombras */
//   }


//   @media screen and (max-device-width : 1400px) {
//     grid-row: 1 / 2;
//     margin-top: -28%;
//     border-radius: 50%;
//     /* Borde circular */
//     box-shadow: 0 0 10px rgba(192, 40, 185);
//     /* Sombras */
//   }



//   @media screen and (max-device-width : 1050px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 200px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 200px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -38%;
//     /* Margen superior en pantallas pequeñas */


//   }


//   @media (min-width: 769px) and (max-width: 1024px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 100px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 100px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -38%;
//     /* Margen superior en pantallas pequeñas */
//   }



//   @media screen and (max-width: 480px) {

// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// width: 50px;
//   /* Ancho del logo */
//   height: 50px;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -143%;
// /* Margen superior en pantallas pequeñas */
// margin-right: -3vw;
// }


// @media screen and (min-width: 375px) and (max-width: 812px) {


// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// width: 50px;
// /* Ancho del logo */
// height: 50px;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -115%;
// /* Margen superior en pantallas pequeñas */
// margin-right: -3vw;



// }


// /* Estilos para iPhone X/XS/11 Pro */
// @media screen and (min-width: 390px) and (max-width: 844px) {
// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// width: 50px;
// /* Ancho del logo */
// height: 50px;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top:-115%;
// /* Margen superior en pantallas pequeñas */
// margin-right: -3vw;



// }


// }


// .cssgaleria5 {

//   z-index: 1px;
//   margin-top: -22vh;
//   grid-row: 1 / 2;
//   border-radius: 50%;
//   /* Borde circular */
//   box-shadow: 0 0 10px rgba(192, 40, 185);

//   /* Sombras */
//   @media screen and (max-device-width : 1680px) {
//     grid-row: 1 / 2;
//     margin-top: -22%;
//     border-radius: 50%;
//     /* Borde circular */
//     box-shadow: 0 0 10px rgba(192, 40, 185);
//     /* Sombras */

//   }

//   @media screen and (max-device-width : 1440px) {
//     grid-row: 1 / 2;
//     margin-top: -22%;
//     border-radius: 50%;
//     /* Borde circular */
//     box-shadow: 0 0 10px rgba(192, 40, 185);
//     /* Sombras */
//   }


//   @media screen and (max-device-width : 1400px) {
//     grid-row: 1 / 2;
//     margin-top: -28%;
//     border-radius: 50%;
//     /* Borde circular */
//     box-shadow: 0 0 10px rgba(192, 40, 185);
//     /* Sombras */
//   }



//   @media screen and (max-device-width : 1050px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 200px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 200px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -38%;
//     /* Margen superior en pantallas pequeñas */


//   }


//   @media (min-width: 769px) and (max-width: 1024px) {
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: 200px;
//     /* Ancho del logo en pantallas pequeñas */
//     height: 200px;
//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -38%;
//     /* Margen superior en pantallas pequeñas */
//   }

//   @media screen and (max-width: 480px) {

// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// width: 50px;
//   /* Ancho del logo */
//   height: 50px;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -143%;
// /* Margen superior en pantallas pequeñas */
// margin-right: -6vw;
// }




// @media screen and (min-width: 375px) and (max-width: 812px) {


// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// width: 50px;
// /* Ancho del logo */
// height: 50px;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -115%;
// /* Margen superior en pantallas pequeñas */
// margin-right: -6vw;


// }


// /* Estilos para iPhone X/XS/11 Pro */
// @media screen and (min-width: 390px) and (max-width: 844px) {
// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// width: 50px;
// /* Ancho del logo */
// height: 50px;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -115%;
// /* Margen superior en pantallas pequeñas */
// margin-right: -6vw;



// }



// }




// .cssform {
//   overflow: hidden;
//   padding: 20px 20px 20px 20px;
//   border-radius: 9px;

// }



// .p-4 {
//   background-color: #FBF8FF;
//   border-radius: 9px;
//   margin-top: -130px;
//   z-index: 1;


//   @media screen and (max-device-width : 1680px) {
//     margin-top: -156px;
//     z-index: 1;

//   }

//   @media screen and (max-device-width : 1440px) {
//     margin-top: -156px;
//     z-index: 1;
//   }

//   @media screen and (max-device-width : 1400px) {
//     margin-top: -156px;
//     z-index: 1;
//   }


//   @media screen and (max-width: 480px) {


// /* Altura del logo en pantallas pequeñas */
// margin-top: -135%;

// /* Margen superior en pantallas pequeñas */

// z-index: 1;
// }




// @media screen and (min-width: 375px) and (max-width: 812px) {


// /* Altura del logo en pantallas pequeñas */
// margin-top: -102%;

// /* Margen superior en pantallas pequeñas */

// z-index: 1;



// }


// /* Estilos para iPhone X/XS/11 Pro */
// @media screen and (min-width: 390px) and (max-width: 844px) {

// /* Altura del logo en pantallas pequeñas */
// margin-top: -102%;

// /* Margen superior en pantallas pequeñas */

// z-index: 1;



// }



// }


// .espacio-arriba {
//   overflow: hidden;
//   margin-top: -13.6%;
//   /* Ajuste según necesites */
//   margin-left: 82.5%;
//   /* Ajuste según necesites */
//   padding-bottom: 150px;
//   /* Relleno hacia abajo */
//   z-index: 1;
//   grid-row: 1 / 2;


//   @media screen and (max-device-width : 1680px) {
//     margin-top: -13.6%;
//     /* Ajuste según necesites */
//     margin-left: 82.5%;
//     /* Ajuste según necesites */
//     padding-bottom: 150px;
//     /* Relleno hacia abajo */
//     z-index: 1;
//     grid-row: 1 / 2;

//   }

//   @media screen and (max-device-width : 1440px) {
//     margin-top: -13.6%;
//     /* Ajuste según necesites */
//     margin-left: 82.5%;
//     /* Ajuste según necesites */
//     padding-bottom: 150px;
//     /* Relleno hacia abajo */
//     z-index: 1;
//     grid-row: 1 / 2;
//   }


//   @media screen and (max-width: 480px) {

//     img {
//     display: none; /* Oculta la imagen en dispositivos móviles */
//   }

// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// /* Estilos para pantallas de 13 y 14 pulgadas */
// width: auto;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -112%;
// /* Margen superior en pantallas pequeñas */
// margin-left: 56vw;
// grid-row: 1 / 2;
// }


// }



// .cssmoviles{
 


//   @media screen and (max-width: 480px) {

//     img {
//     display: none; /* Oculta la imagen en dispositivos móviles */
//   }

// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;

// /* Estilos para pantallas de 13 y 14 pulgadas */
// width: auto;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -112%;
// /* Margen superior en pantallas pequeñas */
// margin-left: 56vw;
// grid-row: 1 / 2;
// }


// }


// .cssface {
//   overflow: hidden;
//   position: relative;
//   display: inline-block;
//   position: absolute;
//   background-color: #FBF8FF;
//   border-radius: 9px;
//   margin-top: -18vh;
//   /* Ajusta el margen superior en función del tamaño de la pantalla */
//   margin-left: 20vw;
//   /* Ajusta el margen izquierdo en función del tamaño de la pantalla */
//   z-index: 1;



//   @media screen and (max-width: 480px) {

//     overflow: hidden;
//   position: relative;
//   display: inline-block;
//   position: absolute;
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: auto;
//     /* Ancho del logo en pantallas pequeñas */

//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -163%;
//     /* Margen superior en pantallas pequeñas */
//     margin-left: 31vw;
//   }



// /* Estilos para iPhone X/XS/11 Pro */
// @media screen and (min-width: 375px) and (max-width: 812px) {


//   overflow: hidden;
//   position: relative;
//   display: inline-block;
//   position: absolute;
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: auto;
//     /* Ancho del logo en pantallas pequeñas */

//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -128%;
//     /* Margen superior en pantallas pequeñas */
//     margin-left: 31vw;



// }


// /* Estilos para iPhone X/XS/11 Pro */
// @media screen and (min-width: 390px) and (max-width: 844px) {


//   overflow: hidden;
//   position: relative;
//   display: inline-block;
//   position: absolute;
//     /* Estilos para pantallas de 13 y 14 pulgadas */
//     width: auto;
//     /* Ancho del logo en pantallas pequeñas */

//     /* Altura del logo en pantallas pequeñas */
//     margin-top: -128%;
//     /* Margen superior en pantallas pequeñas */
//     margin-left: 31vw;



// }



// }


// .cssinstagram {
//   overflow: hidden;
//   position: relative;
//   display: inline-block;
//   position: absolute;
//   background-color: #FBF8FF;
//   border-radius: 9px;
//   margin-top: -18vh;
//   margin-left: 26%;




//   @media screen and (max-width: 480px) {

// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;
// /* Estilos para pantallas de 13 y 14 pulgadas */
// width: auto;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -163%;
// /* Margen superior en pantallas pequeñas */
// margin-left: 40vw;
// }


// @media screen and (min-width: 375px) and (max-width: 812px) {


// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;
//   /* Estilos para pantallas de 13 y 14 pulgadas */
//   width: auto;
//   /* Ancho del logo en pantallas pequeñas */

//   /* Altura del logo en pantallas pequeñas */
//   margin-top: -128%;
//   /* Margen superior en pantallas pequeñas */
//   margin-left: 40vw;



// }


// /* Estilos para iPhone X/XS/11 Pro */
// @media screen and (min-width: 390px) and (max-width: 844px) {


// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;
//   /* Estilos para pantallas de 13 y 14 pulgadas */
//   width: auto;
//   /* Ancho del logo en pantallas pequeñas */

//   /* Altura del logo en pantallas pequeñas */
//   margin-top: -128%;
//   /* Margen superior en pantallas pequeñas */
//   margin-left: 40vw;



// }



// }


// .csstiktok {
//   overflow: hidden;
//   position: relative;
//   display: inline-block;
//   position: absolute;
//   background-color: #FBF8FF;
//   border-radius: 9px;
//   margin-top: -18vh;
//   margin-left: 23%;



//   @media screen and (max-width: 480px) {

// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;
// /* Estilos para pantallas de 13 y 14 pulgadas */
// width: auto;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -163%;
// /* Margen superior en pantallas pequeñas */
// margin-left: 49vw;
// }


// @media screen and (min-width: 375px) and (max-width: 812px) {


// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;
//   /* Estilos para pantallas de 13 y 14 pulgadas */
//   width: auto;
//   /* Ancho del logo en pantallas pequeñas */

//   margin-top: -128%;
//   /* Margen superior en pantallas pequeñas */
//   margin-left: 49vw;



// }


// /* Estilos para iPhone X/XS/11 Pro */
// @media screen and (min-width: 390px) and (max-width: 844px) {


// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;
//   /* Estilos para pantallas de 13 y 14 pulgadas */
//   width: auto;
//   /* Ancho del logo en pantallas pequeñas */

//   margin-top: -128%;
//   /* Margen superior en pantallas pequeñas */
//   margin-left: 49vw;



// }




// }

// .cssyoutube {
//   overflow: hidden;
//   position: relative;
//   display: inline-block;
//   position: absolute;
//   background-color: #FBF8FF;
//   border-radius: 9px;
//   margin-top: -18vh;
//   margin-left: 29%;





//   @media screen and (max-width: 480px) {

// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;
// /* Estilos para pantallas de 13 y 14 pulgadas */
// width: auto;
// /* Ancho del logo en pantallas pequeñas */

// /* Altura del logo en pantallas pequeñas */
// margin-top: -163%;
// /* Margen superior en pantallas pequeñas */
// margin-left: 58vw;
// }


// @media screen and (min-width: 375px) and (max-width: 812px) {


// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;
//   /* Estilos para pantallas de 13 y 14 pulgadas */
//   width: auto;
//   /* Ancho del logo en pantallas pequeñas */

//   margin-top: -128%;
//   /* Margen superior en pantallas pequeñas */
//   margin-left: 58vw;



// }


// /* Estilos para iPhone X/XS/11 Pro */
// @media screen and (min-width: 390px) and (max-width: 844px) {


// overflow: hidden;
// position: relative;
// display: inline-block;
// position: absolute;
//   /* Estilos para pantallas de 13 y 14 pulgadas */
//   width: auto;
//   /* Ancho del logo en pantallas pequeñas */
//   margin-top:-128%;
//   /* Margen superior en pantallas pequeñas */
//   margin-left: 58vw;



// }



// }

// .csswhat {
//   overflow: hidden;
//   position: relative;
//   display: inline-block;
//   position: absolute;

//   border-radius: 9px;
//   margin-top: -12vh;
//   margin-left: 91%;

//   /* Media query para hacerlo responsive */
//   @media screen and (max-width: 768px) {
//     font-size: 4vw;
//     /* Tamaño de fuente en pantallas aún más pequeñas */
//     margin-top: -74vh !important;
//     /* Ajuste del margen superior usando porcentaje */
//     margin-right: -100%;
//     /* Margen izquierdo en pantallas aún más pequeñas */
//   }

//   @media screen and (max-width: 480px) {
//     font-size: 4vw;
//     /* Tamaño de fuente en pantallas aún más pequeñas */
//     margin-top: -10vh !important;
//     /* Ajuste del margen superior usando porcentaje */
//     margin-left: 71%;
//     /* Margen izquierdo en pantallas aún más pequeñas */
//   }

// }

// input[type="radio"] {
//   display: none;
//   /* Ocultar el radio button */
// }

// input[type="radio"]:checked+label {
//   border-color: #232c4d;
//   /* Cambiar el color del borde cuando el radio button está seleccionado */
//   box-shadow: 0 0 5px #FFF200;
//   /* Añadir sombra al borde */
// }

// label {

//   cursor: pointer;

//   border: 1px solid transparent;
//   border-radius: 4px;
//   transition: border-color 0.3s, box-shadow 0.3s;
//   /* Transiciones suaves */
// }

// label:hover {
//   border-color: #232c4d;
//   /* Cambiar el color del borde al pasar el ratón por encima */
// }


// .cssformulariolanding {

//   margin-top: 20vh !important;
//   margin-left: -22%;




//   /* Media query para hacerlo responsive */
//   @media screen and (max-width: 768px) {
    
//     margin-top: 60vh !important;
 
//     margin-left: 2.6vw;

//   }

//   @media screen and (max-width: 480px) {
//     margin-top: 60vh !important;
   
//     margin-left: 2.6vw;
  
//   }







// }


// .cssdirecciones{

//   overflow: hidden;
//   margin-top: -0.1vh !important;
//   /* Ajuste del margen superior usando porcentaje */
//   color: rgb(0, 0, 0);
//   margin-left: 2.8vw;
//   /* Ajuste del margen izquierdo usando porcentaje */
//   font-size: 0.9vw;
//   /* Tamaño de fuente relativo al ancho de la ventana */
//   z-index: 1;

// }


// .iconomaps{

// overflow: hidden;
// margin-top: 1vh !important;
// /* Ajuste del margen superior usando porcentaje */
// color: rgb(0, 0, 0);
// margin-right: -5vw;
// /* Ajuste del margen izquierdo usando porcentaje */
// font-size: 0.9vw;
// /* Tamaño de fuente relativo al ancho de la ventana */
// z-index: 1;

// }


</style>