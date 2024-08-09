import {homeQuantityToggle} from "./homeQuantityToggle.js"
import {addToCart} from "./addToCart.js"
const productTemplate = document.querySelector("#productTemplate")
const productContainer = document.querySelector("#productContainer")



export function showProductCards(products) {
  if(!products) {
    return false
  }

  products.forEach((curElm) => {
    const { brand, category, description, id, image, name, price, stock } = curElm

    const productClone = document.importNode(productTemplate.content, true)

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${price * 4
      }`;

//console.log(stock)
  productClone.querySelector(".stockElement").addEventListener("click",(e)=>{
    homeQuantityToggle(e,id,stock)
  })

    productClone.querySelector(".add-to-cart-button").addEventListener("click",(e)=>{
      e.preventDefault()
    addToCart(e,id,price)
  })

    
  productContainer.appendChild(productClone)
  })
  
}