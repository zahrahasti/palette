
export const randomNumber=
(max:number,min:number)=>
Math.floor(Math.random() * (max - min + 1)) + min;
export const randomColor=
():string=>
`rgb(${randomNumber(0,255)},${randomNumber(0,255)},${randomNumber(0,255)})`