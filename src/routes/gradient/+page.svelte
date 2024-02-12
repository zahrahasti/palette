<script lang="ts">
	import GradientCard from "../../app/GradientCard.svelte";
     import { darkenColor,colorsBase } from "$lib";
	import Box from "../../app/Box.svelte";
	import InputBox from "../../app/inputBox.svelte";
	const gradient={
		 Color:{
			 title:"color",
			 color:"#f0fd"
		 },
		 Position:{
			title:"position",
            value:100,
			optionValues:[0,10,20,30,40,50,60,70,80,90,100],
			sign:"%"
		 },
		 Rotation:{
			title:"rotation",
			value:90,
			optionValues:[0,45,90,135,180,225,270,315,360],
			sign:"°"

		 },
		 Type:{
			title:"type",
			value:"linear",
			optionValues:["linear","radial"],
			sign:""
		 }
		
	}
	let  active:1|2=1
	,color_1="#CE57A9"
	,color_2="#4F4ED7"
	,color_num_1=35
	,color_num_2=35,
	type:"linear"|"radial"="linear",
	thump_color_1="#CE57A9",
	thump_color_2="#4F4ED7",
	input_range_1:HTMLInputElement,
	input_range_2:HTMLInputElement
</script>
 
<section class="grid grid-cols-1 md:grid-cols-2 relative w-full gap-5 items-center justify-between">
	<div class="relative border-gray-100 rounded-xl  border-[1px] p-8 border-1 w-full border-b-gray-200">
		<section class="z-20 relative range-slider">
			<div class="absolute top-0 bg-black w-full">
				<input bind:this={input_range_2} on:input={e=>{
				  gradient.Position.value=e.target.value;
				  color_num_2=e.target.value;
				  console.log(color_num_2);
				  active=2
			  }}
				style="--color:{thump_color_2};--active:{active===2?`#45caff`:`transparent`}"
				class="{active===2? `border-4 border-blue-800`:`border-0`} absolute w-full h-3" 
				min="0" 
				max="100"
				value="50"
			   type="range">
			   <div style="background-image:{type}-gradient({gradient.Rotation.value}deg, {color_1} {color_num_1}%,{color_2} {color_num_2}%);"  class="slider absolute w-full h-3"></div>
			</div>	 
		<div class="absolute top-0 w-full">
			<input 
			bind:this={input_range_1} 
			on:input={e=>{
				gradient.Position.value=e.target?.value
			    color_num_1=e.target?.value;
				console.log(color_num_1);
				active=1;
			}} 
			
			style="--color:{thump_color_1};--active:{active===1?`#45caff`:`transparent`}"
			class="absolute w-full h-3 top-0" 
			min="0" 
			max="100" 
			value="100"
			type="range"/>
		   <div 
		   style="background-image:{type}-gradient({type==="radial"?`circle`: `${gradient.Rotation.value}deg`}, {color_1} {color_num_1}%,{color_2} {color_num_2}%);"   
		   class="slider absolute w-full h-4 rounded-3xl"></div>
		</div>
		</section>
		<div class="grid mt-20 grid-cols-2 gap-8">
			<Box details={gradient.Color}>
					<p>{gradient.Color.color}</p>
					<input 
					      type="color" 
						  on:input={(e)=>{
						if(active===1)
							thump_color_1=color_1=e.target?.value
						else 
							thump_color_2=color_2=e.target?.value
					}}
					class="w-14 h-14 rounded-2xl border-0 outline-0"
					>
					
			</Box>
             <Box details={gradient.Position}>
				  <InputBox 
				  on:changePosition={(e)=>{
					if(active===1)
					 {  input_range_1.value=e.detail.value
						color_num_1=+e.detail.value;}
					else {
						input_range_2.value=e.detail.value
						color_num_2=+e.detail.value;}
					//  gradient.Rotation.value=+e.detail.value
				  }}
				  details={gradient.Position}/>
			 </Box>
			 <Box details={gradient.Rotation}>
				<InputBox  
				   on:changePosition={(e)=>{
					 gradient.Rotation.value=+e.detail.value
				   }}
				  details={gradient.Rotation}/>
		    </Box>
		   <Box details={gradient.Type}>
			 <select  on:change={()=>{
				if(type==="linear")type="radial"
				else type="linear"
			 }}
				   class="w-full">
				    {#each gradient.Type.optionValues as option}
					<option 
					value="{option}">
					{option}
				 </option>
					{/each}
					
			 
			 </select>
		   </Box>
		</div>
	</div>
	<div 
       style="background-image:{type}-gradient({type==="radial"?`circle`: `${gradient.Rotation.value}deg`}, {color_1} {color_num_1}%,{color_2} {color_num_2}%);" 
	   class="w-full h-full"> 
	</div>
</section>

<section  
 class="mt-10 mb-10 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] h-max section--new  active-page w-full  justify-between gap-[1rem]"
 data-active="1">
 {#each colorsBase as colorBase}
    {@const color=darkenColor().toString()}
    <GradientCard {color}/>
 {/each}
</section>

 <style >
  input[type="range"]{
	appearance: none;
	-webkit-appearance:none;
	/* background: #000; */
  }
  input::-webkit-slider-thumb {
  pointer-events: all;
  position: relative;
  background:var(--color);
  z-index: 1;
  width:25px;
  height: 25px;
  -webkit-appearance: none;
  border:6px solid #fff;
  outline:1px solid var(--active);
  /* outline-offset:2px; */
   border-radius:50%;
  }
 

</style>