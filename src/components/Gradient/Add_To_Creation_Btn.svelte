<script lang='ts'>
  let showSuccess = false
  function showSuccessText() {
  	showSuccess = true
  	setTimeout(() => {
  		showSuccess = false
  	}, 1000)
  }
</script>

<button
  type='button'
  class='btn btn-custom relative mx-auto w-max btn--submit__palette'
  on:click={showSuccessText}
>
  <svg class='w-[2rem] mr-1 h-[2rem]'>
    <use href='./icon.svg#tel'></use>
  </svg>
  Submit Palette
  <p
    class='{showSuccess ? `block` : `hidden`} absolute w-max -top-14 bg-blue-600 text-white px-4 py-1 rounded-md duration-300 -left-10'
  >
    Added successfully
  </p>
</button>
