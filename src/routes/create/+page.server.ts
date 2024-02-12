let colors:object
export function load(){
   console.log("colors",colors);
    return  colors;
}
export const actions={
    addToCreation:async({request})=>{
        const formData=await request.formData();
        const data=JSON.parse(formData.get("hidden"))!
        console.log(data);
        colors=data;
    }
}