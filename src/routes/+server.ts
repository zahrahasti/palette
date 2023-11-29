import { updateDataPalette } from '$lib';
import { json } from '@sveltejs/kit';



export async function POST({request}){
    console.log(request);
    const res=await request.json();
    console.log("REs",res);
     updateDataPalette(res);
     return json({res})
}