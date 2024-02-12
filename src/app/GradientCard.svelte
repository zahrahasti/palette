 <script lang="ts">
    import { generatedColors } from "$lib";
    export let color:string;
   const splitColor=color.split(',');
   console.log(typeof splitColor[0]);
 </script>


<div style="background:linear-gradient(to right,{color});" class="rounded-md overflow-hidden group bg-gradient-to-r from-[{splitColor[0]}] to-[{splitColor[1]}] relative aspect-[2/1] w-full flex justify-between items-center">
    <div style="background:{splitColor[0]};" class="text-gray-500 duration-300 group-hover:opacity-100 opacity-0 grid  ease-in-ou absolute top-0 left-0  place-content-center h-full w-1/2 z-10 cursor-pointer bg-[{color[0]}]">{splitColor[0]}</div>
    <div style="background:{splitColor[1]};" class="text-white duration-300 group-hover:opacity-100 opacity-0 grid  ease-in-ou child absolute top-0 right-0  place-content-center  h-full w-1/2 z-10 cursor-pointer bg-[{color[1]}]">{splitColor[1]}</div>
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