export const baseColors = [
	'blue',
	'pink',
	'purple',
	'green',
	'yellow',
	'orange',
	'red',
	'brown',
	"monochrome"
];

import { randomNumber } from './randomNum';
export function splitArrayToSmallerArrays<T>(chunkSize: number, array: Array<T>): Array<Array<T>> {
	// Calculate the number of chunks needed
	const chunkCount = Math.ceil(array.length / chunkSize);
	// Create an array of empty arrays with the chunk count
	const chunks = Array.from({ length: chunkCount }, () => []);
	// Loop over the original array and push each item to the corresponding chunk
	array.forEach((item, index) => {
		const chunkIndex = Math.floor(index / chunkSize);
		chunks[chunkIndex].push(item);
	});
	// Return the array of chunks
	return chunks;
}
import chroma from 'chroma-js';

export function generatedColors(color: string[]): string[] {
	return [
		`${chroma.mix(...color, 0.5).brighten()}`,
		...color,
		`${chroma.average(color).darken(randomNumber(3, 1))}`
	];
}
