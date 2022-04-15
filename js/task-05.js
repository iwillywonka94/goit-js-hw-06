const inputValue = document.querySelector('input#name-input');
const spanValue = document.querySelector('span#name-output')

inputValue.addEventListener('input', onInputChange);

function onInputChange (event) {
    spanValue.textContent = event.currentTarget.value;
    if (spanValue.textContent === "") {
        spanValue.textContent = "Anonymous"
    }
}