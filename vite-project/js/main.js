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
  warm: document.getElementById("btn"),
  dark: document.getElementById("btn1"),
  cheap: document.getElementById("btn2"),
  expensive: document.getElementById("btn3"),
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
cardCreator();


document.querySelector(".btn2").addEventListener("click", function () {
  const potato = merchandise.filter(pokemon => pokemon.price <= 10.0)
   
  console.log(potato);
 });
 
 document.querySelector(".btn3").addEventListener("click", function () {
   const potato2 = merchandise.filter(pokemon => pokemon.price >= 10.0)
    
   console.log(potato2);
  });
   
