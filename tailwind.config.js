/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '600px',
      md: '950px',
      lg: '1200px',
      xl: '1500px'
    },
    extend: {
      spacing: {
        normal: '1.5rem'
      },
      keyframes: {
        load: {
          '0%': { gridRow: `span 4 / span 16` }
        }
      }
    },
    plugins: []
  }
}
