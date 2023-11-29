//fetching the data 
//we can accsess the data in +layout.svelte.ts 
//we can getColors;
//we need to update data that user clicked
//actually first we need to say when click is happend the fethcing the data in +server.js 
//in server.js we need post function
//after update we need a function to tell if the button click on that again re updatte data;

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

let colors:color<string,number>[];
export async function fetchingDataPalette():Promise<any[]>{
    const res=await fetch("https://zahrahasti.github.io/color-api/colors.json?start=2&end=12");
    const data=await res.json();
    colors=data;
    return colors;
}


export function updateDataPalette(colorLiked:color<string,number>){
    +colorLiked.likes++;
    colorLiked.popular=true;
     console.log("colors in update",colors);
     const colorIndex=colors.findIndex(color=>color.id===colorLiked.id);
     console.log(colorIndex);
     if(colorIndex!==-1){
        colors[colorIndex]=colorLiked;
        console.log("color index",colors[colorIndex]);
        console.log("color liked",colorLiked);
        return colors;
     }
}
export function removeUpdate(){

}