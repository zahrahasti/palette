import {createSamllPallete} from "./createSmallPalette.js"
 function removeSmallActiveButton(btn){
    document.querySelector(`.small--palettes-${btn.dataset.id}`)?.remove()
}
  
 export function checkSmallButton(btn,colors){
    if(btn.classList.contains("active")){
      const color=colors.find(color=>color.id===btn.dataset.id);
   
      createSamllPallete(color)
    
    }else removeSmallActiveButton(btn)
  }