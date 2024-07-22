<script lang='ts'>
  type titleType = {
  	title: string
  }
  export let details: titleType
</script>

<div>
  <p class='font-semibold text-xl mb-4 capitalize'>{details.title}</p>
  <div class='flex relative justify-between border-[1px] rounded-xl border-gray-200 p-3'>
    <slot />
  </div>
</div>
