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
    },
    extend: {
      keyframes: {
         fadeAndTranslate: {
          '0%': { opacity: '1',
                 transform:"translateY(-1rem)"
           },
           '80%': { opacity: '1',
           transform:"translateY(0rem)"
          },
          '100%': { opacity: '0',
          transform:"translateY(0)",
          display:"none"
        },
        }
        ,
         fade:{
          "0%":{ opacity:"1"},
          "100%":{opacity:"0"}
         },
          translateUp:{
          "0%":{
            transform:"translateY(1.5rem)"
          },
          "100%":{
            transform:"translateY(0rem)"
          }
        }
      },
     
  }
  },
  plugins: [],
}