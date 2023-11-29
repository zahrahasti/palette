
 

export function scrollToTop(){ 
    window.addEventListener("scroll",function(e){
        console.log(e);
    document.querySelector(".scrollToTop").classList.add("scroll-to-up");
    document.querySelector(".scrollToTop").classList.remove("translate-y-full","opacity-0");
    document.querySelector(".scrollToTop").addEventListener("click",function(e){
    document.querySelector(".container--selected__palette").scrollIntoView({behavior:"smooth",block:"end"})
    })
})}