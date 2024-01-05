/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      "xs":"360px",
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '950px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1280px) { ... }
      "xl":"1500px"
    },
    extend: {
      keyframes: {
        "load":{
          '0%': { gridRow: `span 4 / span 16`}
        }
      },
  }
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};