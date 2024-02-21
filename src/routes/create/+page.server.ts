let colors:object
export function load(){
    return  colors;
}
export const actions={
    addToCreation:async({request})=>{
        const formData=await request.formData();
        const data=JSON.parse(formData.get("hidden"))!
        colors=data;
    }
}