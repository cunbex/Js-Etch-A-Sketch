const container = document.querySelector(".container");
const layout = document.querySelector("input[type=range]");
const eraser = document.querySelector("#eraser");
const colorMode = document.querySelector("#colormode");
const clear = document.querySelector("#clear");
const rainbowMode = document.querySelector("#rainbowmode");
const colorInput = document.querySelector("input[type=color]");
const buttons = document.querySelectorAll("button");
let colorType = 0;
let runningColor = "black";
let mouseDown = false;
container.onmousedown = () => (mouseDown = true);
container.onmouseup = () => (mouseDown = false);

window.addEventListener("load", createDivs(16));
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((button) => {
      button.style.backgroundColor = "#2ecc71";
    });
    document.getElementById(e.target.id).style.backgroundColor = "#8aaa8a";
  });
});
colorInput.addEventListener("change", (e) => {
  runningColor = e.target.value;
});
colorMode.addEventListener("click", () => {
  runningColor = colorInput.value;
  colorType = 0;
});
rainbowMode.addEventListener("click", () => {
  colorType = 1;
});
eraser.addEventListener("click", () => {
  colorType = 0;
  runningColor = "white";
});
layout.addEventListener("change", (e) => {
  container.replaceChildren();
  createDivs(e.target.value);
});

clear.addEventListener("click", () => {
  const pixelDivs = document.querySelectorAll(".draw");
  pixelDivs.forEach((pixelDiv) => {
    pixelDiv.style.backgroundColor = "white";
  });
});
function createDivs(numberOfDivs) {
  container.style.gridTemplateColumns = `repeat(${numberOfDivs}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numberOfDivs}, 1fr)`;
  for (let i = 0; i < numberOfDivs * numberOfDivs; i++) {
    const x = document.createElement("div");
    x.classList.add("draw");
    x.addEventListener("mouseover", draw);
    x.addEventListener("mousedown", draw);
    x.setAttribute("id", i);
    container.appendChild(x);
  }
}
function draw(e) {
  if (e.type === "mouseover" && !mouseDown) return;
  if (colorType === 0) {
    document.getElementById(e.target.id).style.backgroundColor = runningColor;
  } else {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    document.getElementById(
      e.target.id
    ).style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }
}
