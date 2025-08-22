<template>
  <div class="bg-gray-50 overflow-x-hidden">
    <!-- Header Component -->
    <UiHeader />

    <!-- Hero Section -->
    <section class="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <!-- Background overlay for better contrast -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-green-900/80 to-blue-900/90"></div>
      
      <!-- Animated background elements -->
      <div class="absolute inset-0 hero-animated-bg"></div>
      
      <!-- Floating geometric elements -->
      <div class="absolute top-20 left-10 animate-float">
        <div class="w-6 h-6 bg-white rounded-full opacity-60 shadow-lg"></div>
      </div>
      <div class="absolute top-40 right-20 animate-float" style="animation-delay: 0.5s;">
        <div class="w-8 h-8 bg-green-400 rounded-full opacity-70 shadow-lg"></div>
      </div>
      <div class="absolute bottom-40 left-20 animate-float" style="animation-delay: 1s;">
        <div class="w-4 h-4 bg-blue-400 rounded-full opacity-60 shadow-lg"></div>
      </div>
      <div class="absolute top-60 right-10 animate-float" style="animation-delay: 1.5s;">
        <div class="w-5 h-5 bg-purple-400 rounded-full opacity-50 shadow-lg"></div>
      </div>
      
      <!-- Main content -->
      <div class="container mx-auto px-4 py-20 text-center relative z-10">
        <div class="max-w-5xl mx-auto animate-slide-up">
          <!-- Badge with better visibility -->
          <div class="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30 shadow-lg">
            <span class="text-white text-sm font-semibold drop-shadow-sm">🚀 Nuevo: IA Conversacional Avanzada</span>
          </div>
          
          <!-- Main Headline with text shadow for better readability -->
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight drop-shadow-lg">
            Automatiza tu <span class="text-green-400 drop-shadow-md">WhatsApp Business</span><br>
            con <span class="text-blue-400 drop-shadow-md">Inteligencia Artificial</span>
          </h1>
          
          <!-- Subheadline with better contrast -->
          <p class="text-xl md:text-3xl text-gray-100 mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Aumenta tus ventas hasta <strong class="text-yellow-400 text-2xl md:text-4xl">7x</strong> con bots inteligentes que responden como humanos, 
            gestionan citas automáticamente y convierten visitantes en clientes 24/7.
          </p>
          
          <!-- CTA Buttons with enhanced design -->
          <div class="flex -space-x-3 flex-col sm:flex-row items-center justify-center gap-6 my-11">
            <button 
              @click="startFreeTrial"
              class="group bg-white text-gray-900 px-7 py-2 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto border-2 border-transparent hover:border-green-400"
            >
              <span class="group-hover:text-green-600 transition-colors">🎯 Comenzar Prueba Gratis</span>
            </button>
       
          </div>
          
          <!-- Social Proof with improved styling -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-10 text-white">
            <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div class="flex -space-x-3">
                <div class="w-10 h-10 bg-green-500 rounded-full border-3 border-white shadow-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src="~/assets/images/logoamc1.png" 
                    alt="Logo" 
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div class="w-10 h-10 bg-blue-500 rounded-full border-3 border-white shadow-lg">
                  <img 
                    src="~/assets/images/logonazcar1.png" 
                    alt="Logo" 
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div class="w-10 h-10 bg-purple-500 rounded-full border-3 border-white shadow-lg">
                  <img 
                    src="~/assets/images/logoamazing1.png" 
                    alt="Logo" 
                    class="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <span class="text-lg font-semibold drop-shadow-sm">+200 empresas confían en nosotros</span>
            </div>
            <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div class="flex text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>
              <span class="text-lg font-semibold drop-shadow-sm">4.9/5 en valoraciones</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div class="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="(stat, index) in heroStats" :key="index" class="animate-fade-in">
            <div class="text-4xl font-bold gradient-text mb-2">{{ stat.value }}</div>
            <p class="text-gray-600">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem/Solution Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ¿Te resulta familiar esta situación?
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Miles de empresas pierden ventas diariamente por no poder atender WhatsApp 24/7
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <!-- Problems -->
            <div class="space-y-6">
              <h3 class="text-2xl font-bold text-red-600 mb-6">❌ Sin Wafidely AI</h3>
              <div class="space-y-4">
                <div 
                  v-for="problem in problems" 
                  :key="problem.id"
                  class="flex items-start gap-4 p-4 bg-red-50 rounded-lg border border-red-200"
                >
                  <div class="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 class="font-semibold text-red-800">{{ problem.title }}</h4>
                    <p class="text-red-600 text-sm">{{ problem.description }}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Solutions -->
            <div class="space-y-6">
              <h3 class="text-2xl font-bold text-green-600 mb-6">✅ Con Wafidely AI</h3>
              <div class="space-y-4">
                <div 
                  v-for="solution in solutions" 
                  :key="solution.id"
                  class="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200"
                >
                  <div class="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 class="font-semibold text-green-800">{{ solution.title }}</h4>
                    <p class="text-green-600 text-sm">{{ solution.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Características que <span class="gradient-text">Revolucionan</span> tu Negocio
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnología de vanguardia diseñada para maximizar tus conversiones y automatizar completamente tu WhatsApp Business
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <!-- Main Features -->
          <div 
            v-for="feature in mainFeatures" 
            :key="feature.id"
            class="p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-100 border-green-200"
          >
            <div class="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path :d="feature.iconPath"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">{{ feature.title }}</h3>
            <p class="text-gray-600 mb-6 text-center">{{ feature.description }}</p>
            <ul class="space-y-2 text-sm text-gray-600">
              <li v-for="benefit in feature.benefits" :key="benefit" class="flex items-center gap-2">
                <span class="text-green-600">✓</span>
                {{ benefit }}
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Additional Features Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="extraFeature in extraFeatures" 
            :key="extraFeature.id"
            class="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl">{{ extraFeature.emoji }}</span>
            </div>
            <h4 class="font-semibold text-gray-800 mb-2">{{ extraFeature.title }}</h4>
            <p class="text-sm text-gray-600">{{ extraFeature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Demo Video Section -->
    <section class="py-20 gradient-bg">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Ve Wafidely AI en Acción
          </h2>
          <p class="text-xl text-green-100 mb-12">
            Recorrido de nuestro administrador de integración de Whatsapp Business 
          </p>
          
  <!-- Video Placeholder -->
  <div class="relative bg-white bg-opacity-10 rounded-2xl p-8 backdrop-filter backdrop-blur-lg">
    <div class="aspect-video bg-gray-800 rounded-xl relative overflow-hidden">
      <video 
        ref="demoVideo"
        class="w-full h-full object-cover rounded-xl"
        controls
        preload="metadata"
        @loadeddata="setupVideo"
        @play="onPlay"
        @seeked="onSeeked"
      >
        <source src="https://video-websecua.s3.us-east-2.amazonaws.com/ia+video+wafidely.mp4" type="video/mp4">
        Tu navegador no soporta el elemento video.
      </video>
    </div>
    <p class="text-white mt-4 text-sm opacity-90">
      📹 Demo de 6 minutos: Pasos para integrar WhatsApp Business con IA, creación embudo de ventas y recordatorio de citas
    </p>
  </div>
          
          <!-- Video Stats -->
          <div class="grid grid-cols-3 gap-8 mt-12 text-white">
            <div>
              <div class="text-3xl font-bold mb-2">+235%</div>
              <p class="text-green-100">Aumento en leads</p>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">6 min</div>
              <p class="text-green-100">Tiempo de integración</p>
            </div>
            <div>
              <div class="text-3xl font-bold mb-2">0$</div>
              <p class="text-green-100">Soporte</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Lo que Dicen Nuestros <span class="gradient-text">Clientes</span>
          </h2>
          <p class="text-xl text-gray-600">
            Más de 200 empresas confían en Wafidely AI para automatizar sus ventas
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Testimonials -->
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.id"
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold">{{ testimonial.initials }}</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-600">{{ testimonial.position }}</p>
              </div>
            </div>
            <div class="flex text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
            <p class="text-gray-700 mb-6">"{{ testimonial.quote }}"</p>
            <div class="p-4 bg-green-50 rounded-lg">
              <p class="text-sm font-semibold text-green-600">{{ testimonial.result }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Planes que se Adaptan a tu <span class="gradient-text">Crecimiento</span>
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            Comienza gratis y escala según tus necesidades. Sin sorpresas, sin compromisos largos.
          </p>
          
          <!-- Pricing Toggle -->
          <div class="flex items-center justify-center gap-4 mb-12">
            <span class="text-gray-600">Mensual</span>
            <div class="relative">
              <input 
                type="checkbox" 
                id="pricing-toggle" 
                v-model="isAnnual"
                class="sr-only"
              />
              <label for="pricing-toggle" class="block w-14 h-8 bg-gray-300 rounded-full cursor-pointer relative">
                <div 
                  class="absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 transform"
                  :class="isAnnual ? 'translate-x-6' : ''"
                ></div>
              </label>
            </div>
            <span class="text-green-600 font-semibold">Anual (2 meses gratis)</span>
          </div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Pricing Plans -->
          <div 
            v-for="plan in pricingPlans" 
            :key="plan.id"
            class="p-8 rounded-2xl border hover:shadow-lg transition-shadow duration-300 relative"
            :class="plan.popular ? 'border-2 border-green-600 shadow-glow bg-white' : 'bg-gray-50 border-gray-200'"
          >
            <!-- Popular Badge -->
            <div v-if="plan.popular" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🔥 Más Popular
              </span>
            </div>
            
            <!-- SECCIÓN DE PRECIOS ACTUALIZADA CON DESCUENTO -->
            <div class="text-center mb-8">
              <h3 class="text-xl font-bold text-gray-800 mb-2">{{ plan.name }}</h3>
              <p class="text-gray-600 mb-6">{{ plan.description }}</p>
              
              <!-- Precio original tachado (solo si hay descuento) -->
              <div v-if="hasDiscount(plan)" class="mb-1">
                <span class="text-xl text-gray-400 line-through">
                  ${{ getOriginalPrice(plan) }}
                </span>
              </div>
              
              <!-- Precio con descuento o precio normal -->
              <div class="text-4xl font-bold mb-2" :class="getPriceColor(plan)">
                ${{ getDisplayPrice(plan) }}
              </div>
              
              <!-- Badge de descuento -->
              <div v-if="hasDiscount(plan)" class="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                {{ getDiscountPercentage(plan) }}% OFF
              </div>
              
              <p class="text-gray-600">{{ isAnnual ? 'Por año' : 'Por mes' }}</p>
            </div>
            
            <ul class="space-y-3 mb-8">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-3">
                <span class="text-green-600">✓</span>
                <span class="text-gray-700">{{ feature }}</span>
              </li>
            </ul>
            
            <button 
              @click="subscribe(plan)"
              class="w-full py-2 rounded-lg font-semibold transition-colors"
              :class="plan.popular ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
            >
              {{ plan.buttonText }}
            </button>
          </div>
        </div>
        
        <!-- Money Back Guarantee -->
        <div class="text-center mt-12">
          <div class="inline-flex items-center gap-3 bg-green-50 px-6 py-4 rounded-full border border-green-200">
            <span class="text-2xl">🛡️</span>
            <span class="text-green-600 font-semibold">Nuestra garantía es la prueba del demo GRATIS de 5 dias sin tarjeta de crédito</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Preguntas Frecuentes
            </h2>
            <p class="text-xl text-gray-600">
              Resolvemos tus dudas más comunes sobre Wafidely AI
            </p>
          </div>
          
          <div class="space-y-4">
            <!-- FAQ Items -->
            <div 
              v-for="faq in faqs" 
              :key="faq.id"
              class="bg-white rounded-lg border border-gray-200"
            >
              <button 
                @click="toggleFAQ(faq.id)"
                class="w-full text-left py-[1px] px-[13px] focus:outline-none"
              >
                <div class="flex items-center justify-between">
                  <h3 class="text-sm md:text-lg font-semibold text-gray-800 ">{{ faq.question }}</h3>
                  <svg 
                    class="w-5 h-9 text-gray-500 transform transition-transform"
                    :class="faq.isOpen ? 'rotate-180' : ''"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2"
              >
                <div v-if="faq.isOpen" class="p-6 pt-0 py-[30px]">
                  <p class="text-sm md:text-base text-gray-600 py-[30px]" >{{ faq.answer }}</p>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-20 gradient-bg text-white">
      <div class="container mx-auto px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 !text-white">
            ¿Listo para Multiplicar tus Ventas?
          </h2>
          <p class="text-xl md:text-2xl text-green-100 mb-8">
            Únete a más de 200 empresas que ya automatizaron su WhatsApp Business con IA
          </p>
          
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              @click="startFreeTrial"
              class="bg-white text-green-600 px-8 py-2 rounded-xl font-bold text-lg shadow-glow hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              🚀 Empezar Prueba Gratuita
            </button>
            <button 
              @click="contactExpert"
              class="border-2 border-white text-white px-8 py-2 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 w-full sm:w-auto"
            >
              ⏱️ Agenda una reunión GRATIS
            </button>
          </div>
          
          <!-- Trust Indicators -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-8 text-green-100 mb-12">
            <div class="flex items-center gap-2">
              <span class="text-lg">✅</span>
              <span>5 días gratis</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-lg">✅</span>
              <span>Sin tarjeta de crédito</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-lg">✅</span>
              <span>Instalación gratuita en la nube</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-lg">✅</span>
              <span>Soporte 24/7 en Whatsapp</span>
            </div>
          </div>
          
          <!-- Urgency Element -->
          <div class="bg-white bg-opacity-10 rounded-xl p-6 backdrop-filter backdrop-blur-lg">
            <p class="text-lg font-semibold mb-2">⏰ Oferta Limitada</p>
            <p class="text-green-100">Los 3 planes incluye por mes 37.000 a 57.000 conversaciones de entrada y salida con Open AI </p>
            <div class="mt-4 text-2xl font-bold">⏱️ {{ remainingSpots }} cupos restantes</div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <ui-footer></ui-footer> 
</template>

<script setup lang="ts">
// SEO y Meta tags optimizados para Nuxt 3
useSeoMeta({
  title: 'Wafidely AI - Automatiza tu WhatsApp Business con Inteligencia Artificial',
  ogTitle: 'Wafidely AI - Automatiza tu WhatsApp Business con IA',
  description: 'Aumenta tus ventas hasta 7x con Wafidely AI. Automatización completa de WhatsApp Business, bots inteligentes, IA conversacional y gestión de clientes 24/7. Prueba gratis.',
  ogDescription: 'Aumenta tus ventas hasta 7x con automatización inteligente de WhatsApp Business. Bots con IA, respuestas automáticas y gestión completa de clientes.',
  ogImage: '/images/wafidely-ai-og.jpg',
  ogUrl: 'https://www.wafidely.com/ai',
  twitterTitle: 'Wafidely AI - Automatiza tu WhatsApp Business con IA',
  twitterDescription: 'Aumenta tus ventas hasta 7x con automatización inteligente de WhatsApp Business.',
  twitterImage: '/images/wafidely-ai-twitter.jpg',
  twitterCard: 'summary_large_image'
})

useHead({
  htmlAttrs: {
    lang: 'es'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://www.wafidely.com/ai'
    }
  ]
})

const demoVideo = ref(null)
const hasStartedPlaying = ref(false)
const isInitialSetup = ref(true)

const setupVideo = () => {
  if (demoVideo.value && isInitialSetup.value) {
    // Usar un timeout para asegurar que el video esté completamente cargado
    setTimeout(() => {
      if (demoVideo.value) {
        demoVideo.value.currentTime = 3 // Establecer en 3 segundos (0:03)
        demoVideo.value.pause()
      }
    }, 100)
  }
}

const onSeeked = () => {
  // Asegurar que se pause después de buscar la posición inicial
  if (isInitialSetup.value && demoVideo.value) {
    demoVideo.value.pause()
    isInitialSetup.value = false
  }
}

const onPlay = () => {
  if (demoVideo.value && !hasStartedPlaying.value) {
    // Primera vez que presionan play - reiniciar desde el segundo 0
    hasStartedPlaying.value = true
    demoVideo.value.currentTime = 0
  }
}

// Reactive variables
const isAnnual = ref(false)
const remainingSpots = ref(87)

const subscribe = (plan: PricingPlan) => {
  const url = `https://ai.wafidely.com/register?plan=${plan.id}&name=${encodeURIComponent(plan.name)}&price=${plan.descountPrice}`
  navigateTo(url, { 
    external: true,
    open: {
      target: '_blank'
    }
  })
}

// MÉTODOS PARA MANEJAR PRECIOS CON DESCUENTO
const hasDiscount = (plan: PricingPlan) => {
  if (isAnnual.value) {
    // Para planes anuales, siempre hay descuento (2 meses gratis)
    return true
  } else {
    // Para planes mensuales, verificar si hay descountPrice
    return plan.descountPrice && plan.descountPrice < plan.monthlyPrice
  }
}

const getOriginalPrice = (plan: PricingPlan) => {
  if (isAnnual.value) {
    // Precio original anual sería 12 meses del precio mensual
    return plan.monthlyPrice * 12
  } else {
    return plan.monthlyPrice
  }
}

const getDisplayPrice = (plan: PricingPlan) => {
  if (isAnnual.value) {
    // Para anual, mostrar el precio anual (que incluye 2 meses gratis)
    return plan.annualPrice
  } else {
    // Para mensual, mostrar descuentPrice si existe, sino monthlyPrice
    if (plan.descountPrice && plan.descountPrice < plan.monthlyPrice) {
      return plan.descountPrice
    }
    return plan.monthlyPrice
  }
}

const getPriceColor = (plan: PricingPlan) => {
  if (plan.popular) return 'text-green-600'
  if (hasDiscount(plan)) return 'text-green-600'
  return 'text-gray-800'
}

const getDiscountPercentage = (plan: PricingPlan) => {
  if (!hasDiscount(plan)) return 0
  
  const originalPrice = getOriginalPrice(plan)
  const displayPrice = getDisplayPrice(plan)
  return Math.round(((originalPrice - displayPrice) / originalPrice) * 100)
}

const getDiscountText = (plan: PricingPlan) => {
  if (isAnnual.value) {
    return '2 meses GRATIS'
  } else {
    return `${getDiscountPercentage(plan)}% OFF`
  }
}

// Data arrays con tipado TypeScript
interface Problem {
  id: number
  title: string
  description: string
}

interface Solution {
  id: number
  title: string
  description: string
}

interface MainFeature {
  id: number
  title: string
  description: string
  iconPath: string
  benefits: string[]
}

interface ExtraFeature {
  id: number
  title: string
  description: string
  emoji: string
}

interface Testimonial {
  id: number
  name: string
  position: string
  initials: string
  quote: string
  result: string
}

interface PricingPlan {
  id: number
  name: string
  description: string
  monthlyPrice: number
  descountPrice: number
  annualPrice: number
  popular: boolean
  buttonText: string
  features: string[]
}

interface FAQ {
  id: number
  question: string
  answer: string
  isOpen: boolean
}

const problems = ref<Problem[]>([
  {
    id: 1,
    title: 'Respuestas lentas o perdidas',
    description: 'Los clientes esperan respuestas inmediatas, pero tu equipo no puede estar disponible 24/7'
  },
  {
    id: 2,
    title: 'Gestión manual abrumadora',
    description: 'Responder cada mensaje individualmente consume tiempo y recursos valiosos'
  },
  {
    id: 3,
    title: 'Ventas perdidas',
    description: 'Clientes interesados se van a la competencia por falta de atención inmediata'
  }
])

const solutions = ref<Solution[]>([
  {
    id: 1,
    title: 'Respuestas instantáneas con IA',
    description: 'Bots inteligentes responden en segundos, las 24 horas del día, los 7 días de la semana'
  },
  {
    id: 2,
    title: 'Automatización completa',
    description: 'Gestiona miles de conversaciones simultáneamente sin intervención manual'
  },
  {
    id: 3,
    title: 'Conversiones maximizadas',
    description: 'Cada visitante se convierte en oportunidad de venta con seguimiento automático'
  }
])

const mainFeatures = ref<MainFeature[]>([
  {
    id: 1,
    title: 'IA Conversacional Avanzada',
    description: 'Chatbots que entienden contexto y responden como humanos usando tecnología GPT',
    iconPath: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
    benefits: [
      'Comprensión de lenguaje natural',
      'Respuestas contextualmente relevantes',
      'Aprendizaje continuo'
    ]
  },
  {
    id: 2,
    title: 'Automatización Completa',
    description: 'Flujos de trabajo automáticos que manejan todo el ciclo de ventas sin intervención',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    benefits: [
      'Segmentación automática de leads',
      'Seguimiento personalizado',
      'Recuperación de contactos no atendidos'
    ]
  },
  {
    id: 3,
    title: 'Analytics Inteligentes',
    description: 'Métricas detalladas y insights accionables para optimizar tu estrategia',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    benefits: [
      'Dashboards en tiempo real',
      'ROI tracking avanzado',
      'Estado de consumo tokens de IA'
    ]
  }
])

const extraFeatures = ref<ExtraFeature[]>([
  {
    id: 1,
    title: 'Lead Scoring IA',
    description: 'Prioriza automáticamente los leads con mayor potencial',
    emoji: '🎯'
  },
  {
    id: 2,
    title: 'Integración CRM',
    description: 'Sincroniza con tus herramientas favoritas automáticamente',
    emoji: '🔄'
  },
  {
    id: 3,
    title: 'Agendamiento IA',
    description: 'Programa citas automáticamente según disponibilidad',
    emoji: '📅'
  },
  {
    id: 4,
    title: 'Multi-idioma',
    description: 'Atiende clientes en más de 3 idiomas automáticamente',
    emoji: '🌍'
  }
])

const testimonials = ref<Testimonial[]>([
  {
    id: 1,
    name: 'Raquel Cevallos',
    position: 'CEO, Nazcar Rent a Car',
    initials: 'RC',
    quote: 'Wafidely AI transformó completamente nuestro negocio. En solo 2 meses aumentamos nuestras ventas un 200% y ahora atendemos clientes 24/7 sin esfuerzo adicional en renta de autos.',
    result: 'Resultado: +200% en ventas'
  },
  {
    id: 2,
    name: 'Hugo Moncayo',
    position: 'Director, Pet Vetsgoo',
    initials: 'HM',
    quote: 'La automatización de Wafidely nos permite recordar a pacientes cientos de consultas de citas médicas. Nuestro equipo se enfoca en mantener la agenda llena de pacientes sin ausencia.',
    result: 'Resultado: 80% menos ausencia'
  },
  {
    id: 3,
    name: 'Ana García',
    position: 'Fundadora, Clínica Dental Moderna',
    initials: 'AG',
    quote: 'El agendamiento automático de citas cambió nuestras vidas. Los pacientes pueden agendar 24/7 y nosotros confirmamos automáticamente. ¡Increíble!',
    result: 'Resultado: +310% citas agendadas'
  }
])

const pricingPlans = ref<PricingPlan[]>([
  {
    id: 1,
    name: 'WAPyme',
    description: 'Perfecto para probar la automatización',
    descountPrice: 69,
    monthlyPrice: 89,
    annualPrice: 690,
    popular: false,
    buttonText: 'Comenzar Gratis 5 dias',
    features: [
      'Recordatorio automático Citas Whatsapp hasta 100 (Envío - Respuesta Api Oficial Wafidely)',
      'Constructor de Flujo de Bot con Qr Whatsapp Business o Api Whatsapp',
      'Página de Aterrizaje con agendamiento de citas en calendario (Lo generas de manera automática)',
      'Reporte de citas confirmadas y canceladas',
      'Creación de Prompts para Bot en Whatsapp hasta 140 conversaciones x mes',
      '17000 - 20000 Token de respuestas con IA (Open IA)',
      'Envío de campañas a Whatsapp hasta 500 contactos, se recomienda enviar por hora de 250 a 280 contactos para no ser baneado el número de whatsapp'
    ]
  },
  {
    id: 2,
    name: 'WAMedium',
    description: 'Para empresas en crecimiento',
    descountPrice: 99,
    monthlyPrice: 119,
    annualPrice: 990,
    popular: true,
    buttonText: 'Empezar',
    features: [
      'Recordatorio automático Citas Whatsapp hasta 300 (Envío - Respuesta Api Oficial Wafidely)',
      'Constructor de Flujo de Bot con Qr Whatsapp Business o Api Whatsapp',
      'Página de Aterrizaje con agendamiento de citas en calendario (Lo generas de manera automática)',
      'Reporte de citas confirmadas y canceladas',
      'Creación de Prompts para Bot en Whatsapp hasta 350 conversaciones x mes',
      '20000 - 29000 Token de respuestas con IA (Open IA)',
      'Envío de campañas a Whatsapp hasta 1000 contactos, se recomienda enviar por hora de 250 a 280 contactos para no ser baneado el número de whatsapp'
    ]
  },
  {
    id: 3,
    name: 'WALarge',
    description: 'Para empresas grandes',
    descountPrice: 199,
    monthlyPrice: 279,
    annualPrice: 1990,
    popular: false,
    buttonText: 'Empezar',
    features: [
      'Recordatorio automático Citas Whatsapp hasta 1000 (Envío - Respuesta Api Oficial Wafidely)',
      'Constructor de Flujo de Bot con Qr Whatsapp Business o Api Whatsapp',
      'Página de Aterrizaje con agendamiento de citas en calendario (Lo generas de manera automática)',
      'Reporte de citas confirmadas y canceladas',
      'Creación de Prompts para Bot en Whatsapp hasta 720 conversaciones x mes',
      '29000 - 67000 Token de respuestas con IA (Open IA)',
      'Envío de campañas a Whatsapp hasta 5000 contactos, se recomienda enviar por hora de 250 a 280 contactos para no ser baneado el número de whatsapp'
    ]
  }
])

const faqs = ref<FAQ[]>([
  {
    id: 1,
    question: '¿Qué tan difícil es configurar Wafidely AI?',
    answer: 'Súper fácil. Nuestro asistente de configuración te guía paso a paso y puedes tener tu primer bot funcionando en menos de 10 minutos. Además, nuestro equipo te ayuda gratuitamente con la configuración inicial.',
    isOpen: false
  },
  {
    id: 2,
    question: '¿Funciona con mi WhatsApp Business actual?',
    answer: '¡Absolutamente! Wafidely AI se integra perfectamente con tu cuenta de WhatsApp Business existente. No necesitas cambiar números ni perder tu historial de conversaciones.',
    isOpen: false
  },
  {
    id: 3,
    question: '¿Qué pasa si mis clientes se dan cuenta que es un bot?',
    answer: 'Nuestros bots con IA son tan naturales que el 95% de los clientes no notan la diferencia. Y si necesitan atención humana, el bot transfiere automáticamente la conversación a tu equipo.',
    isOpen: false
  },
  {
    id: 4,
    question: '¿Cuánto tiempo toma ver resultados?',
    answer: 'Nuestros clientes típicamente ven un aumento en leads del 130-300% en las primeras 2 semanas. Los resultados de ventas suelen verse entre 15-30 días después de la implementación.',
    isOpen: false
  },
  {
    id: 5,
    question: '¿Puedo cancelar cuando quiera?',
    answer: 'Por supuesto. No hay contratos largos ni penalizaciones. Puedes cancelar tu suscripción en cualquier momento desde tu panel de control con un solo clic.',
    isOpen: false
  }
])

// Methods
const startFreeTrial = async () => {
  try {
    window.open('https://ai.wafidely.com/register', '_blank')
  } catch (error) {
    console.log('Iniciando prueba gratuita...', error)
  }
}

const watchDemo = () => {
  console.log('Abriendo demo video...')
}

const playVideo = () => {
  console.log('Reproduciendo demo video...')
}

const contactExpert = async () => {
  try {
    window.open('https://wafidely.com/aiembudo/689370f31ba36e68f0bae824/', '_blank')
  } catch (error) {
    console.log('Contactando experto...', error)
  }
}

const selectPlan = (plan: PricingPlan) => {
  console.log('Plan seleccionado:', plan.name)
  if (plan.name === 'Enterprise') {
    contactExpert()
  } else {
    startFreeTrial()
  }
}

const toggleFAQ = (faqId: number) => {
  const faq = faqs.value.find(f => f.id === faqId)
  if (faq) {
    faq.isOpen = !faq.isOpen
  }
}

// Computed properties
const heroStats = computed(() => [
  { value: '98%', label: 'Tasa de apertura' },
  { value: '7x', label: 'Aumento en ventas' },
  { value: '24/7', label: 'Atención automática' },
  { value: '70%', label: 'Recuperación de interesados' }
])

// Lifecycle - simular countdown
onMounted(() => {
  if (process.client) {
    const interval = setInterval(() => {
      if (remainingSpots.value > 10) {
        remainingSpots.value -= Math.floor(Math.random() * 2) + 1
      }
    }, 30000)

    onUnmounted(() => {
      clearInterval(interval)
    })
  }
})
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(135deg, #25D366 0%, #2563EB 50%, #7C3AED 100%);
}

.gradient-text {
  background: linear-gradient(135deg, #25D366 0%, #2563EB 50%, #7C3AED 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.shadow-glow {
  box-shadow: 0 0 30px rgba(37, 211, 102, 0.3);
}

.hero-pattern {
  background-image: radial-gradient(circle at 25% 25%, rgba(37, 211, 102, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(37, 99, 235, 0.1) 0%, transparent 50%);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounceGentle 2s ease-in-out infinite;
}

@keyframes bounceGentle {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

@keyframes bounce-gentle {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.animate-bounce-gentle {
  animation: bounce-gentle 2s ease-in-out infinite;
}

.focus\:ring-2:focus {
  outline: 2px solid #25D366;
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .hero-pattern {
    background-size: 200% 200%;
  }
  
  .scroll-indicator {
    bottom: 20px;
  }
}

* {
  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #25D366;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1ea854;
}
</style>