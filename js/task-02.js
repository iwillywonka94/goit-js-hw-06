const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")
const listArray = ingredients.map(element => {
  const listItem = document.createElement("li");
  listItem.textContent = element;
  listItem.classList.add("listItem")
  return listItem;
})

list.prepend(...listArray)