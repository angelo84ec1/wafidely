<template>



<a href="https://ai.wafidely.com/" target="_blank" rel="noopener noreferrer">
<div class="w-full   bg-[#232c4d] shadow-xl shadow-indigo-200 py-10 px-20 flex justify-between items-center">
            <p class=" text-white"> <span class="text-4xl font-medium">Empieza por 5 dias GRATIS a ser usuario de Wafidely Ahora!</span> <br> <span class="text-lg">Sistema web intuitivo fácil de utilizar, cada mes actualizaciones  </span></p>
            <button class="px-5 py-2  font-medium text-slate-700 shadow-xl  hover:bg-white duration-150 rounded-lg bg-[#9dfa2b]">REGISTRARSE</button>
        </div>
      </a>


  <footer style="background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png') ;" >
    <div class="mx-auto max-w-screen-xl px-2 py-2 sm:px-3 lg:px-8">
  

      <div class="menu">
        <div class="grid grid-cols-1 gap-4 place-items-justify pt-1 pb-2">

          <img src="~/assets/images/wafidelynegroturquesaverde.png" style="height:2em; width:10em; "   alt="Wafidely"  />
          <p class="text-gray-700 text-justify max-w-xs tracking-tight ml-1">Permite enviar recordatorios automáticos a Whatsapp que son agendados desde la Landing Page, crea flujos de Diálogos con IA para su whatsapp de Whatsapp Business </p>
                           
                         
        </div>
   
                        
        <div class="menu-item">
          <div class="menu-title">Planes</div>
          <ul>
            
            <li><a class="menu-link" href="#">WaPyme</a></li>
            <li><a class="menu-link" href="#">WaMedium</a></li>
            <li><a class="menu-link" href="#">WaLarge</a></li>
            <a class="px-5 py-7" href="#"></a>
          </ul>
        </div>
        <div class="menu-item">
          <div class="menu-title">Información</div>
          <ul>
            <li><a class="menu-link" href="#">Preguntas Frecuentes</a></li>
            <li><a class="menu-link" href="#">Términos y Condiciones</a></li>
            <li>
              <a class="menu-link" href="#">Soporte</a>
            </li>
            <a class="px-5 py-7" href="#"></a>

          </ul>
        </div>
      </div>
    </div>
   
    <div style="border-top: 1px solid #e3e3e3"></div>
  </footer>

  <div
    class="fooback md:mb-0 mx-auto flex flex-col md:flex-row justify-between items-center"
  >
    <!-- Columna Izquierda: Texto de Copyright -->
    <div class="fooback mb-15 md:mb-0">
   
        © 2024 - 2025 Copyright Wafidely. Todos los Derechos Reservados
   
    </div>

 <!-- Columna Central: Logotipo -->

    <!-- Columna Derecha: Iconos de Redes Sociales -->
    <div class="foobackred ml-0 md:ml-700 flex items-center">
      <a
        href="https://www.facebook.com/wafidely" target="_blank"
        class="text-[#232c4d] hover:text-[#38f5b3]  transition duration-300 text-right cursor-pointer"
      >
        <i class="fab fa-facebook-f ml-5 md:mb-0"></i>
        <!-- Icono de Facebook -->
      </a>
      <a
        href="https://www.instagram.com/wafidely" target="_blank"
        class="text-[#232c4d]  hover:text-[#38f5b3]  transition duration-300 cursor-pointer"
      >
        <i class="fab fa-instagram ml-5"></i>
        <!-- Icono de Instagram -->
      </a>
      <a
        href="https://www.tiktok.com/wafidely" target="_blank"
        class="text-[#232c4d]  hover:text-[#38f5b3] transition duration-300 cursor-pointer"
      >
        <i class="fab fa-tiktok ml-5"></i>
        <!-- Icono de TikTok -->
      </a>
    </div>

    <div class="whatsapp-float">
  <a
    href="https://wa.me/593983314957"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://amcacmin.automotorsclub.com/uploads/Animation_1750186633654_d5a4a6806e.gif"
      alt="WhatsApp"
      class="whatsapp-icon"
    />
  </a>
</div>
 
  </div>
</template>

<style scoped>
.barra {
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(135deg, #8b5cf6, #00ffff);
  color: #fff; /* Cambiar el color de texto en modo oscuro según tus preferencias */

  z-index: -1;
}

.fooback {
 
  overflow: hidden;
  background: #ffffff;

  color: #232c4d; /* Color de texto blanco */
  text-align: center; /* Alinear los enlaces a la izquierda */
  padding: 10px; /* Agregar relleno de 20 píxeles en todas las direcciones */
  z-index: 0;
}

.foobackred {
  position: relative;
  overflow: hidden;
  color: #232c4d;
  margin-left: 400px;
    margin-right: 0px;
    padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 5px;
  padding-left: 0px;
}


@media only screen and (max-width: 1076px) {
  .foobackred  {
    margin-left: 0px;
  }
  .hide-for-mobile {
    display: none;
  }
}
.foobacklogo {
  padding: 50px; /* Agregar relleno de 20 píxeles en todas las direcciones */
  margin-right: 30px;
}



.menu {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  gap: 30px;
}

.menu-item {
  display: flex;

  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
}

.menu-title {
  color: #18f3dc;
  font-weight: bold;
  top: 50px;
  margin-bottom: 30px;
  font-size: 20px; /* Tamaño de letra de 16px */
}

.menu-link {
  text-decoration: none;
  color: #232c4d;
  margin-top: 50px;
  text-align: justify; /* Alinear los enlaces a la izquierda */
  font-size: 18px; /* Tamaño de letra de 16px */
}

.menu-link::before {
  content: "\2022"; /* Código Unicode para viñeta */
  color: #18f3dc; /* Color de la viñeta */
  display: inline-block;
  width: 1em; /* Espacio entre la viñeta y el texto */
  margin-right: 0.5em; /* Espacio entre la viñeta y el texto */
}

.logofooter {
  width: 335px;
  height: 89px;
  flex-shrink: 0;

}

.bottoncontrata {
  color: #C028B9;
  transition: color 0.3s, background 0.3s; /* Transición suave para el cambio de color y fondo */
}

.bottoncontrata:hover {
  color: #000000;
  background: #ffffff;
  background: rgba(255, 255, 255, 0.8); /* Fondo con transparencia del 80% */
}

.logo-svg {
        width: 100px; /* Ancho deseado */
        height: auto; /* Altura ajustada automáticamente */
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



/* @media only screen and (max-width: 767px) {
  .menu-link {
    margin: 20px 0;
  }
} */

</style>
