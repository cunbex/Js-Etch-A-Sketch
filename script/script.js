const container = document.querySelector(".container");
const setting = document.querySelector(".setting");
const addition = document.querySelector(".addition");
const start = document.querySelector(".start");

start.addEventListener("click", askForLayout);

function askForLayout() {
  let numberOfDivs = parseInt(
    prompt(
      "Enter a valid number less than 65 \nthis works like this input = 64 => layout = 64x64... \nPS: did the max layout 64x64 for the sake of my potato pc memory"
    )
  );
  if (isNaN(numberOfDivs) || numberOfDivs > 64) {
    askForLayout();
  }
  createDivs(numberOfDivs);
}
function createDivs(numberOfDivs) {
  container.removeChild(start);
  container.classList.remove("initial");
  container.style.border = "1px solid black";
  container.classList.add("grid");
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
