<template>
  <footer class="footer">
    <!-- Figuras de fondo interactivas -->
    <div class="background-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-5"></div>
      <div class="shape shape-6"></div>
    </div>

    <div class="footer-content">
      <!-- Año a la izquierda -->
      <div class="footer-year">
        <p>© {{ currentYear }} - Desarrollado y mantenido por <a href="https://www.wappiad.com" target="_blank">WAPPIAD S.A.S.</a></p>
      </div>

      <!-- Logo y texto de respaldo AWS -->
      <div class="aws-section">
        <img
          src="~/assets/images/aws-svgrepo-com.png"
          alt="Logo AWS"
          class="aws-logo"
        />
        <span class="aws-text">Respaldado por AWS</span>
      </div>

      <!-- Iconos de redes sociales a la derecha -->
      <div class="social-icons">
        <a href="https://facebook.com/wappiad" class="social-link facebook" aria-label="Facebook" target="_blank">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a href="https://instagram.com/wappiad" class="social-link instagram" aria-label="Instagram" target="_blank">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/company/wappiad-s-a-s/" class="social-link linkedin" aria-label="LinkedIn" target="_blank">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
    </div>

        <!-- WhatsApp Floating Button -->
        <div class="whatsapp-float bottom-10 right-6 z-50">
      <button 
        @click="openWhatsApp"
        class="whatsapp-button shadow-glow animate-bounce-gentle text-white"
      >
        <svg class="w-9 h-9  " viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"></path>
        </svg>
      </button>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = {
  facebook: 'https://facebook.com/wappiad',
  instagram: 'https://instagram.com/wappiad',
  linkedin: 'https://www.linkedin.com/company/wappiad-s-a-s/'
}


const openWhatsApp = () => {
  if (process.client) {
    window.open('https://wa.me/593983314957?text=Hola%2C%20me%20interesa%20Wafidely%20AI%20mi%20nombre%20es%20:', '_blank')
  }
}
</script>

<style scoped>
.footer {
  position: relative;
  background-color: #eff2f5;
  padding: 2rem 0;
  margin-top: auto;
  overflow: hidden;
  min-height: 80px;
}

/* Figuras de fondo interactivas */
.background-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 80px;
  height: 80px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 60px;
  height: 60px;
  top: 20%;
  right: 15%;
  animation-delay: -2s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  bottom: 20%;
  left: 20%;
  animation-delay: -4s;
  border-radius: 20%;
}

.shape-4 {
  width: 40px;
  height: 40px;
  top: 60%;
  right: 30%;
  animation-delay: -1s;
}

.shape-5 {
  width: 70px;
  height: 70px;
  bottom: 30%;
  right: 10%;
  animation-delay: -3s;
  border-radius: 30%;
}

.shape-6 {
  width: 50px;
  height: 50px;
  top: 40%;
  left: 50%;
  animation-delay: -5s;
  transform: rotate(45deg);
  border-radius: 15%;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.3;
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
    opacity: 0.5;
  }
  66% {
    transform: translateY(10px) rotate(240deg);
    opacity: 0.2;
  }
}

/* Contenido del footer */
.footer-content {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.footer-year {
  flex: 1;
}

.footer-year p {
  color: #374151;
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0;
}

.aws-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.aws-logo {
  width: 48px;
  height: auto;
  transform: translateY(3px);
  filter: brightness(0.7);
  transition: filter 0.3s ease;
}

.aws-logo:hover {
  filter: brightness(1);
}

.aws-text {
  color: #6b7280;
  font-size: 0.875rem;
  font-weight: 500;
}

.social-icons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #6b7280;
  text-decoration: none;
  transition: all 0.3s ease;
  background-color: transparent;
}

.social-link:hover {
  transform: translateY(-2px);
}

.facebook:hover {
  color: #1877f2;
}

.instagram:hover {
  color: #e4405f;
}

.linkedin:hover {
  color: #0077b5;
}

.social-link svg {
  width: 20px;
  height: 20px;
  transition: all 0.3s ease;
}

.whatsapp-float {
            position: fixed;
        }
        
        .shadow-glow {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.4);
        }
        
        .animate-bounce-gentle {
            animation: bounce-gentle 2s infinite;
        }
        
        @keyframes bounce-gentle {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-10px);
            }
            60% {
                transform: translateY(-5px);
            }
        }


        /* Botón más redondo y con efecto hover mejorado */
        .whatsapp-button {
            background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            position: relative;
        }
        
        .whatsapp-button:hover {
            background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
            transform: scale(1.1) translateY(2px);
            box-shadow: 0 0 30px rgba(37, 211, 102, 0.6);
        }
        
        .whatsapp-button:hover svg {
            color: #f0f9ff;
            filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
        }
        
        .whatsapp-button:active {
            transform: scale(0.95);
        }
        
        .whatsapp-button svg {
            transition: all 0.3s ease;
        }

/* Responsive */
@media (max-width: 768px) {
  .footer {
    padding: 2rem 0;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
  
  .footer-year {
    flex: none;
    order: 1;
  }
  
  .aws-section {
    order: 2;
  }
  
  .social-icons {
    gap: 1.5rem;
    justify-content: center;
    order: 3;
  }
  
  .shape {
    display: none;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 0 1rem;
  }
  
  .aws-logo {
    width: 40px;
  }
  
  .aws-text {
    font-size: 0.8rem;
  }
  
  .social-icons {
    gap: 1rem;
  }
  
  .social-link {
    width: 35px;
    height: 35px;
  }
  
  .social-link svg {
    width: 18px;
    height: 18px;
  }
}

/* Efectos adicionales para interactividad */
@media (hover: hover) {
  .shape:hover {
    animation-duration: 2s;
    background: rgba(255, 255, 255, 0.08);
  }
}

/* Animación de entrada */
.footer-content {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>