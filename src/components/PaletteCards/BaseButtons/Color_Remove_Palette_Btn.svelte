<script lang='ts'>
  export let color: { isLike: boolean, colors: string[], id: string }
</script>

<button
  on:click={async () => {
  	await fetch(`http://localhost:3000/randomColors/${color.id}`, {
  		method: 'PUT',
  		headers: {
  			'Content-Type': 'application/json',
  		},
  		body: JSON.stringify({
  			...color,
  			isLike: false,
  		}),
  	})
  	color.isLike = false
  }}
  class:like={color.isLike}
  type='button'
  class='bg-gray-200 flex items-center gap-[1rem] px-[.7rem]
    py-[.4rem] border-[.1rem] border-gray-200
    rounded-[.5rem] duration-300'
  data-liked='false'
>
  <svg class='text-black stroke-[1rem] stroke-black w-[2rem] h-[2rem]'>
    <use href='./icon.svg#heart3'></use>
  </svg>
  <span id='like-count' class='like-counter'> Liked </span>
</button>
