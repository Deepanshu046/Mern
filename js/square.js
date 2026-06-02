arr=[1,2,3,4,5,6]
// arr.forEach((val)=>{
//     console.log(val*val);
// })

//reduse
let red = arr.reduce((pre , curr)=>{
    return pre+curr;
})
console.log(red);
const div = document.querySelector("div");