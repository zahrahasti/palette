import { fetchingDataPalette, removeUpdata, updateDataPalette } from '$lib';
import { json } from '@sveltejs/kit';
 
 
export async function PUT({request}){
    const startTime=performance.now();
    const formData = await request.json();
    const endTime=performance.now();
    console.log("endTime - startTime",endTime-startTime);
    console.log("form data",formData);
     const id=formData.id;
    
    const colors=await fetchingDataPalette();
    const colorIndex:number=(await colors).findIndex(color=>String(color.id)===id);
    return json(updateDataPalette(colors[colorIndex]))
}

export async function DELETE({request}) {
    const formData = await request.json();
    const id=formData.id;
    const colors=await fetchingDataPalette();
    const colorIndex:number=(await colors).findIndex(color=>String(color.id)===id);
    return json(removeUpdata(colors[colorIndex]))
}