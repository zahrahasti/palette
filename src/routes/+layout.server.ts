
import { fetchingDataPalette, updateDataPalette } from "$lib"
 export async function load(){
     const colors=updateDataPalette()
     return {colors}
}