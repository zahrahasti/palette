<script lang='ts'>
  // import { TYPE_COLOR_DEFAULT } from '$lib';
  export let color: { colors: string[], id: string, isLike: boolean }
  export let name
</script>

<button
  on:click={async () => {
  	let respose
  	if (color.isLike) {
  		color.isLike = false
  		respose = await fetch(`http://localhost:3000/${name}/${color.id}`, {
  			method: 'PUT',
  			headers: {
  				'Content-Type': 'application/json',
  			},
  			body: JSON.stringify({
  				...color,
  				isLike: false,
  			}),
  		})
  	}
    else {
  		color.isLike = true
  		respose = await fetch(`http://localhost:3000/${name}/${color.id}`, {
  			method: 'PUT',
  			headers: {
  				'Content-Type': 'application/json',
  			},
  			body: JSON.stringify({
  				...color,
  				isLike: true,
  			}),
  		})
  	}
  	// update colors with its id

  	await respose.json()
  }}
  type='button'
  class='{color.isLike ? `bg-gray-200` : ``} btn btn-like text-[1.8rem] md:text-[1.6rem] sm:text-[1.4rem] btn-custom'
>
  <span>
    <svg
      class='{color.isLike ? `text-black` : `text-transparent`} stroke-[1rem] stroke-black w-[2rem] h-[2rem]'
    >
      <use href='./icon.svg#heart3'></use>
    </svg>
  </span>
  <span id='like-count' class='like-counter'>Like</span>
</button>
