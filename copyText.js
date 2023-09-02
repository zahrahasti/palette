
export function copyTextColor(wrapper){
    const copyText=[...wrapper.querySelectorAll(".btn--copy__color")];
   
    copyText.map(copy=>{
      copy.addEventListener("click",function(){
        navigator.clipboard.writeText(this.textContent.slice(1))
        this.textContent="Copied";
       setTimeout(()=>this.textContent=this.dataset.color,400)
      
      })
    })
}