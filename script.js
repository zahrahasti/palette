"use strict";
import colors from "./colors.json" assert {type:"json"};
import {downloadPalette} from "./src/download-img.js";
import { copyTextColor } from "./src/copyText.js";
import {createPalette} from "./src/createEl.js";
import {checkSmallButton} from "./src/checkedActive.js"
import {createSamllPallete} from "./src/createSmallPalette.js";
import {userSelectedInput} from "./src/createColorInput.js";
import {hiddenElement} from "./src/hideEl.js"
const popularColorPalette = colors.filter((color) => color?.popular === true);
export const paletteCollection=document.querySelector(".section--new");
export const trendingPalette=document.querySelector(".section--popular")
const containerPalettes = [...document.querySelectorAll(".container--color__palette")];
const btnLinkPages = document.querySelectorAll("li.btn--link__page");
export const selectedPalette = document.querySelector(".collection--user__love");
export const containerSelectedColor=document.querySelector(".container--selected__palette");
const containerTrendingColor=document.querySelector(".container--palette__liked")
const userSelected=[...document.querySelectorAll(".user--selected")];




createPalette(colors,paletteCollection,"palette")
createPalette(popularColorPalette,trendingPalette,"palette")



document.querySelectorAll(".btn-like").forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
          console.log('clicked');
        const sameButton = document.querySelectorAll(`.btn-like-${btn.dataset.id}`);
        console.log(sameButton);
        sameButton.forEach((btnEl) => {
            if (btnEl.classList.contains("active")) {
                btnEl.querySelector(".like-counter").textContent--
                btnEl.classList.remove("active");
                document.querySelector(`.remove-item-${btn.dataset.id}`)?.remove();
            } else {
                btnEl.querySelector(".like-counter").textContent++
                btnEl.classList.add("active");
                const color=colors.find(color=>color.id===btn.dataset.id);
                createRemoveButton(color);
            }
        });

        // Save the button state to localStorage
        saveButtonState();
    });
});

function createRemoveButton(color) {
    const existingRemoveButton = document.querySelector(`.remove-item-${color.id}`);
    
    if (!existingRemoveButton) {
        const paletteSmall=document.createElement('div');
        paletteSmall.classList.
         add(`pallete--color`,`relative`,`w-[7rem]`,`h-[7rem]`,`grid`,`grid-rows-14`,`cursor-pointer` ,`small--palettes-${color.id}`)
         paletteSmall.innerHTML=`
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
         `
        const removeButton = document.createElement("button");
        removeButton.innerHTML =`
        <svg class="w-[.7rem] h-[.7rem] text-white"><use href="./img/icon.svg#time"></use></svg>
        `;
        removeButton.classList.add("remove-item",`remove-item-${color.id}`,"btn-small")
        removeButton.setAttribute("data-id", color.id);
        paletteSmall.appendChild(removeButton);

        removeButton.addEventListener("click", function () {
            // Remove all buttons with the same data-id
            const buttonsToRemove = document.querySelectorAll(`.btn-like-${color.id}`);
            
            buttonsToRemove.forEach((btn) => {
                btn.classList.remove("active");
                btn.querySelector(".like-counter").textContent--
            });

            // Remove this remove button
            paletteSmall.remove()
            
            // Save the button state to localStorage
            saveButtonState();
        });

        selectedPalette.appendChild(paletteSmall);
    }
}

function saveButtonState() {
    const activeButtons = Array.from(document.querySelectorAll("button.active"))
        .map((btn) => btn.dataset.id);
    localStorage.setItem("activeButtons", JSON.stringify(activeButtons));
}

function restoreButtonState() {
    const activeButtons = JSON.parse(localStorage.getItem("activeButtons")) || [];
    // todo check item and add ++ to the them 
    activeButtons.forEach((id) => {
        console.log(id);
        const buttonsToActivate = document.querySelectorAll(`.btn-like-${id}`);
        buttonsToActivate.forEach((btn) =>btn.classList.add("active"));
        const color=colors.find(color=>color.id===id);
        createRemoveButton(color);
    });
}

window.addEventListener("load", function () {
    // Restore the button state from localStorage
    restoreButtonState();
    const actives=document.querySelectorAll("button.active");
    actives.forEach(active=>{
    +active.querySelector(".like-counter").textContent++
    })
});



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
    }})
   const btnMain=color.closest(".container--pallete__color").querySelector(".btn-like");
   const btnSelectedUser=containerSelectedColor.querySelector("[data-target='like']");
   if(btnMain.classList.contains("active")){
   
     // Todo                                
     btnSelectedUser.classList.add("active");
     btnSelectedUser.querySelector(".like-counter").textContent++;
   }
   })