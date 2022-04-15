const button = document.querySelector(".change-color")
const span = document.querySelector(".color")
const background = document.querySelector("body")
button.addEventListener("click", onButtonClickChangeColor);

function onButtonClickChangeColor(event) {
  event.preventDefault();
  background.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}