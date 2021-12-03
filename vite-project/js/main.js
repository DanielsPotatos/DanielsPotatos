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

merchandise.forEach((merchandise)=>)
