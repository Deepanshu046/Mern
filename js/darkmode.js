const btn = document.querySelector("#btn");
const body = document.querySelector("body");

let state = "light";
btn.addEventListener("click" ,()=>{
    if(state === "light"){
        body.style.backgroundColor="black";
        btn.innerText = "Light mode";
        state = "Dark";
    }
    else {
        body.style.backgroundColor="white";
        btn.innerText = "Dark mode";
        state = "light";
    }
    console.log(state);
});
