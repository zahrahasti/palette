<script lang='ts'>
  export let listColor: HTMLElement
  	// navEventElements

</script>

<div class='absolute w-full h-full top-0'>
  <div
    bind:this={listColor}
    class='top-[3.5rem] hidden bg-white min-h-[18rem] duration-200 absolute p-[2rem] w-full rounded-b-2xl border-gray-100 border-[.1rem] border-t-transparent'
  >
    <p class='font-semibold mt-5'>Colors</p>
    <div class='flex flex-wrap items-center gap-5 py-[1rem] text-[1.2rem]'>
      <slot />
    </div>
  </div>
</div>
