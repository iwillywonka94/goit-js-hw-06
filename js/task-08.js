const form = document.querySelector(".login-form")
form.addEventListener("submit", onSubmitObject)

function onSubmitObject (event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === "" || password === "") {
        return alert("Fill in all fields please");
    }

    const formBase = {
        email,
        password,
    }
    
    console.log(formBase)
}