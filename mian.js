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
    likes: 3,
    popular: true,
  },
  {
    id: 8,
    color_1: "F6FFDE",
    color_2: "E3F2C1",
    color_3: "C9DBB2",
    color_4: "AAC8A7",
    timer: "Yesterday",
    likes: 3,
    popular: true,
  },
  {
    id: 9,
    color_1: "8B1874",
    color_2: "D14D72",
    color_3: "B71375",
    color_4: "F79540",
    timer: "2 weeks",
    likes: 3,
    popular: false,
  },
];

//Selected all Element
const popularPalette = colors.filter((color) => color?.popular === true);
const newEl=document.querySelector(".section--new");
const popEl=document.querySelector(".section--popular")
const containerPalettes = [...document.querySelectorAll(".color-palette")];
const btnLinkPages = document.querySelectorAll("li.btn--link__page");
const CONTAINER__MAIN__PAGE = document.querySelectorAll(".container-main__palettes");
const COLLECTION__USER__LOVE = document.querySelector(".collection--user__love");


function createPalette (color, wrapper) {
  const html = `
  <div  class="container--pallete__color  container--pallete__color-${color.id} relative w-full  h-0  pb-[120%]">
  <div class="pallete--color grid grid-5 w-full text-white absolute  h-[80%] top-0 rounded-[1rem] overflow-hidden grid-temp pallete--color__1" data-id="1">
      <div style="background:#${color.color_1};" class="container-color relative cursor-pointer">
          <button type="button" class="btn btn--copy__color w-max  absolute opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.25)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_1}">#${color.color_1}</button>
      </div>
      <div style="background:#${color.color_2};" class="container-color relative cursor-pointer">
          <button type="button" class="btn btn--copy__color  w-max  absolute opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.25)] duration-150 rounded-t-md   px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_2}">#${color.color_2}</button>
      </div>
      <div style="background:#${color.color_3};" class="container-color cursor-pointer">
          <button type="button" class="btn btn--copy__color   w-max  absolute opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.25)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_3}">#${color.color_3}</button>
      </div>
      <div style="background:#${color.color_4};" class="container-color cursor-pointer">
          <button type="button" class="btn btn--copy__color w-max  absolute opacity-0 bottom-0  hover:bg-[rgba(0,0,0,.25)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_4}">#${color.color_4}</button>
      </div>
  </div>
  <div class="flex container--btn__pallete justify-between absolute bottom-0 w-full gap-3 items-center my-[1rem]">
      <button type="button" class="btn   btn-like btn-like__${color.id}  flex items-center gap-2 border-[.1rem] px-[1rem] py-[.5rem] rounded-[1.2rem] hover:bg-[rgba(0,0,0,.01)] duration-150 border-gray-200" data-id="${color.id}" data-liked="false">
        <span><svg class="stroke-[2rem]  stroke-black text-transparent w-[2rem] h-[2rem]"><use href="./img/icon.svg#heart3"></use></svg></span>
        <span id="like-count" class="linke-count">${color.likes}</span>
      </button>
      <p class="text-[1.3rem] text-gray-500">${color.timer}</p>
  </div>
</div>`;

  wrapper.insertAdjacentHTML("beforeend", html);
  
};

function createSamllPallete(id) {
  const html = `<div style="width:6rem;height:6rem;border-radius:5px;" class="pallete--color hover relative grid-5 cursor-pointer group parent rounded-[.4rem] w-[6rem] h-[6rem]  overflow-hidden grid-temp small--palettes-${id}" data-id="${id}">
  <div style="background:#${
    colors[id - 1].color_1
  }" class="container-color cursor-pointer"></div>
  <div style="background:#${
    colors[id - 1].color_2
  }" class="container-color cursor-pointer"></div>
  <div style="background:#${
    colors[id - 1].color_3
  }" class="container-color cursor-pointer"></div>
  <div style="background:#${
    colors[id - 1].color_4
  }" class="container-color cursor-pointer"></div>
  <button style="position:absolute;top:3px;right:3px;border-radius:50%;background:rgba(0,0,0,.6)" type="button" class="group-hover:flex absolute remove-item  duration-150 hidden w-[1.5rem] top-[3px] child right-[3px] h-[1.5rem] rounded-full bg-[rgba(0,0,0,.7)] text-white  items-center justify-center" data-id="${
    id 
  }">
      <svg  style="width:.7rem;height:.7rem;" class=" w-[2px] h-[2px]"><use href="./img/icon.svg#time"></use></svg>
  </button>
</div>`;
  COLLECTION__USER__LOVE.insertAdjacentHTML("beforeend", html);
  const removeItem=[...document.querySelectorAll(".remove-item")];
  removeItem.map(rm=>{
    rm?.addEventListener("click",function(){
      rm?.parentElement.remove();
     removeChild(newEl,this)
      removeElement(popEl,this)
    })
  })
}
function removeChild(parent,wrapper){
 wrapper.querySelector(`.btn-like__${+btn.dataset.id}`).classList.remove("active");
}




// RENDER PALETTES IN MANIN--1 
colors.forEach((color) =>{
  createPalette(color,newEl)
  newEl.querySelectorAll(".container--pallete__color").forEach(c=>c.classList.add("translate-y-0"))
}
);

// RENDER PALETTES IN MANIN--1 *FAVORITE*
popularPalette.forEach((color) =>createPalette(color,popEl));


const allPalettes=[...newEl.querySelectorAll(".container--pallete__color")]
const copyText=[...newEl.querySelectorAll(".btn--copy__color")];

copyText.map(copy=>{
  copy.addEventListener("click",function(){
    navigator.clipboard.writeText(this.textContent.slice(1))
    this.textContent="Copied";
   setTimeout(()=>this.textContent=this.dataset.color,400)
  
  })
  
  setTimeout(copy)
})

// const observe=new IntersectionObserver(enteries=>{
//    const [entery]=enteries;
//    console.log(entery.target);
//     if(entery.intersectionRatio <.01)entery.target.style.opacity='.1';
//     else entery.target.style.opacity=1;
  
// })
// console.log(allPalettes);
// allPalettes.map(el=>observe.observe(el))



newEl.querySelectorAll(".btn-like").forEach(btn=>{
  btn.addEventListener("click",function(e){
   if(!btn.classList.contains("active")){
    console.log(this.dataset.id);
     createSamllPallete(+btn.dataset.id)
    btn.classList.add("active") }
   else{
    document.querySelector(`.small--palettes-${+this.dataset.id}`).remove()
    btn.classList.remove("active") 
  }
  })
})


popEl.querySelectorAll(".btn-like").forEach(btn=>{
  btn.addEventListener("click",function(e){
   if(!btn.classList.contains("active")){
    createSamllPallete(+btn.dataset.id)
    btn.classList.add("active")
   }
   else{
    document.querySelector(`.small--palettes-${+this.dataset.id}`)?.remove()
    btn.classList.remove("active") ;
    newEl?.querySelector(`.btn-like__${this.dataset.id}`).classList.remove("active");
  }
  
  })
})

btnLinkPages.forEach(function(btn) {
  let list;
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let content=this.dataset.content;
    console.log(document.querySelector(`.container-main__palettes .section--${content}`));

   
    btnLinkPages.forEach(btn=>btn?.classList.remove("active"));
    containerPalettes.forEach(el=>el.classList.add("hidden-el"));
    console.log(this.dataset.content);
    document.querySelector(`.section--${this.dataset.content}`).remove("hidden-el");
    // document.querySelector(`.container-main__palettes .section--${this.dataset.content}`);
    
;
      console.log(document.querySelector(`.container-main__palettes .section--${content}`));
 
    // this.classList.add("active")
    // const activePage = document.querySelector(
    //   `.section--${this.dataset.content}`
    // );
    // switch (this.dataset.content) {
    //     case "new":
    //     containerPalettes.map((c) => c.classList?.add("hidden-el"));
    //     activePage.classList.remove("hidden-el");
    //     activePage.classList.add("transition-opacity")
    //     list=[...popEl.querySelectorAll("button.btn-like.active")].map(btn=>btn.dataset.id)
    //     list.map(li=>{
    //       newEl.querySelector(`.btn-like__${li}`)?.classList?.add("active");
    //     })
    //     break;
    //     case "popular":
    //     containerPalettes.map((c) => c.classList?.add("hidden-el"));
    //     [...popEl.querySelectorAll("button.btn-like.active")].map(btn=>btn.classList.remove("active"))
    //     activePage.classList.remove("hidden-el");
    //     activePage.classList.add("transition-opacity")
    //     list=[...newEl.querySelectorAll("button.btn-like.active")].map(btn=>btn.dataset.id)
    //     list.map(li=>{
    //       popEl.querySelector(`.btn-like__${li}`)?.classList.add("active");
    //     })
    //     break;
    // }



  });
});
let timed;
 
 
 
 

function loadActivePallete(){

timed=setInterval(()=>{
    let collectionActive=[...COLLECTION__USER__LOVE.querySelectorAll(".pallete--color")];
    
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
   
     createSamllPallete(li)
    popEl.querySelector(`.btn-like__${li}`)?.classList?.add("active");
    newEl.querySelector(`.btn-like__${li}`)?.classList?.add("active");
   })
  
  
  
})
 


const createTemp=[...document.querySelectorAll(".create--temp")]
 
 


 
 
// this.style.background=color.css())
// createTemp[0].addEventListener("click",function(){ cj.on("change", color => this.style.background=color.css())})
// createTemp[1].addEventListener("click",function(){ cj.on("change", color => this.style.background=color.css())})
// createTemp[2].addEventListener("click",function(){ cj.on("change", color => this.style.background=color.css())})
// createTemp[3].addEventListener("click",function(){ cj.on("change", color => this.style.background=color.css())})

createTemp.map(temp=>{
  temp.addEventListener("click",function(e){
   document.querySelector(".inputColor")?.remove()
   const inputColor=document.createElement("input");
   inputColor.type = 'color';
   inputColor.classList.add("inputColor","transition-opacity");
   inputColor.value=temp.dataset.color;
   document.querySelector(".container--picker").appendChild(inputColor)
   inputColor.addEventListener("input",function(){
    temp.style.background=this.value;
    temp.dataset.color=this.value
   })
   
  
  })
})


function hiddenElement(className,el){
  document.body.addEventListener("click",function(e){
    if(!e.target.closest(`.${className}`))el.style.opacity="0" 
  })
}

 
 