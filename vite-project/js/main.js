import "../styles/style.css";
import { merchandise } from "./merchandise";

console.log(merchandise);

document.getElementById("Dark-Theme").addEventListener("click", function () {
     document.body.classList.add("warm");
    document.body.classList.remove("cool");
  
});

document.getElementById("Light-Theme").addEventListener("click", function () {
 
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
   
});
const DOMSelector = {
  dark:document.getElementById("Dark-Theme"),
  light:document.getElementById("Light-Theme"),
  instock:document.getElementById("Instock"),
  notinstock:document.getElementById("Outofstock"),
  buttons: document.querySelectorAll("button"),
  parent: document.querySelector(".parent"),
};


function cardCreator(array) {
  merchandise.forEach((pokemon) => {
    DOMSelector.parent.insertAdjacentHTML(
      "beforeend",
      `<div class="child">
        <img class="display-img" src="${pokemon.img}"/>
        <h2 class="display-name">${pokemon.name}</h2>
        <h3 class="display-price">${pokemon.price}</h3>
  </div> `
    );
  });
}
