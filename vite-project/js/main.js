import "../styles/style.css";
import { merchandise } from "./merchandise";
document.querySelector('#app').innerHTML = `
  
  
`;
console.log(merchandise);

document.querySelector(".btn").addEventListener("click", function () {
     document.body.classList.add("warm");
    document.body.classList.remove("cool");
   
});

document.querySelector(".btn1").addEventListener("click", function () {
 
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
   
});

function cardCreator(array) {
  merchandise.forEach((mon) => {
    pkms.parent.insertAdjacentHTML(
      "beforeend",
      `<div class="child">
        <img class="display-img" src="${mon.img}"/>
        <h2 class="display-name">${mon.name}</h2>
        <h3 class="display-type">${mon.type}</h3>
  </div> `
    );
  });
}
