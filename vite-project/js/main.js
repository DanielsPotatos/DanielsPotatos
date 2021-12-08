import "../styles/style.css";
import { merchandise } from "./merchandise";
console.log(merchandise);

const DOMSelector = {
  warm: document.getElementById("btn"),
  dark: document.getElementById("btn1"),
  cheap: document.getElementById("btn2"),
  expensive: document.getElementById("btn3"),
  buttons: document.querySelectorAll("button"),
  parent: document.querySelector(".parent"),
};

document.querySelector(".btn").addEventListener("click", function () {
  document.body.classList.add("warm");
 document.body.classList.remove("cool");

});

document.querySelector(".btn1").addEventListener("click", function () {

 document.body.classList.add("cool");
 document.body.classList.remove("warm");

});




function clear() {
  DOMSelector.parent.innerHTML = "";
}
function adder(pokemon) {
  DOMSelector.parent.insertAdjacentHTML(
    "beforeend",
    `<div class="child">
    <img class="display-img" src="${pokemon.img}"/>
    <h2 class="display-name">${pokemon.name}</h2>
    <h3 class="display-price">${pokemon.price}</h3>
</div> `
  );
}

function cardCreator() {
  merchandise.forEach((mon) => {
    adder(mon);
  });
}
cardCreator();


document.querySelector(".btn2").addEventListener("click", function () {
  clear();
  const cheap = merchandise.filter((merchandise) => merchandise.price <= 10);
  cheap.forEach((mon) => {
    adder(mon);
  });
});

document.querySelector(".btn3").addEventListener("click", function () {
  clear();
  const expensive = merchandise.filter((merchandise) => merchandise.price >= 10);
  expensive.forEach((mon) => {
    adder(mon);
  });
});