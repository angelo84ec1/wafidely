


<template>

<header class="bg-[#232c4d] p-4 flex justify-between items-center">
    <!-- Logo o título -->
    <nuxt-link to="#"  class="flex items-center active">
  
      <img src="~/assets/images/wafidelyuvaweb.png" style="height:auto; width:auto; max-width:100%; max-height:100%;"   alt="WAFIDELY"  />
</nuxt-link>
  

    <!-- Botones -->
    <div class="space-x-4 hide-for-mobile" >
      <!-- Botón 1 -->

      <nuxt-link to="/landing"  class="active">
  <button class="hover:text-[#7d7d7d]  text-sm px-4 py-2 rounded-lg " style="font-family: 'Montserrat', sans-serif; font-size: 18px">
    Inicio
  </button>
</nuxt-link>
      
      <!-- Botón 2 -->
      <nuxt-link to="/planes"  class="active">
  <button class="hover:text-[#7d7d7d]  text-sm px-4 py-2 rounded-lg" style="font-family: 'Montserrat', sans-serif; font-size: 18px">
    Precios
  </button>
</nuxt-link>


<a href="https://docs.ai.wafidely.com/" class="active" target="_blank" rel="noopener noreferrer">
  <button class="hover:text-[#7d7d7d] text-sm px-4 py-2 rounded-lg" style="font-family: 'Montserrat', sans-serif; font-size: 18px;">
    Documentacion
  </button>
</a>

    

        <!-- Botón 4 -->
        
       
    </div>

  <!-- Links de inicio de sesión y registro -->
  <div class="space-x-4 hide-for-mobile">
      <!-- Link de Iniciar Sesión con icono -->
      <nuxt-link to="https://ai.wafidely.com/" target="_blank"  >
  <button class="bg-[#38f5b3] text-[#232c4d] hover:bg-[#9dfa2b] text-sm px-4 py-2 rounded-lg transition-colors duration-300" style="font-family: 'Montserrat', sans-serif; font-size: 18px;">
    Registro
  </button>
</nuxt-link>

      <!-- Link de Registro con icono -->
      <nuxt-link to="/login"  >
  <button class="bg-[#38f5b3] text-[#232c4d] hover:bg-[#9dfa2b] text-sm px-4 py-2 rounded-lg transition-colors duration-300" style="font-family: 'Montserrat', sans-serif; font-size: 18px;">
   Inicio Sesión
  </button>
</nuxt-link>
    </div>

    <div class="mobile-menu">
      <button @click="toggleSubmenu">
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div class="menuList" v-if="isActive">
        <ul>
          <li>
            <a href="/landing"> Inicio </a>
          </li>
          <!-- Botón 2 -->
          <li>
            
            <nuxt-link to="/planes">Precios</nuxt-link>
          </li>

          <li>
            <a href="https://ai.wafidely.com/" target="_blank" > Registro</a>
          </li>
      
        </ul>

      </div>
    </div>
  </header>


  <div
    class="hide-for-mobile bg-white py-4 text-[#000000] text-sm flex justify-center items-center space-x-4"
    style="font-family: 'Poppins', sans-serif; font-size: 18px"
      >

    
  </div>
</template>

<script >



export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleSubmenu() {
      this.isActive = !this.isActive
      console.log(">>>>>>> running ",this.isActive);
    }
  }
};



</script>

<style scoped>
/* Estilo para eliminar el margen inferior del encabezado */
header {
  margin-bottom: 0;
  top: 0;
  z-index: 9999;
}

.active {
    color: #ffffff; /* Cambia el color del texto cuando el enlace está activo */
    font-weight: normal !important; 
    background-color: transparent !important;

  }
/* Clase para el texto con color blanco */
.texto-blanco {
  color: #636363;
}

/* Clase para el hover con color gris claro */
.hover-turquesa:hover {
  color: #232c4d; /* Color de texto gris claro para el hover */
  border-radius: 9px;
  width: 100%;
  height: 100%; /* Asegura que el fondo ocupe el 100% del alto */
  display: block; /* Asegura que el enlace se muestre como bloque y ocupe el 100% del ancho */
  position: relative; /* Asegura que el elemento contenedor tenga un contexto de posición para el borde redondeado */
}

nav {
  position: relative;
}

nav::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10px;
  background-color: #232c4d;
}

.nuxt-link-active {
  background-color: white; /* Establece el fondo blanco cuando el enlace está activo o se ha visitado */
  /* Otros estilos si es necesario */
}
header {
  position: relative;
}


.mobile-menu {
  display: none;
}
.mobile-menu button svg path {
  stroke: #38f5b3;
}
.mobile-menu button:hover {
  background-color: transparent;
}
.mobile-menu .menuList {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  z-index: 999;
  background-color: #fff;
  display: block;
}
.mobile-menu .menuList.active {
  display: block;
}
.mobile-menu .menuList ul {
  margin: 0;
  padding: 0;
  border-bottom: solid 1px #ccc;
  padding: 10px;
}
.mobile-menu .menuList ul li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}
.mobile-menu .menuList ul li a {
  text-decoration: none;
  color: #000;
  display: block;
}

@media only screen and (max-width: 1076px) {
  .mobile-menu {
    display: block;
  }
  .hide-for-mobile {
    display: none;
  }
}
.sub-menu-item {
  position: relative;
}


.submenu {
  display: none;
  position: absolute;
  top: 90%;
  left: 0;
 
 
  transform: translate(-40%, 0%);
  background-color: rgb(255, 255, 255);
  padding: 5px;
  border-radius: 0 0 9px 9px; /* Aplicando un radio de borde de 9px en la parte inferior */
  z-index: 10;
}


.submenu a:hover {
  color: #232c4d/* Cambia el color al hacer hover, reemplaza con tu color preferido */
  
}



.sub-level-menu {
  width: max-content;
  display: flex;
  flex-direction: column;
}

.sub-level-menu a {
  margin-bottom: 10px;
}

.submenu > div {
  display: flex;
}

.sub-menu-item:hover .submenu {
  display: block;
}

.h-6:hover {
      transform: translateY(3px); /* Puedes ajustar la cantidad de desplazamiento vertical */
      transition: transform 0.3s ease-in-out; /* Añade una transición suave */
    }

.mobile-submenu {
  width: max-content;
  display: flex;
  flex-direction: column;
  top: 100%;
  left: 50px;
}

.logo-svg {
        width: 100px; /* Ancho deseado */
        height: auto; /* Altura ajustada automáticamente */
    }



</style>
