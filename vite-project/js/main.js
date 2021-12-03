import "../styles/style.css";
import { products } from "./products";
document.querySelector('#app').innerHTML = `
  
  
`;
console.log(products);

document.querySelector(".btn").addEventListener("click", function () {
     document.body.classList.add("warm");
    document.body.classList.remove("cool");
   
});

document.querySelector(".btn1").addEventListener("click", function () {
 
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
   
});


products.forEach((product)=>)