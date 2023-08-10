"use strict";
 
const colors =
[
  {
      "name": "blue",
      "id": "111",
      "color_1": "1D5D9B",
      "color_2": "75C2F6",
      "color_3": "7895CB",
      "color_4": "FBEEAC",
      "timer": "2022/3/4",
      "likes": "333",
      "popular": true
  },
  {
      "name": "blue",
      "id": "222",
      "color_1": "4FC0D0",
      "color_2": "75C2F6",
      "color_3": "E2F6CA",
      "color_4": "F8FDCF",
      "timer": "2023/3/5",
      "likes": 353,
      "popular": true
  },
  {
      "name": "blue",
      "id": "333",
      "color_1": "0E2954",
      "color_2": "1F6E8C",
      "color_3": "2E8A99",
      "color_4": "84A7A1",
      "timer": "2021/7/5",
      "likes": 666,
      "popular": true
  },
  {
      "name": "blue",
      "id": "444",
      "color_1": "11009E",
      "color_2": "4942E4",
      "color_3": "8696FE",
      "color_4": "C4B0FF",
      "timer": "2023/1/5",
      "likes": 434,
      "popular": true
  },
  {
      "name": "green",
      "id": "566",
      "color_1": "98EECC",
      "color_2": "D0F5BE",
      "color_3": "FBFFDC",
      "color_4": "A4907C",
      "timer": "2023/5/5",
      "likes": 53,
      "popular": true
  },
  {
      "name": "green",
      "id": "74412",
      "color_1": "533E85",
      "color_2": "488FB1",
      "color_3": "4FD3C4",
      "color_4": "C1F8CF",
      "timer": "2023/5/5",
      "likes": 83,
      "popular": true
  },
  {
      "name": "green",
      "id": "1455",
      "color_1": "CCFFBD",
      "color_2": "7ECA9C",
      "color_3": "40394A",
      "color_4": "1C1427",
      "timer": "2023/1/",
      "likes": 673,
      "popular": true
  },
  {
      "name": "red",
      "id": "122",
      "color_1": "F11A7B",
      "color_2": "982176",
      "color_3": "3E001F",
      "color_4": "FFE5AD",
      "timer": "2023/6/8",
      "likes": 53,
      "popular": true
  },
  {
      "name": "red",
      "id":"35555",
      "color_1": "DC0000",
      "color_2": "850000",
      "color_3": "FFDB89",
      "color_4": "FFF6C3",
      "timer": "2023/6/27",
      "likes": 78,
      "popular": false
  },
  {
      "name": "red",
      "id": "133",
      "color_1": "B70404",
      "color_2": "DB005B",
      "color_3": "F79327",
      "color_4": "FFE569",
      "timer": "2023/4/27",
      "likes": 90,
      "popular": true
  },
  {
      "name": "red",
      "id": "134",
      "color_1": "D61355",
      "color_2": "F94A29",
      "color_3": "FCE22A",
      "color_4": "DC0000",
      "timer": "2023/5/1",
      "likes": 455,
      "popular":false
  },
  {
      "name": "yellow",
      "id": "422",
      "color_1": "1A5D1A",
      "color_2": "F1C93B",
      "color_3": "7895CB",
      "color_4": "FAE392",
      "timer": "2021/11/4",
      "likes": 66,
      "popular": true
  },
  {
      "name": "yellow",
      "id": "432",
      "color_1": "22A699",
      "color_2": "898121",
      "color_3": "E7B10A",
      "color_4": "F7F1E5",
      "timer": "2023/5/4",
      "likes": 123,
      "popular": false
  },
  {
      "name": "yellow",
      "id": "433",
      "color_1": "22A699",
      "color_2": "898121",
      "color_3": "E7B10A",
      "color_4": "F7F1E5",
      "timer": "2023/5/4",
      "likes": 87,
      "popular": true
  },
  {
      "name": "yellow",
      "id": "576777",
      "color_1": "F6F1E9",
      "color_2": "FFD93D",
      "color_3": "FF8400",
      "color_4": "4F200D",
      "timer": "2023/5/4",
      "likes": 98,
      "popular":  false
  },
  {
      "name": "yellow",
      "id": "9898",
      "color_1": "FEFF86",
      "color_2": "898121",
      "color_3": "FFD966",
      "color_4": "DAF5FF",
      "timer": "2023/5/4",
      "likes": 98,
      "popular": true
  },
  {
      "name": "orange",
      "id": "522",
      "color_1": "525FE1",
      "color_2": "F86F03",
      "color_3": "FFA41B",
      "color_4": "FFF6F4",
      "timer": "2022/3/4",
      "likes": 122,
      "popular": false
  },
  {
      "name": "orange",
      "id": "533",
      "color_1": "F97B22",
      "color_2": "FEE8B0",
      "color_3": "9CA777",
      "color_4": "7C9070",
      "timer": "2022/3/4",
      "likes": 339,
      "popular": true
  },
  {
      "name": "orange",
      "id": "544",
      "color_1": "FFF2CC",
      "color_2": "FFD966",
      "color_3": "F4B183",
      "color_4": "DFA67B",
      "timer": "2022/3/4",
      "likes": 556,
      "popular": false
  },
  {
      "name": "brown",
      "id": "611",
      "color_1": "9E6F21",
      "color_2": "FFEEB3",
      "color_3": "B8E7E1",
      "color_4": "D4FAFC",
      "timer": "2020/3/4",
      "likes": 877,
      "popular": true
  },
  {
      "name": "brown",
      "id": "622",
      "color_1": "61481C",
      "color_2": "A47E3B",
      "color_3": "BF9742",
      "color_4": "E6B325",
      "timer": "2021/8/4",
      "likes": 322,
      "popular": false
  },
  {
      "name": "brown",
      "id": "633",
      "color_1": "FFCE45",
      "color_2": "D4AC2B",
      "color_3": "B05E27",
      "color_4": "7E370C",
      "timer": "2020/3/12",
      "likes": 111,
      "popular": true
  },
  {
      "name": "brown",
      "id": "644",
      "color_1": "FEF9D9",
      "color_2": "CE7D00",
      "color_3": "935900",
      "color_4": "5C3C10",
      "timer": "2022/3/4",
      "likes": 234,
      "popular": true
  },
  {
      "name": "purple",
      "id": "771",
      "color_1": "E0C97E",
      "color_2": "FCF8B3",
      "color_3": "FB9378",
      "color_4": "AB6088",
      "timer": "2023/3/4",
      "likes": 544,
      "popular":false
  },
  {
      "name": "brown",
      "id": "772",
      "color_1": "E5EDC4",
      "color_2": "E1A6E1",
      "color_3": "934662",
      "color_4": "463832",
      "timer": "2021/3/4",
      "likes": 566,
      "popular": false
  },
  {
      "name": "pink",
      "id": "871",
      "color_1": "F31559",
      "color_2": "FF52A2",
      "color_3": "FFB07F",
      "color_4": "FFECAF",
      "timer": "2023/3/4",
      "likes": 542,
      "popular": true
  },
  {
      "name": "pink",
      "id": "872",
      "color_1": "FFFAD7",
      "color_2": "FF2171",
      "color_3": "FF8E9E",
      "color_4": "DB005B",
      "timer": "2021/3/4",
      "likes": 332,
      "popular": true
  },
  {
      "name": "pink",
      "id": "873",
      "color_1": "FF55BB",
      "color_2": "FFD3A3",
      "color_3": "F48484",
      "color_4": "FCFFB2",
      "timer": "2023/3/4",
      "likes": 986,
      "popular": false
  },
  {
      "name": "pink",
      "id": "874",
      "color_1": "2A2F4F",
      "color_2": "FFD3A3",
      "color_3": "FCFFB2",
      "color_4": "E8D2A6",
      "timer": "2021/3/4",
      "likes": 435,
      "popular": true
  },
  {
      "name": "grey",
      "id": "991",
      "color_1": "EEE2DE",
      "color_2": "EA906C",
      "color_3": "B31312",
      "color_4": "2B2A4C",
      "timer": "2022/11/4",
      "likes": 43,
      "popular": false
  },
  {
      "name": "grey",
      "id": "992",
      "color_1": "27374D",
      "color_2": "526D82",
      "color_3": "9DB2BF",
      "color_4": "DDE6ED",
      "timer": "2021/12/4",
      "likes": 98,
      "popular":false
  },
  {
      "name": "grey",
      "id": "993",
      "color_1": "27374D",
      "color_2": "526D82",
      "color_3": "9DB2BF",
      "color_4": "DDE6ED",
      "timer": "2023/4/4",
      "likes": 67,
      "popular":false
  },
  {
      "name": "grey",
      "id": "15666",
      "color_1": "C4DFDF",
      "color_2": "E3F4F4",
      "color_3": "8294C4",
      "color_4": "FFEAD2",
      "timer": "2022/3/4",
      "likes": 65,
      "popular": false
  }
]
 
//Selected all Element
const popularColorPalette = colors.filter((color) => color?.popular === true);
const paletteCollection=document.querySelector(".section--new");
const trendingPalette=document.querySelector(".section--popular")
const containerPalettes = [...document.querySelectorAll(".container--color__palette")];
const btnLinkPages = document.querySelectorAll("li.btn--link__page");
const selectedPalette = document.querySelector(".collection--user__love");
const containerSelectedColor=document.querySelector(".container--selected__palette");
const containerTrendingColor=document.querySelector(".container--palette__liked")

function removeActiveSelectedPalette(){
  if(containerSelectedColor.innerHTML!==""){
    containerSelectedColor.querySelector('[data-target="like"]')?.classList.remove("active")
    containerSelectedColor.querySelector(".like-counter").textContent--;
   }
}
 

function createPalette(colors,parent,type){
  let child2,child3=``,child1;
 
  colors.map(color=>{
  
    const div=document.createElement("div");
    div.classList.add("container--pallete__color","relative","w-full","scale-[.85]","sm:scale-100","h-0","pb-[120%]");
    // div.setAttribute("data-id",`${color.id}`);
    // 1-5 5-9 9-13 13-16
    // container--pallete__color container--pallete__color-${color.id} relative scale-[.9]  sm:scale-90 w-[35rem] h-[42rem]" data-id="${color.id}"
    child1=`
    <div style="background:#${color.color_1}" class="pallete--color  grid grid-rows-16 w-full  text-[1.6rem] md:text-[1.4rem] xl:text-[1.5rem] text-white absolute bg-[#${color.color_1}] h-[80%] top-0 rounded-[1rem] overflow-hidden  pallete--color__1" data-id="${color.id}">
        <div style="background:#${color.color_1};" class="container-color group row-[span_6_/_span_16]    rounded-tr-[1rem]  rounded-tl-[1rem]  relative cursor-pointer">
            <button type="button" class="btn btn--copy__color w-max  absolute group-hover:opacity-100 opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_1}">#${color.color_1}</button>
        </div>
        <div style="background:#${color.color_2};" class="container-color group  row-[span_5_/_span_13] animate-[translateUp_1.5s_ease_forwards] relative cursor-pointer">
            <button type="button" class="btn btn--copy__color  w-max group-hover:opacity-100  absolute opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md   px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_2}">#${color.color_2}</button>
        </div>
        <div style="background:#${color.color_3};" class="container-color group row-[span_4_/_span_9] animate-[translateUp_1.5s_ease_forwards] cursor-pointer">
            <button type="button" class="btn btn--copy__color   w-max group-hover:opacity-100  absolute opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_3}">#${color.color_3}</button>
        </div>
        <div style="background:#${color.color_4};" class="container-color group row-[span_3_/_span_7] animate-[translateUp_1.5s_ease_forwards] cursor-pointer">
            <button type="button" class="btn btn--copy__color w-max  group-hover:opacity-100 absolute opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_4}">#${color.color_4}</button>
        </div>
    </div>
    `
    if(type==="palette")child2=`
    <div class="flex container--btn__pallete container--main__btn justify-between absolute bottom-0 w-full gap-3 items-center my-[1rem]">
    <button type="button" class="btn btn-like text-[1.8rem]  md:text-[1.6rem] sm:text-[1.4rem] btn-like__${color.id} btn-custom" data-id="${color.id}" data-liked="false">
      <span><svg class="stroke-[1rem]  stroke-black text-transparent w-[2rem] h-[2rem]"><use href="./img/icon.svg#heart3"></use></svg></span>
      <span id="like-count" class="like-counter">${color.likes}</span>
    </button>
    <p class="text-[1.4rem] md:text-[1.2rem] text-gray-500">${formatTimeDifference(new Date(color.timer),new Date())}</p>
   </div>
    `
    if(type==="liked"){
    child2=`
    <div class="flex container--btn__pallete container--main__btn justify-between absolute bottom-0 w-full gap-3 items-center my-[1rem]">
    <button type="button" class="btn active btn-like text-[1.8rem]  md:text-[1.6rem] sm:text-[1.4rem] btn-like__${color.id} btn-custom" data-id="${color.id}" data-liked="false">
      <span><svg class="stroke-[1rem]  stroke-black text-transparent w-[2rem] h-[2rem]"><use href="./img/icon.svg#heart3"></use></svg></span>
      <span id="like-count" class="like-counter">Liked</span>
    </button>
    <p class="text-[1.4rem] md:text-[1.2rem] text-gray-500">${formatTimeDifference(new Date(color.timer),new Date())}</p>
   </div>
    `
    };
    if(type==="clicked"){
      div.classList.remove("w-full","scale-[.85]","sm:scale-100","h-0","pb-[120%]");
      div.classList.add("scale-[.9]","sm:scale-90","w-[35rem]","h-[42rem]")
      child1=`
      <div style="background:#${color.color_1}" class="pallete--color palette-color__container  grid grid-rows-16  text-[1.6rem]  xl:text-[1.5rem] text-white w-[35rem] h-[35rem] bg-[#${color.color_1}]  rounded-[1rem] overflow-hidden  pallete--color__1" data-id="${color.id}">
              <div style="background:#${color.color_1};" class="container-color group row-[span_6_/_span_16] rounded-tr-[1rem]  rounded-tl-[1rem]  relative cursor-pointer">
                  <button type="button" class="btn btn--copy__color w-max  absolute group-hover:opacity-100 opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_1}" data-target="copy">#${color.color_1}</button>
              </div>
              <div style="background:#${color.color_2};" class="container-color group row-[span_5_/_span_16] animate-[translateUp_1.5s_ease_forwards] relative cursor-pointer">
                  <button type="button" class="btn btn--copy__color  w-max group-hover:opacity-100  absolute opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md   px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_2}"  data-target="copy">#${color.color_2}</button>
              </div>
              <div style="background:#${color.color_3};" class="container-color relative group row-[span_5_/_span_16] animate-[translateUp_1.5s_ease_forwards] cursor-pointer">
                  <button type="button" class="btn btn--copy__color   w-max group-hover:opacity-100  absolute opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_3}"  data-target="copy">#${color.color_3}</button>
              </div>
              <div style="background:#${color.color_4};" class="container-color relative group row-[span_4_/_span_16] animate-[translateUp_1.5s_ease_forwards] cursor-pointer">
                  <button type="button" class="btn btn--copy__color w-max  group-hover:opacity-100 absolute opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_4}"  data-target="copy">#${color.color_4}</button>
              </div>
          </div>
      `
         
      
      
      child2=`
          <div class="flex container--btn__pallete container--main__btn justify-between absolute bottom-0 w-full gap-3 items-center my-[1rem]">
   
              <button type="button" class="btn-container__palette btn-like text-[1.8rem]  md:text-[1.6rem] sm:text-[1.4rem] btn-like__${color.id} btn-custom" data-id="${color.id}" data-target="like">
                <span><svg class="stroke-[1rem]  stroke-black text-transparent w-[2rem] h-[2rem]"><use href="./img/icon.svg#heart3"></use></svg></span>
                <span id="like-count" class="like-counter">${color.likes}</span>
              </button>
              
               <button type="button" class="btn-container__palette btn--download__img text-[1.8rem]  md:text-[1.6rem] sm:text-[1.4rem] btn-like__${color.id} btn-custom" data-id="${color.id}" data-target="download">
                <span><svg class="w-[2rem] h-[2rem]"><use href="./img/icon.svg#download"></use></svg></span>
                <span>Image</span>
              </button>
              <button type="button" class="btn-container__palette btn-link text-[1.8rem]  md:text-[1.6rem] sm:text-[1.4rem] btn-like__${color.id} btn-custom" data-id="${color.id}" data-liked="false" data-target="link">
              <span><svg class="w-[2rem] h-[2rem]"><use href="./img/icon.svg#link"></use></svg></span>
              <span>Link</span>
            </button>
              <p class="text-[1.4rem] md:text-[1.2rem] text-gray-500">${formatTimeDifference(new Date(color.timer),new Date())}</p>
          </div>
    `
      child3=`
      
        <div class="scale-[.9]  sm:scale-90 w-[37rem] sm:w-[40rem]">
  <div class="flex justify-between items-center py-[1rem] border-b-[.1rem] border-b-gray-50">
      <span style="background-color: #${color.color_1};" class="block w-[3.5rem] h-[3.5rem] rounded-full bg-red-200"></span>
      <span style="background-color: #${color.color_2};"  class="block w-[3.5rem] h-[3.5rem] rounded-full bg-red-200"></span>
      <span style="background-color: #${color.color_3};"  class="block w-[3.5rem] h-[3.5rem] rounded-full bg-red-200"></span>
      <span style="background-color: #${color.color_4};"  class="block w-[3.5rem] h-[3.5rem] rounded-full bg-red-200"></span>
  </div>
  <div class="flex justify-between items-center text-[1.5rem] sm:text-[1.6rem] py-[2rem] border-b-[.1rem] border-b-gray-100">
      <p class="text-gray-600">#${color.color_1}</p>
      <p class="text-gray-600">#${color.color_2}</p>
      <p class="text-gray-600">#${color.color_3}</p>
      <p class="text-gray-600">#${color.color_4}</p>
  </div>
</div>
      
      `
   }
    div.innerHTML+=child1;
    div.innerHTML+=child2;
    
    parent.appendChild(div);
    parent.innerHTML+=child3
})
 
}
 






function renderColor(activePage){
  containerPalettes.map((c) => c.classList?.add("hide"));
  activePage.classList.remove("hide");
 
}
function incrementCounterLike(wrapper,counter){
  if(wrapper.querySelector(`.btn-like__${+counter}`))
  wrapper.querySelector(`.btn-like__${+counter}`).querySelector(".like-counter").textContent++;
}

function hideCollectionUserFavorite(section){
  if(section.dataset.content==="collection" || section.dataset.content==="create"){
  containerSelectedColor.classList.add("hidden")
    document.querySelector(".main--section__3").classList.add("hide")}
  else{
    containerSelectedColor.classList.remove("hidden")
    document.querySelector(".main--section__3").classList.remove("hide")}
}


// Used
function removeSmallActiveButton(btn){
  document.querySelector(`.small--palettes-${btn.dataset.id}`)?.remove()

}

function checkSmallButton(btn){
  if(btn.classList.contains("active")){
    const color=colors.find(color=>color.id===btn.dataset.id);
 
    createSamllPallete(color)
  
  }else removeSmallActiveButton(btn)
}
// Function to download the color palette
function downloadPalette(coloor) {
  // Create a new canvas element
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext('2d');

  // Set canvas dimensions based on the color palette size
  const paletteWidth = coloor.offsetWidth;
  const paletteHeight = coloor.offsetHeight;
  canvas.width = paletteWidth;
  canvas.height = paletteHeight;

  // Get the colors from the color palette
  const colorBoxes = coloor.getElementsByClassName('container-color');

  // Loop through the color boxes and draw them on the canvas
  let yPos = 0;
  for (let i = 0; i < colorBoxes.length; i++) {
    const colorBox = colorBoxes[i];
    const color = colorBox.style.backgroundColor;
    const boxHeight = colorBox.offsetHeight;

    // Draw the color box on the canvas
    ctx.fillStyle = color;
    ctx.fillRect(0, yPos, paletteWidth, boxHeight);

    // Increment the y-position for the next color box
    yPos += boxHeight;
  }

  // Convert the canvas content to a data URL
  const dataUrl = canvas.toDataURL('image/png');

  // Create a temporary anchor element
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = 'color-palette.png'; // Set the desired file name

  // Programmatically click the link to trigger the download
  link.click();
}
 
  
function createSamllPallete(color) {
 
  const html = `<div  class="pallete--color relative w-[7rem] h-[7rem] grid grid-rows-14 cursor-pointer  small--palettes-${color.id}" data-id="${color.id}">
  <div style="background:#${
    color.color_1
  };" class="container-color row-[span_6_/_span_16] rounded-t-[5px] cursor-pointer"></div>
  <div style="background:#${
    color.color_2
  }" class="container-color  row-[span_5_/_span_16] cursor-pointer"></div>
  <div style="background:#${
    color.color_3
  }" class="container-color row-[span_4_/_span_16] cursor-pointer"></div>
  <div style="background:#${
    color.color_4
  };" class="container-color row-[span_2_/_span_16] rounded-b-[5px] cursor-pointer"></div>
  <button type="button" class="remove-item btn-small" data-id="${
  color.id
  }">
      <svg class="w-[.7rem] h-[.7rem] text-white"><use href="./img/icon.svg#time"></use></svg>
  </button>
  <div  class="w-[5rem] top-[7rem] h-[2.5rem] animate-[fadeAndTranslate_1.8s_ease_forwards] rounded-[.4rem] text-[1.2rem] grid place-content-center text-white bg-black  z-20 absolute">Saved
  <span class="border-r-[.7rem] border-l-[.7rem] w-0 h-0 border-b-[.7rem] border-r-transparent border-l-transparent border-b-black absolute -top-[.5rem] left-3"></span>   
<div>
</div>`;
 
selectedPalette.innerHTML+=html;
  const removeItem=[...document.querySelectorAll(".remove-item")];
  removeItem.map(rm=>{
    rm?.addEventListener("click",function(){
      rm.closest(".pallete--color").classList.add("scale")
      setTimeout(()=>{rm?.parentElement.remove()},250);
      removeClassActive(paletteCollection,this)
      removeClassActive(trendingPalette,this)
      removeActiveSelectedPalette();
      
    })
  })
}
 
// REMOVE active class
function removeClassActive(parent,btn){
  parent.querySelector(`.btn-like__${btn.dataset.id}`)?.classList.remove("active");
  decreaseCounterLike(parent,btn.dataset.id);
}
function decreaseCounterLike(wrapper,counter){
  console.log(counter);
  if( wrapper.querySelector(`.btn-like__${counter}`))
  wrapper.querySelector(`.btn-like__${counter}`).querySelector(".like-counter").textContent--;
}
function addClassActive(parent,btn){
  parent.querySelector(`.btn-like__${+btn.dataset.id}`)?.classList.add("active");
  incrementCounterLike(parent,btn.dataset.id);
  // parent.querySelector(`.btn-like__${+btn.dataset.id}`).querySelector(".like-counter").textContent--;
}

 

// RENDER PALETTES IN MANIN--1 
createPalette(colors,paletteCollection,"palette")
createPalette(popularColorPalette,trendingPalette,"palette")
// RENDER PALETTES IN MANIN--1 *FAVORITE*
// popularColorPalette.forEach((color) =>createPalette(color,trendingPalette,"palette"));


const allPalettes=[...paletteCollection.querySelectorAll(".container--pallete__color")];
const containerColor=[...document.querySelectorAll(".container-color")];

containerColor.map(color=>{

  color.addEventListener("click",function(e){
    
    containerSelectedColor.innerHTML="";
    if(!e.target.classList.contains("btn")){
      
    const idColor=color.parentElement.dataset.id;
     
    const colorList=[colors.find(color=>color.id===idColor)];
    containerSelectedColor.innerHTML="";
    createPalette(colorList,containerSelectedColor,"clicked")
    copyTextColor(containerSelectedColor)

   const btnMain=color.closest(".container--pallete__color").querySelector(".btn-like");
   const btnSelectedUser=containerSelectedColor.querySelector("[data-target='like']");
   if(btnMain.classList.contains("active")){
   
     // Todo                                
     btnSelectedUser.classList.add("active");
     btnSelectedUser.querySelector(".like-counter").textContent++;
    
   }


     
    btnSelectedUser.addEventListener("click",function(){
      const id=this.dataset.id;
      if(this.classList.contains("active")){
    
       removeActive(id)
      selectedPalette.querySelector(`.small--palettes-${id}`).remove()
      }else {
        // this.classList.add("active")
        // this.querySelector(".like-counter").textContent++;
         addActive(id)
        const color=colors.find(color=>color.id===id)
        createSamllPallete(color)
      }
    })
    const containerSelectedButton=containerSelectedColor.querySelectorAll(".btn-container__palette"); 
    containerSelectedButton.forEach(function(btnSelect){
          btnSelect.addEventListener("click",function(){
            switch(this.dataset.target){
              case "download":
                const palette=containerSelectedColor.querySelector(".palette-color__container");
                downloadPalette(palette)
              break;
              case "copy":
                copyTextColor(parent);
                break;
}
          })
       
    }) 



}

  })
 
})



function copyTextColor(wrapper){
  const copyText=[...wrapper.querySelectorAll(".btn--copy__color")];

  copyText.map(copy=>{
    copy.addEventListener("click",function(){
      navigator.clipboard.writeText(this.textContent.slice(1))
      this.textContent="Copied";
     setTimeout(()=>this.textContent=this.dataset.color,400)
    
    })
  })
  
}

copyTextColor(paletteCollection);
copyTextColor(trendingPalette);


function toggleActiveButton(){
 
  const SelectedAll__btns=[...document.querySelectorAll(".btn-like")];
 
  
  SelectedAll__btns.map(btn=>btn.parentElement.parentElement.parentElement===paletteCollection ?
                                                parent=trendingPalette :
                                                parent=paletteCollection)
  
  SelectedAll__btns.map(function(btn){
   btn.addEventListener("click",function(e){
    const btnSame=[...document.querySelectorAll(`.btn-like__${this.dataset.id}`)];
    btnSame.map(function(btn){
      const btnText=btn.querySelectorAll('.like-counter');
      
     if(btn.classList.contains("active")){  
      btn.classList.remove("active")
      btnText.forEach(t=>t.textContent--)
      if(containerSelectedColor.innerHTML!=="")
      containerSelectedColor.querySelector('[data-target="like"]')?.classList.remove("active")
     }
     else {
       btn.classList.add("active");
       btnText.forEach(t=>t.textContent++)
     if(containerSelectedColor.innerHTML!=="")
     containerSelectedColor.querySelector('[data-target="like"]')?.classList.add("active")
     }
  
    })
   })
  })
  paletteCollection.querySelectorAll(".btn-like").forEach(btn=>btn.addEventListener("click",()=>checkSmallButton(btn)))
  trendingPalette.querySelectorAll(".btn-like").forEach(btn=>btn.addEventListener("click",()=>checkSmallButton(btn)))
   

}
toggleActiveButton()

btnLinkPages.forEach((btn) => {
  let list;
    btn.addEventListener("click", function () {
    btnLinkPages.forEach(btn=>btn?.classList.remove("active"));
    this.classList.add("active")
    const activePage = document.querySelector(`.section--${this.dataset.content}`);
    hideCollectionUserFavorite(this) 
    renderColor(activePage);
     if(activePage.classList.contains("section--collection")){
      containerTrendingColor.innerHTML=""
      
      let color=[...selectedPalette.querySelectorAll(".pallete--color")]
      .map(palette=>colors.filter(color=>color.id===palette.dataset.id)).flat();
      
      if(color.length){
        document.querySelector(".container--empty-palette").classList.add("hidden");
        createPalette(color,containerTrendingColor,"liked")
        const btnActive=containerTrendingColor.querySelectorAll(".btn-like");
       removeActiveWithAnimaton(btnActive)
      
      }
    }
        else   document.querySelector(".container--empty-palette").classList.remove("hidden");
  });
});
let timed;
 
 
 
function removeActiveWithAnimaton(btnActive){
  btnActive.forEach(btn=>{
    
    btn.addEventListener("click",function(e){
      const id=this.dataset.id
      btn.closest(".container--pallete__color").classList.add("scale");
      setTimeout(()=>{
      
        btn.closest(".container--pallete__color").remove()
     
        selectedPalette.querySelector(`.small--palettes-${id}`).remove()
        removeActive(id)
      
      },800)
    
    })
  })
} 

function loadActivePallete(){
timed=setInterval(()=>{
    let collectionActive=[...selectedPalette.querySelectorAll(".pallete--color")];
    
      if(collectionActive.length){

      localStorage.setItem("active", JSON.stringify(collectionActive.map(li=>li.dataset.id)));}

      if(collectionActive.length===0)
      localStorage.clear()
 
  },0)
  
}

function decreaseScaleElement(el){

}



const userSelected=[...document.querySelectorAll(".user--selected")];
const btnSubmitPalette=document.querySelector(".btn--submit__palette");
userSelected.map(selected=>{
  selected.addEventListener("click",function(e){
   document.querySelector(".inputColor")?.remove()
   const inputColor=document.createElement("input");
   inputColor.type = 'color';
   inputColor.classList.add("inputColor","opacity-effect");
   inputColor.value=selected.dataset.color;
   document.querySelector(".container--picker").appendChild(inputColor);

   inputColor.addEventListener("input",function(){
    selected.style.background=this.value;
    selected.dataset.color=this.value;
   })
   
  
  })
})

function hiddenElement(className,el){
  document.body.addEventListener("click",function(e){
 
    if(!e.target.closest(`.${className}`))el.classList.add("hidden") 
  })
}

hiddenElement("btn--open__menu",document.querySelector(".menu"))

document.querySelector(".btn--link__page").addEventListener("click",function(){
 
  document.querySelector(".menu").classList.toggle("hidden");
})
 
function formatTimeDifference(startDate, endDate) {
  const timeDifference = endDate - startDate; // Calculate time difference in milliseconds
  const diHours = Math.floor(timeDifference / (1000 * 60 * 60));

  let targetDate, numDate;

  if (diHours % 24 === 0) {
    targetDate = "day";
    numDate = diHours;
  } else if (diHours % 7 === 0) {
    targetDate = "week";
    numDate = Math.floor(diHours / 168);
  } else if (diHours % 30 === 0) {
    targetDate = "month";
    numDate = Math.floor(diHours / 720);
  } else {
    targetDate = "hour";
    numDate = diHours;
  }

  const formatter = new Intl.RelativeTimeFormat("en-US");
  const formattedDate = formatter.format(-numDate, targetDate);
  return formattedDate.split("").slice(0,-4).join("")
 }

formatTimeDifference(new Date("2000/2/6"),new Date("2000/3/1"));


window.addEventListener("load",function(){
  loadActivePallete()
  const userFavoriteItem =JSON.parse(localStorage.getItem("active"));
  
  if(userFavoriteItem?.length)
   userFavoriteItem.map(li=>{
    let list=[];
    const color=colors.find(color=>color.id===li);
    createSamllPallete(color);
    const id=color.id;
    addActive(id)
   })
})
 


function addActive(id){
  
  trendingPalette.querySelector(`.btn-like__${id}`)?.classList?.add("active");
  paletteCollection.querySelector(`.btn-like__${id}`)?.classList?.add("active");
  paletteCollection.querySelector(`.btn-like__${id}`).querySelector(".like-counter").textContent++
  trendingPalette.querySelector(`.btn-like__${id}`).querySelector(".like-counter").textContent++;
  const btnLike=containerSelectedColor.querySelector(".btn-like")
   if(btnLike){
    btnLike.classList.add("active")
    btnLike.querySelector(".like-counter").textContent++;
   }
}

function removeActive(id){
  
  trendingPalette.querySelector(`.btn-like__${id}`)?.classList?.remove("active");
  paletteCollection.querySelector(`.btn-like__${id}`)?.classList?.remove("active");
  paletteCollection.querySelector(`.btn-like__${id}`).querySelector(".like-counter").textContent--
  trendingPalette.querySelector(`.btn-like__${id}`).querySelector(".like-counter").textContent--
  const btnLike=containerSelectedColor.querySelector(".btn-like")
  if(btnLike){
   btnLike.classList.remove("active")
   btnLike.querySelector(".like-counter").textContent--;
  }
}