const container = document.querySelector(".container");
const layout = document.querySelector("input[type=range]");
const eraser = document.querySelector("#eraser");
const colorMode = document.querySelector("#colormode");
const clear = document.querySelector("#clear");
const rainbowMode = document.querySelector("#rainbowmode");
const colorInput = document.querySelector("input[type=color]");
window.addEventListener("load", createDivs(16));
colorMode.addEventListener("click", (e) => {
  colorInput.addEventListener("change", (e) => {
    console.log(e.target.value);
  });
});
layout.addEventListener("change", (e) => {
  createDivs(e.target.value);
});
eraser.addEventListener("click", erase);
clear.addEventListener("click", () => {
  if (container.children.length === 0) {
    confirm("Please pick a layout first");
  }
  const pixelDivs = document.querySelectorAll(".draw");
  pixelDivs.forEach((pixelDiv) => {
    pixelDiv.style.backgroundColor = "white";
  });
});
function erase() {}
function createDivs(numberOfDivs) {
  container.style.gridTemplateColumns = `repeat(${numberOfDivs}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numberOfDivs}, 1fr)`;
  for (let i = 0; i < numberOfDivs * numberOfDivs; i++) {
    const x = document.createElement("div");
    x.classList.add("draw");
    x.addEventListener("mouseover", draw);
    x.setAttribute("id", i);
    container.appendChild(x);
  }
}
function draw(e) {
  document.getElementById(e.target.id).style.backgroundColor = "red";
}
