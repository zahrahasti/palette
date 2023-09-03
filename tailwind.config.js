module.exports = {
  content: ["index.htm","./src/*.js","./*.js","./script.js","./createSmallPalette.js"],
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
        'fadeAndTranslate': {
          '0%' : { 
            transform:"translateY(-3rem)",
            opacity:1
           },
          '100%': { 
            transform: 'translateY(1rem)',
            opacity:0
          },
        },
        "scaleAndFade":{
          "0%":{
            scale:"1"
          },
          "100%":{
            scale:"0",
            display:"none"
          }
        }
      },
  }
  },
  plugins: [],
}