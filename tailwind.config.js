module.exports = {
  content: ["index.htm","./script.js"],
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
      maxWidth: {
        'xs': '20rem',  // Extra Small
        'sm': '30rem',  // Small
        'md': '40rem',  // Medium
        'lg': '50rem',  // Large
        'xl': '60rem',  // Extra Large
      },
  }
  },
  plugins: [],
}