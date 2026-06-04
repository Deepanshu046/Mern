function asyncFun(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            console.log("Hello Future");
            resolve("success")
        }, 2000);
    });
}

let p1 = asyncFun();
p1.then((res)=>{
    console.log(res);
})
p1.catch((rej)=>{
    console.log(rej);
})