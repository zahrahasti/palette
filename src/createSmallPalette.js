import {paletteCollection,trendingPalette,containerSelectedColor,selectedPalette} from "../script.js";
export function createSamllPallete(color) {
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
    <button type="button" class="remove-item remove-item-${color.id} btn-small" data-id="${
    color.id
    }">
        <svg class="w-[.7rem] h-[.7rem] text-white"><use href="./img/icon.svg#time"></use></svg>
    </button>
    <div  class="w-[5rem] top-[7rem] h-[2.5rem] animate-[fadeAndTranslate_1.8s_ease_forwards] rounded-[.4rem] text-[1.2rem] grid place-content-center text-white bg-black  z-20 absolute">Saved
    <span class="border-r-[.7rem] border-l-[.7rem] w-0 h-0 border-b-[.7rem] border-r-transparent border-l-transparent border-b-black absolute -top-[.5rem] left-3"></span> 
    </div>
  </div>`;
  selectedPalette.insertAdjacentHTML("afterbegin",html); 
  // selectedPalette.innerHTML+=html;
    const removeItem=[...document.querySelectorAll(".remove-item")];
    removeItem.map(rm=>{
      rm?.addEventListener("click",function(){
        rm.closest(".pallete--color").classList.add("animate-[scaleAndFade_.3s_forwards]")
        setTimeout(()=>{rm?.parentElement.remove()},250);
      })
    })
  }
   
  // REMOVE active class
  function removeClassActive(parent,btn){
    parent.querySelector(`.btn-like__${btn.dataset.id}`)?.classList.remove("active");
    decreaseCounterLike(parent,btn.dataset.id);
  }

  function removeActiveSelectedPalette(wrapper){
    if(wrapper.innerHTML!==""){
      wrapper.querySelector('[data-target="like"]')?.classList.remove("active")
      wrapper.querySelector(".like-counter").textContent--;
     }
  }
  function decreaseCounterLike(wrapper,counter){
    console.log(counter);
    if( wrapper.querySelector(`.btn-like__${counter}`))
    wrapper.querySelector(`.btn-like__${counter}`).querySelector(".like-counter").textContent--;
  }
   