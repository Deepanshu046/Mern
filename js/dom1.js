const newBtn = document.createElement("button");
newBtn.innerText = "Click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
document.querySelector("body").prepend(newBtn);
let para = document.querySelector("p");
para.classList.add("newContent");
