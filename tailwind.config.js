/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    
    screens: {
      'mobile': '320px',
      // => @media (min-width: 428px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
    
      colors: {
        'primary': '#f0b500',
        'background-1': '#ffffff',
        'background-2': '#efeef2',
        'background-3': '#252525',
      },

      keyframes: {

        fadeIn: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },

        fadeOut: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '0' },
        },

      },

      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
      }

    },
  
  },

  plugins: [
    require('@tailwindcss/forms'),
  ],
}

