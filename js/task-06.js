const form = document.querySelector("#validation-input")
const limit = Number(form.dataset.length)

form.addEventListener("blur", colorChanger)

function colorChanger (event) {
    event.preventDefault();
    if (form.value.length === limit) {
        form.classList.add("valid")
    } else {
        form.classList.replace("valid", "invalid")
    }
}
