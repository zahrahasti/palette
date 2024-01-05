import { fetchingDataPalette, removeUpdata, updateDataPalette } from '$lib';
import { json } from '@sveltejs/kit';
 
 
export async function POST({request}){
    const formData = await request.json();
    console.log("FROM",formData);
    const id=formData.id;
    // console.log("id",id);
    const colors=await fetchingDataPalette();
    const colorIndex:number=(await colors).findIndex(color=>String(color.id)===id);
    return json( updateDataPalette(colors[colorIndex]))
}

export async function DELETE({request}) {
    const formData = await request.json();
    console.log(formData);
    const id=formData.id;

    const colors=await fetchingDataPalette();
     const colorIndex:number=(await colors).findIndex(color=>String(color.id)===id);
    return json(removeUpdata(colors[colorIndex]))
}