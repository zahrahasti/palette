<script>
    export let sliderEvents,gradient;
    import { createEventDispatcher } from "svelte";
    const dispatch=createEventDispatcher();
    let {inputEl_1,inputEl_2,colorHex_1,colorHex_2,colorRange_1,colorRange_2,colorHexCopied_1,colorHexCopied_2,active,type}=sliderEvents
</script>
<section class="z-20  relative range-slider">
    <div class="absolute top-0  w-full">
        <input
            bind:this={inputEl_2}
            on:input={(e) => {
                dispatch("handleInputOne",{input:e.target})
             
            }}
            style="--color:{colorHexCopied_2};--active:{active === 2 ? `#45caff` : `transparent`}"
            class="{active === 2 ? `border-4 border-blue-800` : `border-0`} inputColor_2 absolute w-full h-3"
            min="0"
            max="100"
            value="50"
            type="range"
        />
        <div
            style="background-image:{type}-gradient({gradient.Rotation
                .value}deg, {colorHex_1} {colorRange_1}%,{colorHex_2} {colorRange_2}%);"
            class="slider absolute w-full h-3"
        ></div>
    </div>
    <div class="absolute top-0 w-full">
        
        <input
            bind:this={inputEl_1}
            on:input={(e) => {
                dispatch("handleInputTwo",{input:e.target})
 
            }}
            style="--color:{colorHexCopied_1};--active:{active === 1 ? `#45caff` : `transparent`}"
            class="inputColor_1 absolute w-full h-3 top-0"
            min="0"
            max="100"
            value="100"
            type="range"
        />
        <div
            style="background-image:{type}-gradient({type === 'radial'
                ? `circle`
                : `${gradient.Rotation.value}deg`}, {colorHex_1} {colorRange_1}%,{colorHex_2} {colorRange_2}%);"
            class="slider absolute w-full h-4 rounded-3xl"
        ></div>
    </div>
</section>