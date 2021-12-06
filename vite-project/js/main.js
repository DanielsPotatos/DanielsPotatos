import "../styles/style.css";
import { merchandise } from "./merchandise";

console.log(merchandise);

document.querySelector(".btn").addEventListener("click", function () {
     document.body.classList.add("warm");
    document.body.classList.remove("cool");
   
});

document.querySelector(".btn1").addEventListener("click", function () {
 
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
   
});
const DOMSelector = {
  header: document.getElementById("header"),
  box: document.getElementById("whole"),
  dark: document.getElementById("dark-button"),
  light: document.getElementById("light-button"),
  fast: document.getElementById("fast"),
  fly: document.getElementById("fly"),
  ele: document.getElementById("electric"),
  poi: document.getElementById("poison"),
  wat: document.getElementById("water"),
  psy: document.getElementById("psychic"),
  buttons: document.querySelectorAll("button"),
  parent: document.querySelector(".parent"),
};

export { pkms };
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
