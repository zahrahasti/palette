
import {formatTimeDifference} from "./formarDate.js"
export function createPalette(colors,parent,type){
    let child2,child1;
    colors.map(color=>{
      const div=document.createElement("div");
      div.classList.add("container--pallete__color","relative","w-full","scale-[.85]","sm:scale-100");
      child1=`
      <div style="background:#${color.color_1}" class="pallete--color  grid grid-rows-16 w-full  text-[1.6rem] md:text-[1.4rem] xl:text-[1.5rem] text-white  bg-[#${color.color_1}] aspect-square top-0 rounded-[1rem] overflow-hidden  pallete--color__1" data-id="${color.id}">
          <div style="background:#${color.color_1};" class="container-color group row-[span_5_/_span_16]  flex rounded-tr-[1rem]  rounded-tl-[1rem] cursor-pointer">
              <button type="button" class="btn btn--copy__color w-max group-hover:opacity-100  self-end opacity-0 hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_1}">#${color.color_1}</button>
          </div>
          <div style="background:#${color.color_2};" class="container-color group row-[span_4_/_span_16] flex animate-[translateUp_1.5s_ease_forwards] cursor-pointer">
              <button type="button" class="btn btn--copy__color  w-max group-hover:opacity-100 opacity-0  self-end hover:bg-[rgba(0,0,0,.2)] duration-150 rounded-t-md   px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_2}">#${color.color_2}</button>
          </div>
          <div style="background:#${color.color_3};" class="container-color group row-[span_3_/_span_16] animate-[translateUp_1.5s_ease_forwards] flex cursor-pointer">
              <button type="button" class="btn btn--copy__color w-max group-hover:opacity-100 opacity-0 hover:bg-[rgba(0,0,0,.2)] duration-150 self-end rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_3}">#${color.color_3}</button>
          </div>
          <div style="background:#${color.color_4};" class="container-color group row-[span_2_/_span_16] animate-[translateUp_1.5s_ease_forwards] flex cursor-pointer">
              <button type="button" class="btn btn--copy__color w-max group-hover:opacity-100 opacity-0 hover:bg-[rgba(0,0,0,.2)] duration-150 self-end rounded-t-md  px-[1rem] bg-[rgba(0,0,0,.15)]" data-color="#${color.color_4}">#${color.color_4}</button>
          </div>
      </div>
      `
      if(type==="palette")child2=`
      <div class="flex container--btn__pallete container--main__btn justify-between w-full gap-3 items-center my-[1rem]">
      <button type="button" class="btn btn-like text-[1.8rem]  md:text-[1.6rem] sm:text-[1.4rem] btn-like__${color.id} btn-custom" data-id="${color.id}" data-liked="false">
        <span><svg class="stroke-[1rem]  stroke-black text-transparent w-[2rem] h-[2rem]"><use href="./img/icon.svg#heart3"></use></svg></span>
        <span id="like-count" class="like-counter">${color.likes}</span>
      </button>
      <time class="text-[1.4rem] md:text-[1.2rem] text-gray-500">${formatTimeDifference(new Date(color.timer),new Date())}</time>
     </div>
      `
      if(type==="liked"){
      child2=`
      <div class="flex container--btn__pallete container--main__btn justify-between  mt-9 w-full gap-3 items-center my-[1rem]">
      <button type="button" class="btn active btn-like text-[1.8rem]  md:text-[1.6rem] sm:text-[1.4rem] btn-like__${color.id} btn-custom" data-id="${color.id}" data-liked="false">
        <span><svg class="stroke-[1rem]  stroke-black text-transparent w-[2rem] h-[2rem]"><use href="./img/icon.svg#heart3"></use></svg></span>
        <span id="like-count" class="like-counter">Liked</span>
      </button>
      <time class="text-[1.4rem] md:text-[1.2rem] text-gray-500">${formatTimeDifference(new Date(color.timer),new Date())}</time>
     </div>
      `
      };
      if(type==="clicked"){
        div.classList.remove("w-full","scale-[.85]","sm:scale-100")
        div.classList.add("palette-color__container")
        child2=`
             <div class="flex container--btn__pallete container--main__btn justify-between  mt-9 w-full gap-3 items-center my-[1rem]">
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
                <time class="text-[1.4rem] md:text-[1.2rem] text-gray-500">${formatTimeDifference(new Date(color.timer),new Date())}</time>
            </div>
    <div>
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
  </div> `
     }
      div.innerHTML+=child1;
      div.innerHTML+=child2;
      parent.appendChild(div);
  })
  }
   