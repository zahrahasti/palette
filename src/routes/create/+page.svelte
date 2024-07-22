<script lang='ts'>
  // @ts-expect-error
  import AddToCreationBtn from '$components/Gradient/Add_To_Creation_Btn.svelte'

  export let data
  const colors = ['#BBBBBB', '#CCCCCC', '#DDDDDD', '#EEEEEE'],
  	c1 = '#BBBBBB',
  	c2 = '#CCCCCC',
  	c3 = '#DDDDDD',
  	c4 = '#EEEEEE',
  	dynamicColors = [c1, c2, c3, c4]

  let pickerEl: HTMLDivElement,
  	picker
  function userSelectedInput(e: Event) {
  	// Getting the element
  	const target = e.target as HTMLDivElement
  		const id: number | undefined = +target.dataset.index!
  		const inputColors = document.querySelectorAll('input[type=color]') as NodeListOf<HTMLInputElement>
  	if (inputColors[id] !== undefined) {
  		inputColors[id].click()
  		inputColors[id].addEventListener(
  			'input',
  			() => {
  				if (inputColors[id] !== undefined) {
  					(target.style.backgroundColor = inputColors[id].value)
  				}
  			},
  		)
  	}
  }
</script>

<section
  id='container--color__palette'
  class='container--color__palette mb-[10rem] sm:mb-0 min-h-[85vh] section--create w-full top-[8rem] grid gap-[1.5rem] justify-center z-1 items-center'
>
  <h3 class='text-center font-bold'>New Color Palette</h3>
  <p class='text-center'>Create a new palette and contribute to Color Hunt’s collection</p>
  <div class='flex gap-4 flex-wrap relative justify-center'>
    <div
      class='relative grid grid-rows-4 gap-1.2fr 2fr 3fr 4fr min-w-[30rem] min-h-[30rem] text-white top-0 rounded-[1rem] overflow-hidden pallete--color__1'
      data-id='1'
    >
      {#each colors as color, i}
        <div
          on:click={userSelectedInput}
          style='background-color: {color};'
          class='relative cursor-pointer'
          data-index={i}
          data-color={color}
        ></div>
      {/each}
      <div bind:this={pickerEl} class='absolute top-0'>
        {#each dynamicColors as color}
          <input
            type='color'
            bind:value={color}
            bind:this={picker}
            class=' absolute left-[30rem] top-0 opacity-0'
          />
        {/each}
      </div>
    </div>
  </div>
  <AddToCreationBtn {dynamicColors} />
</section>
