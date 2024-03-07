 <script lang="ts">
     export let color:string[];
     let codeColorBase="";
 </script>


<div style="background:linear-gradient(to right,{color});" class="rounded-md overflow-hidden group bg-gradient-to-r from-[{color[0]}] to-[{color[1]}] relative aspect-[2/1] w-full flex justify-between items-center">

    <div on:click={function(){
        codeColorBase=color[0]
        color[0]="copy text";
        navigator.clipboard.writeText(String(codeColorBase));
        setTimeout(()=>color[0]=codeColorBase,500)
        }
        }  
        style="background:{color[0]};" 
        class="text-gray-500 duration-300 group-hover:opacity-100 opacity-0 grid  ease-in-ou absolute top-0 left-0  place-content-center h-full w-1/2 z-10 cursor-pointer bg-[{color[0]}]">{color[0]}</div>
    <div 
     on:click={function(){
        codeColorBase=color[1]
        color[1]="copy text";
        navigator.clipboard.writeText(String(codeColorBase));
        setTimeout(()=>color[1]=codeColorBase,500)
        }
        }
     style="background:{color[1]};" 
     class="text-white duration-300 group-hover:opacity-100 opacity-0 grid  ease-in-ou child absolute top-0 right-0  place-content-center  h-full w-1/2 z-10 cursor-pointer bg-[{color[1]}]">{color[1]}</div>
</div>
  

<style>
    .group div{
        /* transition:all .3s; */
        opacity:0;
    }
    .group:hover div{
        visibility: visible;
        opacity:1;
    }
</style>