

export function userSelectedInput(userSelected){
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
      
}
 