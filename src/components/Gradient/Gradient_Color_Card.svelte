<script lang='ts'>
  export let color: string[]
  let codeColorBase = '',
  	[firstArg, secondArg] = color
</script>

<div
  style='background:linear-gradient(to right,{color});'
  class='rounded-md overflow-hidden group bg-gradient-to-r from-[{color[0]}] to-[{color[1]}] relative aspect-[2/1] w-full flex justify-between items-center'
>
  <button
    on:click={function () {
    	if (typeof firstArg == 'string') {
    		codeColorBase = firstArg
    	}
    	color[0] = 'copy text'
    	navigator.clipboard.writeText(String(codeColorBase))
    	setTimeout(() => {
    		firstArg = codeColorBase
    	}, 500)
    }}
    style='background:{firstArg};'
    class='text-gray-500 duration-300 group-hover:opacity-100 opacity-0 grid ease-in-ou absolute top-0 left-0 place-content-center h-full w-1/2 z-10 cursor-pointer bg-[{color[0]}]'
  >
    {firstArg}
  </button>
  <button
    on:click={function () {
    	if (typeof secondArg == 'string') {
    		codeColorBase = secondArg
    	}
    	secondArg = 'copy text'
    	navigator.clipboard.writeText(String(codeColorBase))
    	return setTimeout(() => {
    		(secondArg = codeColorBase)
    	}, 500)
    }}
    style='background:{secondArg};'
    class='text-white duration-300 group-hover:opacity-100 opacity-0 grid ease-in-ou child absolute top-0 right-0 place-content-center h-full w-1/2 z-10 cursor-pointer bg-[{color[1]}]'
  >
    {secondArg}
  </button>
</div>
