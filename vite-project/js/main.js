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
warm:document.getElementById("btn"),
dark:document.getElementById("btn1"),

};


function cardCreator(array) {
  merchandise.forEach((pokemon) => {
    pkms.parent.insertAdjacentHTML(
      "beforeend",
      `<div class="child">
        <img class="display-img" src="${pokemon.img}"/>
        <h2 class="display-name">${pokemon.name}</h2>
        <h3 class="display-price">${pokemon.price}</h3>
  </div> `
    );
  });
}
cardCreator();
