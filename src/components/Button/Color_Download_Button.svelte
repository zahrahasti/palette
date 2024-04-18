<script lang="ts">
	export let colorWrapper: HTMLElement;
	export let canvas: HTMLCanvasElement;
	export function downloadPalette(canvas: HTMLCanvasElement, containerPaletteColors: HTMLElement) {
		// Create a new canvas element
		const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

		// Set canvas dimensions based on the color palette size
		const paletteWidth = containerPaletteColors.offsetWidth;
		const paletteHeight = containerPaletteColors.offsetHeight;
		canvas.width = paletteWidth;
		canvas.height = paletteHeight;

		// Get the colors from the color palette
		const colorBoxes = containerPaletteColors.getElementsByClassName('container-color');
		// Loop through the color boxes and draw them on the canvas
		let yPos = 0;
		for (let i = 0; i < colorBoxes.length; i++) {
			const colorBox = colorBoxes[i] as HTMLElement;
			const color = colorBox.style.backgroundColor;
			const boxHeight = colorBox.offsetHeight;

			// Draw the color box on the canvas
			ctx.fillStyle = color;
			ctx.fillRect(0, 0, paletteWidth, boxHeight);

			// Increment the y-position for the next color box
			yPos += boxHeight;
		}

		// Convert the canvas content to a data URL
		const dataUrl = canvas.toDataURL('image/png');

		// Create a temporary anchor element
		const link = document.createElement('a');
		link.href = dataUrl;
		link.download = 'color-palette.png'; // Set the desired file name

		// Programmatically click the link to trigger the download
		link.click();
	}
</script>

<button
	type="button"
	class="btn text-[1.8rem] md:text-[1.6rem] sm:text-[1.4rem] btn-custom"
	on:click={() => downloadPalette(canvas, colorWrapper)}
>
	Download
</button>
