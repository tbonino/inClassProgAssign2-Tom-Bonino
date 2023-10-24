console.log("let's go gamers");

//implement functionality to show and hide the div display-a
const buttonA = document.querySelector(".click-a");
const A = document.querySelector(".display-a");
buttonA.addEventListener("click", (e) => {
  A.style.display = "grid";
  A.style.textAlign = "center";
});

const hideA = document.querySelector(".hide-result-a");
hideA.addEventListener("click", (e) => {
  A.style.display = "none";
});

//implement functionality to show and hide the div display-b
const buttonB = document.querySelector(".click-b");
const B = document.querySelector(".display-b");
buttonB.addEventListener("click", (e) => {
  B.style.display = "grid";
});

const hideB = document.querySelector(".hide-result-b");
hideB.addEventListener("click", (e) => {
  B.style.display = "none";
});

//implement functionality to show and hide the div display-c
const buttonC = document.querySelector(".click-c");
const C = document.querySelector(".display-c");
buttonC.addEventListener("click", (e) => {
  C.style.display = "grid";
});

const hideC = document.querySelector(".hide-result-c");
hideC.addEventListener("click", (e) => {
  C.style.display = "none";
});
