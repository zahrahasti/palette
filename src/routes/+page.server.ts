 
export const colors:{isLike:boolean,colors:string[]}[]=[];
export function load(){
    return  {colors};
}
 
export const actions={
    addColor:async ({request})=>{
        const formData=await request.formData();
        const data=JSON.parse(formData.get("hidden"))!
        console.log("addColor",data);
        colors.push(data);
    },
    removeColor:async ({request})=>{
        const formData=await request.formData();
        const data=JSON.parse(formData.get("hidden"))!
        const foundObjectIndex = colors.findIndex(obj => {
            return obj.isLike !== data.isLike && obj.colors.every((color, index) => color === data.colors[index]);
        });
        if (foundObjectIndex !== -1)
            colors.splice(foundObjectIndex, 1);   
    }
}