
import { fetchingDataPalette } from "$lib"
export async function load(){
     const colors=fetchingDataPalette()
     return {colors}
}