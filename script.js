"use strict";

const colors = [
  {
    id: 1,
    color_1: "FF55BB",
    color_2: "FFD3A3",
    color_3: "FCFFB2",
    color_4: "B6EAFA",
    timer: "Yesterday",
    likes: 123,
    popular: true,
  },
  {
    id: 2,
    color_1: "E5F9DB",
    color_2: "A0D8B3",
    color_3: "A2A378",
    color_4: "83764F",
    timer: "13 hours",
    likes: 13,
    popular: false,
  },
  {
    id: 3,
    color_1: "FFF7D4",
    color_2: "FFD95A",
    color_3: "A2A378",
    color_4: "C07F00",
    timer: "15 hours",
    likes: 53,
    popular: true,
  },
  {
    id: 4,
    color_1: "F6F1F1",
    color_2: "AFD3E2",
    color_3: "19A7CE",
    color_4: "146C94",
    timer: "11 hours",
    likes: 143,
    popular: false,
  },
  {
    id: 5,
    color_1: "9E6F21",
    color_2: "FFEEB3",
    color_3: "B8E7E1",
    color_4: "D4FAFC",
    timer: "3 weeks",
    likes: 3,
  },

  {
    id: 6,
    color_1: "BE5A83",
    color_2: "E06469",
    color_3: "F2B6A0",
    color_4: "DEDEA7",
    timer: "12 weeks",
    likes: 223,
    popular: true,
  },
  {
    id: 7,
    color_1: "FFF8D6",
    color_2: "F7E1AE",
    color_3: "A4D0A4",
    color_4: "617A55",
    timer: "13 days",
    likes:53,
    popular: true,
  },
  {
    id: 8,
    color_1: "F6FFDE",
    color_2: "E3F2C1",
    color_3: "C9DBB2",
    color_4: "AAC8A7",
    timer: "Yesterday",
    likes: 123,
    popular: true,
  },
  {
    id: 9,
    color_1: "8B1874",
    color_2: "D14D72",
    color_3: "B71375",
    color_4: "F79540",
    timer: "2 weeks",
    likes: 3443,
    popular: false,
  },
];

//Selected all Element
const popularColorPalette = colors.filter((color) => color?.popular === true);
const paletteCollection=document.querySelector(".section--new");
const trendingPalette=document.querySelector(".section--popular")
const containerPalettes = [...document.querySelectorAll(".container--color__palette")];
const btnLinkPages = document.querySelectorAll("li.btn--link__page");
const selectedPalette = document.querySelector(".collection--user__love");

function renderColor(activePage){
  containerPalettes.map((c) => c.classList?.add("hide"));
  activePage.classList.remove("hide");
 
}
function incrementCounterLike(wrapper,counter){
  if(wrapper.querySelector(`.btn-like__${+counter}`))
  wrapper.querySelector(`.btn-like__${+counter}`).querySelector(".like-counter").textContent++;
}

function decreaseCounterLike(wrapper,counter){
  if( wrapper.querySelector(`.btn-like__${+counter}`))
  wrapper.querySelector(`.btn-like__${+counter}`).querySelector(".like-counter").textContent--;
}
function addActiveButton(btn){
 createSamllPallete(+btn.dataset.id)
 btn.querySelector(".like-counter").textContent++;
 btn.classList.add("active") 
}
function removeActiveButton(btn){
  document.querySelector(`.small--palettes-${+btn.dataset.id}`).remove()
  btn.classList.remove("active") 
  btn.querySelector(".like-counter").textContent--;
}
function likedPalette(){
  
}

function createPalette (color, parent) {
  const html = `
  <div  class="container--pallete__color  container--pallete__color-${color.id} relative w-full  h-0  pb-[120%]">
  <div class="pallete--color grid grid-5 w-full text-white absolute  h-[80%] top-0 rounded-[1rem] overflow-hidden grid-temp pallete--color__1" data-id="1">
      <div style="background:#${color.color_1};" class="container-color translate-y  rounded-tr-[1rem]  rounded-tl-[1rem]  relative cursor-pointer">
          <button type="button" class="btn btn--copy__color w-max  absolute opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.25)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_1}">#${color.color_1}</button>
      </div>
      <div style="background:#${color.color_2};" class="container-color translate-y relative cursor-pointer">
          <button type="button" class="btn btn--copy__color  w-max  absolute opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.25)] duration-150 rounded-t-md   px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_2}">#${color.color_2}</button>
      </div>
      <div style="background:#${color.color_3};" class="container-color translate-y cursor-pointer">
          <button type="button" class="btn btn--copy__color   w-max  absolute opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.25)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_3}">#${color.color_3}</button>
      </div>
      <div style="background:#${color.color_4};" class="container-color translate-y cursor-pointer">
          <button type="button" class="btn btn--copy__color w-max  absolute opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.25)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_4}">#${color.color_4}</button>
      </div>
  </div>
  <div class="flex container--btn__pallete justify-between absolute bottom-0 w-full gap-3 items-center my-[1rem]">
      <button type="button" class="btn btn-like btn-like__${color.id} btn-custom" data-id="${color.id}" data-liked="false">
        <span><svg class="stroke-[1rem]  stroke-black text-transparent w-[2rem] h-[2rem]"><use href="./img/icon.svg#heart3"></use></svg></span>
        <span id="like-count" class="like-counter">${color.likes}</span>
      </button>
      <p class="text-[1.3rem] text-gray-500">${color.timer}</p>
  </div>
</div>`;

  parent.insertAdjacentHTML("beforeend", html);
  
};

function createSamllPallete(id) {
  const html = `<div style="width:7.2rem;height:7.2rem;border-radius:5px;" class="pallete--color relative grid-5 cursor-pointer grid-temp small--palettes-${id}" data-id="${id}">
  <div style="background:#${
    colors[id - 1].color_1
  };border-radius:5px 5px 0 0;" class="container-color cursor-pointer"></div>
  <div style="background:#${
    colors[id - 1].color_2
  }" class="container-color cursor-pointer"></div>
  <div style="background:#${
    colors[id - 1].color_3
  }" class="container-color cursor-pointer"></div>
  <div style="background:#${
    colors[id - 1].color_4
  };border-radius:0 0 5px 5px;" class="container-color cursor-pointer"></div>
  <button type="button" class="remove-item btn-small" data-id="${
    id 
  }">
      <svg  style="width:.7rem;height:.7rem;color:#fff;"><use href="./img/icon.svg#time"></use></svg>
  </button>
  <div style="top:7rem;"  class="w-[5rem] h-[2.5rem] tran2 rounded-[.4rem] text-[1.3rem] grid place-content-center text-white bg-black top-20 z-20 absolute">Saved
  <span class="border-r-[.7rem] border-l-[.7rem] w-0 h-0 border-b-[.7rem] border-r-transparent border-l-transparent border-b-black absolute -top-[.5rem] left-3"></span>   
<div>
</div>`;
selectedPalette.insertAdjacentHTML("beforeend", html);
  const removeItem=[...document.querySelectorAll(".remove-item")];
  removeItem.map(rm=>{
    rm?.addEventListener("click",function(){
      rm.parentElement.classList.add("tran")
      setTimeout(()=>{
       
        rm?.parentElement.remove()},300)
      removeClassActive(paletteCollection,this)
      removeClassActive(trendingPalette,this)
      
    })
  })
}

// REMOVE active class
function removeClassActive(parent,btn){
  parent.querySelector(`.btn-like__${+btn.dataset.id}`)?.classList.remove("active");
  decreaseCounterLike(parent,btn.dataset.id);
  // parent.querySelector(`.btn-like__${+btn.dataset.id}`).querySelector(".like-counter").textContent--;
}





// RENDER PALETTES IN MANIN--1 
colors.forEach((color) =>{
  createPalette(color,paletteCollection)
  paletteCollection.querySelectorAll(".container--pallete__color").forEach(c=>c.classList.add("translate-y-0"))
}
);

// RENDER PALETTES IN MANIN--1 *FAVORITE*
popularColorPalette.forEach((color) =>createPalette(color,trendingPalette));


const allPalettes=[...paletteCollection.querySelectorAll(".container--pallete__color")]
const copyText=[...paletteCollection.querySelectorAll(".btn--copy__color")];

copyText.map(copy=>{
  copy.addEventListener("click",function(){
    navigator.clipboard.writeText(this.textContent.slice(1))
    this.textContent="Copied";
   setTimeout(()=>this.textContent=this.dataset.color,400)
  
  })
  
  setTimeout(copy)
})

 

paletteCollection.querySelectorAll(".btn-like").forEach(btn=>{
  btn.addEventListener("click",function(e){

   if(!btn.classList.contains("active")){
    incrementCounterLike(trendingPalette,btn.dataset.id)

    addActiveButton(btn)}
  
   else{
    decreaseCounterLike(trendingPalette,btn.dataset.id);
    removeActiveButton(btn)}
  
  })
})


trendingPalette.querySelectorAll(".btn-like").forEach(btn=>{
  btn.addEventListener("click",function(e){

   if(!btn.classList.contains("active")){
    incrementCounterLike(paletteCollection,btn.dataset.id);
    addActiveButton(btn)
  }
   else{
    removeActiveButton(btn)
    paletteCollection?.querySelector(`.btn-like__${this.dataset.id}`).classList.remove("active");
    decreaseCounterLike(paletteCollection,btn.dataset.id)
  }
  
  })
})

btnLinkPages.forEach((btn) => {
  let list;
  btn.addEventListener("click", function () {
    btnLinkPages.forEach(btn=>btn?.classList.remove("active"));
    this.classList.add("active")
    const activePage = document.querySelector(`.section--${this.dataset.content}`);
    
     function  renderDetails (main1,main2,btn){
        list=[...main1.querySelectorAll("button.btn-like.active")].map(btn=>btn.dataset.id)
        list.map(li=>{
          main2.querySelector(`.btn-like__${li}`)?.classList?.add("active");
        })
     }

    renderColor(activePage)
    switch (this.dataset.content) {
        case "new":
        renderDetails(trendingPalette,paletteCollection,btn)
        break;
        case "popular":
        [...trendingPalette.querySelectorAll("button.btn-like.active")].map(btn=>btn.classList.remove("active"));
        renderDetails(paletteCollection,trendingPalette,btn)
        break;
        case "collection":
         list=[...selectedPalette.querySelectorAll(".pallete--color")];
         list.forEach(li=>{
          console.log(li.dataset.id);
          activePage.appendChild() 

         })
        break;

    }
  });
});
let timed;
 
 
 
 

function loadActivePallete(){

timed=setInterval(()=>{
    let collectionActive=[...selectedPalette.querySelectorAll(".pallete--color")];
    
      if(collectionActive.length)
      localStorage.setItem("active", JSON.stringify(collectionActive.map(li=>+li.dataset.id)));

      if(collectionActive.length===0)
      localStorage.clear()
 
  },0)
  
}
 


window.addEventListener("load",function(){
  loadActivePallete()
  const userFavoriteItem =JSON.parse(localStorage.getItem("active"));
  
  if(userFavoriteItem?.length)
   userFavoriteItem.map(li=>{
    createSamllPallete(li);
    trendingPalette.querySelector(`.btn-like__${li}`)?.classList?.add("active");
    paletteCollection.querySelector(`.btn-like__${li}`)?.classList?.add("active");
   incrementCounterLike(paletteCollection,li);
   incrementCounterLike(trendingPalette,li)
   
   })
  
  
  
})
 



const createTemp=[...document.querySelectorAll(".create--temp")]
createTemp.map(temp=>{
  temp.addEventListener("click",function(e){
   document.querySelector(".inputColor")?.remove()
   const inputColor=document.createElement("input");
   inputColor.type = 'color';
   inputColor.classList.add("inputColor","opacity-effect");
   inputColor.value=temp.dataset.color;
   document.querySelector(".container--picker").appendChild(inputColor);

   inputColor.addEventListener("input",function(){
    temp.style.background=this.value;
    temp.dataset.color=this.value;

   const buttonSubmit=document.createElement("button");
   buttonSubmit.textContent="Submit"

    document.querySelector(".container-btn").appendChild(buttonSubmit)
   })
   
  
  })
})


function hiddenElement(className,el){
  document.body.addEventListener("click",function(e){
    if(!e.target.closest(`.${className}`))el.style.opacity="0" 
  })
}

document.querySelector(".btn--link__page").addEventListener("click",function(){
  console.log();
  document.querySelector(".menu").classList.toggle("hidden");
})