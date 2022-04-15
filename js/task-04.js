let counterValue = 0;
const counterRef = document.querySelector("#counter");
console.log(counterRef)
const decrement = document.querySelector('[data-action="decrement"]')
const increment = document.querySelector('[data-action="increment"]')

decrement.addEventListener("click", () => {
    counterValue -= 1
    value.innerHTML = counterValue
})

increment.addEventListener("click", () => {
    counterValue += 1
    value.innerHTML = counterValue
})