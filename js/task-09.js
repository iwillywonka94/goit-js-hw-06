const button = document.querySelector(".change-color")
const span = document.querySelector(".color")
const background = document.querySelector("body")
button.addEventListener("click", onButtonClickChangeColor);

function onButtonClickChangeColor(event) {
  event.preventDefault();
  const color = getRandomHexColor();
  background.style.backgroundColor = color;
  span.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}