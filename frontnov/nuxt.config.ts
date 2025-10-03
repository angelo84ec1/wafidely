// https://nuxt.com/docs/api/configuration/nuxt-config
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
      title: "Wafidely - Chat automático en WhatsApp Business - Sistema agendamiento de citas web en whatsapp - Confirmacion asistencia por whatsapp - Sistema recordatorio vacunas en whatsapp mascotas - Api Whatsapp para N8N - Bot en Whatsapp - Agentes Inteligencia Artifical - AI Agent USA - Agencias creacion Agentes IA en Republica Dominicana - Agencias creacion Agentes IA en México",
      htmlAttrs: {
        lang: "es",
      },

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Automatiza con IA tus chats de WhatsApp Business con Wafidely: conecta sin límites números de WhatsApp, centraliza mensajes y asigna chats a colaboradores"
        },
        { name: "format-detection", content: "telephone=no" },
        {
          name: "keywords",
          content: "Agentes de IA - Sistemas Salas de respuestas automáticas en WhatsApp Business - Landing Page Automática - Recordatorio de tareas y citas en WhatsApp - Respuestas automáticas de Facebook Messanger, Email y WhatsApp"
        }
      ],

      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' }
      ],
      
      script: [
        {
          src: "https://www.paypal.com/sdk/js?client-id=test&currency=USD",
          async: true,
        },
      ],
    },
  },

  // Sitemap configuration
  sitemap: {
    hostname: "https://wafidely.com",
    gzip: true,
    routes: async () => {
      // Rutas estáticas
      const staticRoutes = [
        {
          url: "/",
          changefreq: "daily",
          priority: 1.0,
          lastmod: new Date()
        },
        {
          url: "/ai",
          changefreq: "monthly",
          priority: 0.8,
          lastmod: new Date()
        },
        {
          url: "/caracteristicas",
          changefreq: "weekly",
          priority: 0.9,
          lastmod: new Date()
        },
        {
          url: "/testimonios",
          changefreq: "monthly",
          priority: 0.7,
          lastmod: new Date()
        },
        {
          url: "/precios",
          changefreq: "daily",
          priority: 0.8,
          lastmod: new Date()
        }
      ]
      
      // Rutas dinámicas (ejemplo)
      let dynamicRoutes = []
      try {
        // Si tienes una API para blog posts
        // const posts = await $fetch("https://tu-api.com/posts")
        // dynamicRoutes = posts.map(post => ({
        //   url: `/blog/${post.slug}`,
        //   changefreq: "weekly",
        //   priority: 0.6,
        //   lastmod: new Date(post.updatedAt)
        // }))
      } catch (error) {
        console.log("Error fetching dynamic routes for sitemap:", error)
      }
      
      return [...staticRoutes, ...dynamicRoutes]
    },
    defaults: {
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date()
    }
  },

  robots: {
    UserAgent: "*",
    Allow: "/",
    Disallow: [
      "/admin/",
      "/private/",
      "/_nuxt/",
      "/api/",
      "/*.json$"
    ],
    Sitemap: "https://wafidely.com/sitemap.xml",
    CrawlDelay: 1
  },

  runtimeConfig: {

    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    public: {
      baseURL: process.env.STRAPI_URL || "http://localhost:1337",
      MAILTO: process.env.MAILTO || "websecuador.net@gmail.com",
      pagomedioToken: process.env.PAGOMEDIO_TOKEN,
      gtmContainerId: process.env.NUXT_PUBLIC_GTM_CONTAINER_ID,
      
      GOOGLE_MAPS_API: 'AIzaSyAMQ-DzRcCKRrOWJWjPkPSTUHqwyQkyVH8',
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      googleRedirectUri: process.env.GOOGLE_REDIRECT_URI
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/reset.css",
    "~/assets/css/global.css", 
    "~/assets/css/main.css",
    "~/assets/css/calendar-override.css",
    "~/assets/scss/_swiper.scss"
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    "~/plugins/toastification.client.ts"
    // "~/plugins/pinia-persist.client.ts", 
    // "@/plugins/vue-google-map.client.ts",
  ],

  components: true,

  modules: [
    "@pinia/nuxt",
    "@sidebase/nuxt-pdf", 
    "nuxt-proxy",
    "nuxt-swiper"
  ],

  swiper: {
    // Configuración de swiper aquí si es necesaria
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