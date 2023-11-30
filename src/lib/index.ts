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
const colors:color<string,number>[]=[
    {
        "name": "blue",
        "id": "111",
        "color_1": "1D5D9B",
        "color_2": "75C2F6",
        "color_3": "7895CB",
        "color_4": "FBEEAC",
        "timer": "2022/3/4",
        "likes":333,
        "popular": false
    },
    {
        "name": "blue",
        "id": "222",
        "color_1": "4FC0D0",
        "color_2": "75C2F6",
        "color_3": "E2F6CA",
        "color_4": "F8FDCF",
        "timer": "2023/3/5",
        "likes": 353,
        "popular": false
    },
    {
        "name": "blue",
        "id": "333",
        "color_1": "0E2954",
        "color_2": "1F6E8C",
        "color_3": "2E8A99",
        "color_4": "84A7A1",
        "timer": "2021/7/5",
        "likes": 666,
        "popular": false
    },
    {
        "name": "blue",
        "id": "444",
        "color_1": "11009E",
        "color_2": "4942E4",
        "color_3": "8696FE",
        "color_4": "C4B0FF",
        "timer": "2023/1/5",
        "likes": 434,
        "popular": false
    },
    {
        "name": "green",
        "id": "566",
        "color_1": "98EECC",
        "color_2": "D0F5BE",
        "color_3": "FBFFDC",
        "color_4": "A4907C",
        "timer": "2023/5/5",
        "likes": 53,
        "popular": false
    },
    {
        "name": "green",
        "id": "74412",
        "color_1": "533E85",
        "color_2": "488FB1",
        "color_3": "4FD3C4",
        "color_4": "C1F8CF",
        "timer": "2023/5/5",
        "likes": 83,
        "popular": false
    },
    {
        "name": "green",
        "id": "1455",
        "color_1": "CCFFBD",
        "color_2": "7ECA9C",
        "color_3": "40394A",
        "color_4": "1C1427",
        "timer": "2023/1/",
        "likes": 673,
        "popular": false
    },
    {
        "name": "red",
        "id": "122",
        "color_1": "F11A7B",
        "color_2": "982176",
        "color_3": "3E001F",
        "color_4": "FFE5AD",
        "timer": "2023/6/8",
        "likes": 53,
        "popular": false
    },
    {
        "name": "red",
        "id":"35555",
        "color_1": "DC0000",
        "color_2": "850000",
        "color_3": "FFDB89",
        "color_4": "FFF6C3",
        "timer": "2023/6/27",
        "likes": 78,
        "popular": false
    },
    {
        "name": "red",
        "id": "133",
        "color_1": "B70404",
        "color_2": "DB005B",
        "color_3": "F79327",
        "color_4": "FFE569",
        "timer": "2023/4/27",
        "likes": 90,
        "popular": false
    },
    {
        "name": "red",
        "id": "134",
        "color_1": "D61355",
        "color_2": "F94A29",
        "color_3": "FCE22A",
        "color_4": "DC0000",
        "timer": "2023/5/1",
        "likes": 455,
        "popular":false
    },
    {
        "name": "yellow",
        "id": "422",
        "color_1": "1A5D1A",
        "color_2": "F1C93B",
        "color_3": "7895CB",
        "color_4": "FAE392",
        "timer": "2021/11/4",
        "likes": 66,
        "popular": false
    },
    {
        "name": "yellow",
        "id": "432",
        "color_1": "22A699",
        "color_2": "898121",
        "color_3": "E7B10A",
        "color_4": "F7F1E5",
        "timer": "2023/5/4",
        "likes": 123,
        "popular": false
    },
    {
        "name": "yellow",
        "id": "433",
        "color_1": "22A699",
        "color_2": "898121",
        "color_3": "E7B10A",
        "color_4": "F7F1E5",
        "timer": "2023/5/4",
        "likes": 87,
        "popular": false
    },
    {
        "name": "yellow",
        "id": "576777",
        "color_1": "F6F1E9",
        "color_2": "FFD93D",
        "color_3": "FF8400",
        "color_4": "4F200D",
        "timer": "2023/5/4",
        "likes": 98,
        "popular":  false
    },
    {
        "name": "yellow",
        "id": "9898",
        "color_1": "FEFF86",
        "color_2": "898121",
        "color_3": "FFD966",
        "color_4": "DAF5FF",
        "timer": "2023/5/4",
        "likes": 98,
        "popular": false
    },
    {
        "name": "orange",
        "id": "522",
        "color_1": "525FE1",
        "color_2": "F86F03",
        "color_3": "FFA41B",
        "color_4": "FFF6F4",
        "timer": "2022/3/4",
        "likes": 122,
        "popular": false
    },
    {
        "name": "orange",
        "id": "533",
        "color_1": "F97B22",
        "color_2": "FEE8B0",
        "color_3": "9CA777",
        "color_4": "7C9070",
        "timer": "2022/3/4",
        "likes": 339,
        "popular": false
    },
    {
        "name": "orange",
        "id": "544",
        "color_1": "FFF2CC",
        "color_2": "FFD966",
        "color_3": "F4B183",
        "color_4": "DFA67B",
        "timer": "2022/3/4",
        "likes": 556,
        "popular": false
    },
    {
        "name": "brown",
        "id": "611",
        "color_1": "9E6F21",
        "color_2": "FFEEB3",
        "color_3": "B8E7E1",
        "color_4": "D4FAFC",
        "timer": "2020/3/4",
        "likes": 877,
        "popular": false
    },
    {
        "name": "brown",
        "id": "622",
        "color_1": "61481C",
        "color_2": "A47E3B",
        "color_3": "BF9742",
        "color_4": "E6B325",
        "timer": "2021/8/4",
        "likes": 322,
        "popular": false
    },
    {
        "name": "brown",
        "id": "633",
        "color_1": "FFCE45",
        "color_2": "D4AC2B",
        "color_3": "B05E27",
        "color_4": "7E370C",
        "timer": "2020/3/12",
        "likes": 111,
        "popular": false
    },
    {
        "name": "brown",
        "id": "644",
        "color_1": "FEF9D9",
        "color_2": "CE7D00",
        "color_3": "935900",
        "color_4": "5C3C10",
        "timer": "2022/3/4",
        "likes": 234,
        "popular": false
    },
    {
        "name": "purple",
        "id": "771",
        "color_1": "E0C97E",
        "color_2": "FCF8B3",
        "color_3": "FB9378",
        "color_4": "AB6088",
        "timer": "2023/3/4",
        "likes": 544,
        "popular":false
    },
    {
        "name": "brown",
        "id": "772",
        "color_1": "E5EDC4",
        "color_2": "E1A6E1",
        "color_3": "934662",
        "color_4": "463832",
        "timer": "2021/3/4",
        "likes": 566,
        "popular": false
    },
    {
        "name": "pink",
        "id": "871",
        "color_1": "F31559",
        "color_2": "FF52A2",
        "color_3": "FFB07F",
        "color_4": "FFECAF",
        "timer": "2023/3/4",
        "likes": 542,
        "popular": false
    },
    {
        "name": "pink",
        "id": "872",
        "color_1": "FFFAD7",
        "color_2": "FF2171",
        "color_3": "FF8E9E",
        "color_4": "DB005B",
        "timer": "2021/3/4",
        "likes": 332,
        "popular": false
    },
    {
        "name": "pink",
        "id": "873",
        "color_1": "FF55BB",
        "color_2": "FFD3A3",
        "color_3": "F48484",
        "color_4": "FCFFB2",
        "timer": "2023/3/4",
        "likes": 986,
        "popular": false
    },
    {
        "name": "pink",
        "id": "874",
        "color_1": "2A2F4F",
        "color_2": "FFD3A3",
        "color_3": "FCFFB2",
        "color_4": "E8D2A6",
        "timer": "2021/3/4",
        "likes": 435,
        "popular": false
    },
    {
        "name": "grey",
        "id": "991",
        "color_1": "EEE2DE",
        "color_2": "EA906C",
        "color_3": "B31312",
        "color_4": "2B2A4C",
        "timer": "2022/11/4",
        "likes": 43,
        "popular": false
    },
    {
        "name": "grey",
        "id": "992",
        "color_1": "27374D",
        "color_2": "526D82",
        "color_3": "9DB2BF",
        "color_4": "DDE6ED",
        "timer": "2021/12/4",
        "likes": 98,
        "popular":false
    },
    {
        "name": "grey",
        "id": "993",
        "color_1": "27374D",
        "color_2": "526D82",
        "color_3": "9DB2BF",
        "color_4": "DDE6ED",
        "timer": "2023/4/4",
        "likes": 67,
        "popular":false
    },
    {
        "name": "grey",
        "id": "15666",
        "color_1": "C4DFDF",
        "color_2": "E3F4F4",
        "color_3": "8294C4",
        "color_4": "FFEAD2",
        "timer": "2022/3/4",
        "likes": 65,
        "popular": false
    }
  ]
// let colors:color<string,number>[];
export async function fetchingDataPalette(){
    return colors;
}

 

export function updateDataPalette(colorLiked?:color<string,number>){
    if(colorLiked!==undefined){
        colorLiked.popular=true;
        +colorLiked.likes++
         const colorIndex=colors.findIndex(color=>color.id===colorLiked.id);
         if(colorIndex!==-1){
            console.log(colorLiked);
            colors[colorIndex]=colorLiked;  
            return colors
         }
    } else return colors

    }
 
    export function removeUpdata(colorLiked?:color<string,number>){
        if(colorLiked!==undefined){
            colorLiked.popular=false;
            +colorLiked.likes--
             const colorIndex=colors.findIndex(color=>color.id===colorLiked.id);
             if(colorIndex!==-1){
                colors[colorIndex]=colorLiked;  
                return colors
             }
        } else return colors
  }