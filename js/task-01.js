const categories = document.querySelector("#categories")
const elements = document.querySelectorAll(".item>ul")

console.log(`Number of categories: ${categories.children.length}`)
elements.forEach(element => console.log(`Category: ${element.previousElementSibling.textContent}
Elements: ${element.children.length}`))