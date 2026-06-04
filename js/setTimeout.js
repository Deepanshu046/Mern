// setTimeout(()=>{
//     console.log("Hello World")
// } , 2000);

function sum(a,b){
    console.log(a+b);
}

function dalla(a , b , middleMan){
    middleMan(a,b);
}

dalla(10,20,sum);