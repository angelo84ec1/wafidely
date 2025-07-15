
/** @type {import('tailwindcss').Config} */

import animations from '@midudev/tailwind-animations'

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
    
  ],

  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },
      borderRadius: {
        '4xl': '0.5rem',
      },

      screens: {
        
        'pho': '362px',
        
        'mini': '400px',
        
        'micro': '418px',
        
        'mob': '500px',

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'tab': '850px',
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desk': '1100px',
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },

      keyframes: {
      


        spin: {
          '0%' : { content:'marketing' },
         ' 20%' : { content:'content' },
         ' 40% ' :{ content:'engineering' },
          '60%' : { content:'crypto' },
          '80%' : { content:'consulting' },
          '100%' :{ content:'business' },
      },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },

      width: {
        '7/10': '70%', // Define la clase personalizada para el 70% de ancho
      },
      
      animation: {
        'spin-slow': 'spin 3s linear infinite',
       
      },
    colors: {
      'primary': '#00f800',
      'secondary': '#000000',
      'accent': '#4f4f4f',
      'tercery': '#f3f1f6',
    },

    },
  },

  variants: {
    fill: [],
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  },


  plugins: [
    animations,
    require('flowbite/plugin'),
    require('tailwindcss-animate'),
    require('tailwindcss-animated'),
    require("flowbite/plugin")
    
   
  ],
}
