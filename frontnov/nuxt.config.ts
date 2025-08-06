// https://nuxt.com/docs/api/configuration/nuxt-config
import lottie from 'lottie-web';
import { defineNuxtModule } from 'nuxt';
import svgLoader from "vite-svg-loader"



export default defineNuxtConfig({
  vite: {
    plugins: [
      svgLoader({
        /* ... */
      })
    ]
  },

  ssr: false,


      // Hooks para errores (opcional)
      hooks: {
        "render:errorMiddleware": (app) => {
          app.use((error, req, res, next) => {
            console.log("Error capturado:", error)
            next(error)
          })
        }
      },

  app: {
    head: {
      title: "Wafidely - Sistema agendamiento de citas web y whatsapp - Confirmacion asistencia por whatsapp - Sistema recordatorio vacunas en whatsapp mascotas - Api Whatsapp para N8N - Bot en Whatsapp - Agentes Inteligencia Artifical - AI Agent USA - Agencias creacion Agentes IA en Republica Dominicana - Agencias creacion Agentes IA en México ",
      htmlAttrs: {
        lang: "es",
      },

      
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "Sistema de agendamiento de citas vía web y WhatsApp. Facilita la gestión de citas y mejora la comunicación con tus clientes." },
        { name: "format-detection", content: "telephone=no" },
        { name: "keywords", content: "agendamiento de citas, sistema de citas medicas en whatsapp, gestión de citas en whatsapp, citas web, citas whatsapp, Wafidely, Crear agentes de inteligencia artifical, Whatsapp Bot recordatorio citas" }, // Palabras clave añadidas
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }, { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' },],
      script: [
        {
          src: "https://www.paypal.com/sdk/js?client-id=test&currency=USD",
          // type: "text/javascript",
          async: true,
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.STRAPI_URL || "http://localhost:1337",
      MAILTO: process.env.MAILTO || "websecuador.net@gmail.com",
      pagomedioToken: process.env.PAGOMEDIO_TOKEN,
      GOOGLE_MAPS_API: 'AIzaSyAMQ-DzRcCKRrOWJWjPkPSTUHqwyQkyVH8'
    
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/reset.css", "~/assets/css/global.css", "~/assets/css/main.css", "~/assets/scss/_swiper.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
  
    "~/plugins/toastification.client.ts", 
    // "~/plugins/pinia-persist.client.ts", 
    // "@/plugins/vue-google-map.client.ts",


  ],

  components: true,
  modules: ["@pinia/nuxt", "@sidebase/nuxt-pdf", "nuxt-proxy", "nuxt-swiper"],

  swiper: {
    
  },

  build: {
    transpile: ["defu"],
  },

  carousel: {
    prefix: 'MyPrefix'
  },

  router: {

   
    options: {
      sensitive: false,
      linkActiveClass: "drawer__link--active",
    },
  },

  compatibilityDate: "2024-11-27",
});