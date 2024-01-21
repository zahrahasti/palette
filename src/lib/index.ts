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
     "colors":[T,T,T,T]
    "timer":T,
    "likes": U,
    "popular": boolean,
    "isLike":boolean
}
const colors:color<string,number>[]=[
    {
        "name": "blue",
        "id": "2222",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":333,
        "popular": false
        ,
    "isLike":false
    },
    {
        "name": "blue",
        "id": "3333",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":333,
        "popular": false,
        "isLike":false
    },
    {
        "name": "blue",
        "id": "4444",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":333,
        "popular": false
        ,
        "isLike":false
    },
    {
        "name": "blue",
        "id": "555",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":333,
        "popular": false
        ,
        "isLike":false
    },
    {
        "name": "blue",
        "id": "116666666666666",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":336,
        "popular":false,
        "isLike":false
    },
    {
        "name": "blue",
        "id": "23442",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":336,
        "popular":false,
        "isLike":false
    },
    {
        "name": "blue",
        "id": "123243434",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":336,
        "popular":false,
        "isLike":false
    },
    {
        "name": "red",
        "id": "1313131",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":336,
        "popular":false,
        "isLike":false
    },
    {
        "name": "pink",
        "id": "131313131",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":336,
        "popular":false,
        "isLike":false
    },
    {
        "name": "purple",
        "id": "1313131313131313131",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":336,
        "popular":false,
        "isLike":false
    },
    {
        "name": "blue",
        "id": "1163434343",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":336,
        "popular":false,
        "isLike":false
    },
    {
        "name": "blue",
        "id": "1166688343",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":336,
        "popular":false,
        "isLike":false
    },
    {
        "name": "blue",
        "id": "8687899090000",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":336,
        "popular":false,
        "isLike":false
    },
    {
        "name": "blue",
        "id": "002",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":336,
        "popular":false,
        "isLike":false
    },

    {
        "name": "blue",
        "id": "24324322313545454545",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":336,
        "popular":false,
        "isLike":false
    },
    {
        "name": "teal",
        "id": "12121212121212",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":336,
        "popular":false,
        "isLike":false
    },
    {
        "name": "pink",
        "id": "565645454545456889",
        "colors":["1D5D9B","75C2F6","7895CB","FBEEAC"],
        "timer": "2022/3/4",
        "likes":336,
        "popular":false,
        "isLike":false
    },

    
    
     
     
  ]

  
// let colors:color<string,number>[];
export async function fetchingDataPalette(){
    return colors;
}

 

// import LikedCardSamll__SvelteComponent_ from "../app/LikedCardSamll.svelte";

let filterColors;
export function updateDataPalette(colorLiked?:color<string,number>){
     filterColors=colors.filter(color=>color.isLike===true);
    if(colorLiked!==undefined){
        colorLiked.isLike=true;
        +colorLiked.likes++
         const colorIndex=colors.findIndex(color=>color.id===colorLiked.id);
         if(colorIndex!==-1){
       
            colors[colorIndex]=colorLiked;  
             
            filterColors.push(colorLiked)
            return {colors,filterColors}
         }
    } else    return {colors,filterColors}


    }
 
    export function removeUpdata(colorLiked?:color<string,number>){
         if(colorLiked!==undefined){
             colorLiked.isLike=false;
            +colorLiked.likes--
             const colorIndex=colors.findIndex(color=>color.id===colorLiked.id);
              if(colorIndex!==-1){
                colors[colorIndex]=colorLiked;  
                return colors
             }
        } else return colors
  }

  