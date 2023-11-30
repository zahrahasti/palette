import { fetchingDataPalette, removeUpdata, updateDataPalette } from '$lib';
import { json } from '@sveltejs/kit';
 
type color<T,U>= {
    "name": T,
    "id": T,
    "color_1": T,
    "color_2":T,
    "color_3": T,
    "color_4":T,
    "timer":T,
    "likes": U,
    "popular": boolean
}

export async function POST({request}){
    const formData = await request.formData();
    const id=String(formData.get("data"))
    const colors=await fetchingDataPalette();
     const colorIndex:number=(await colors).findIndex(color=>String(color.id)===id);
    return json( updateDataPalette(colors[colorIndex]))
}

export async function DELETE({request}) {
    const formData = await request.formData();
    const id=String(formData.get("data"))
    const colors=await fetchingDataPalette();
     const colorIndex:number=(await colors).findIndex(color=>String(color.id)===id);
    return json(removeUpdata(colors[colorIndex]))
}