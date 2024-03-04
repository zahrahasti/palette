
const colors:{isLike:boolean,colors:string[]}[]=[];
export function load({params}){
    return {colors,params}
}
export const actions={
    addColor:async ({request})=>{
        const formData=await request.formData();
        const hiddenData: FormDataEntryValue | null = `${formData.get("hidden")}`;
        const data = hiddenData ? JSON.parse(hiddenData) : {}
        console.log("add to color");
        colors.push(data);
    },
    removeColor:async ({request})=>{
        const formData=await request.formData();
        const hiddenData: FormDataEntryValue | null = `${formData.get("hidden")}`;
        const data = hiddenData ? JSON.parse(hiddenData) : {}
        const foundObjectIndex = colors.findIndex(obj => {
            return obj.isLike !== data.isLike && obj.colors.every((color, index) => color === data.colors[index]);
        });
        if (foundObjectIndex !== -1)
            colors.splice(foundObjectIndex, 1);   
    }
}