"use strict";
import colors from "./colors.json" assert {type:"json"};
import {downloadPalette} from "./download-img.js";
import { copyTextColor } from "./copyText.js";
import {createPalette} from "./createEl.js";
import {checkSmallButton} from "./checkedActive.js"
import {createSamllPallete} from "./createSmallPalette.js";
import {userSelectedInput} from "./createColorInput.js";
import {hiddenElement} from "./hideEl.js"
const popularColorPalette = colors.filter((color) => color?.popular === true);
export const paletteCollection=document.querySelector(".section--new");
export const trendingPalette=document.querySelector(".section--popular")
const containerPalettes = [...document.querySelectorAll(".container--color__palette")];
const btnLinkPages = document.querySelectorAll("li.btn--link__page");
export const selectedPalette = document.querySelector(".collection--user__love");
export const containerSelectedColor=document.querySelector(".container--selected__palette");
const containerTrendingColor=document.querySelector(".container--palette__liked")
const userSelected=[...document.querySelectorAll(".user--selected")];
 

userSelectedInput(userSelected)





function renderColor(activePage){
  containerPalettes.map((c) => c.classList?.add("hide"));
  activePage.classList.remove("hide");
 
}
 

function hideCollectionUserFavorite(section){
  if(section.dataset.content==="collection" || section.dataset.content==="create"){
  containerSelectedColor.classList.add("hidden")
    document.querySelector(".main--section__3").classList.add("hide")}
  else{
    containerSelectedColor.classList.remove("hidden")
    document.querySelector(".main--section__3").classList.remove("hide")}
}
 
createPalette(colors,paletteCollection,"palette")
createPalette(popularColorPalette,trendingPalette,"palette")
 
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
  paletteCollection.querySelectorAll(".btn-like").forEach(btn=>btn.addEventListener("click",()=>checkSmallButton(btn,colors)))
  trendingPalette.querySelectorAll(".btn-like").forEach(btn=>btn.addEventListener("click",()=>checkSmallButton(btn,colors)))
   

}
toggleActiveButton()

btnLinkPages.forEach((btn) => {
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
 
 
 
function removeActiveWithAnimaton(btnActive){
  btnActive.forEach(btn=>{
    
    btn.addEventListener("click",function(e){
      const id=this.dataset.id
      btn.closest(".container--pallete__color").classList.add("animate-[scaleAndFade_.3s_forwards]");
      setTimeout(()=>{
      
        btn.closest(".container--pallete__color").remove()
     
        selectedPalette.querySelector(`.small--palettes-${id}`).remove()
        removeActive(id)
      
      },800)
    
    })
  })
} 
let timed;



document.querySelector(".btn--link__page").addEventListener("click",function(){
 
  document.querySelector(".menu").classList.toggle("hidden");
})
 
function loadActivePallete(){
  timed=setInterval(()=>{
      let collectionActive=[...selectedPalette.querySelectorAll(".pallete--color")];
      
        if(collectionActive.length){
  
        localStorage.setItem("active", JSON.stringify(collectionActive.map(li=>li.dataset.id)));}
  
        if(collectionActive.length===0)
        localStorage.clear()
   
    },0)
    
  }
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
window.addEventListener("load",function(){
  loadActivePallete()
  const userFavoriteItem =JSON.parse(localStorage.getItem("active"));
  
  if(userFavoriteItem?.length)
   userFavoriteItem.map(li=>{
    const color=colors.find(color=>color.id===li);
    createSamllPallete(color,selectedPalette);
    const id=color.id;
    addActive(id)
   })
})
 
 
 