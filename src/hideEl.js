
export function hiddenElement(className,el){
    document.body.addEventListener("click",function(e){
   
      if(!e.target.closest(`.${className}`))el.classList.add("hidden") 
    })
  }
  

hiddenElement("btn--open__menu",document.querySelector(".menu"))
  
