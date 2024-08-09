import products from "./api/products.json"

import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js"

import { removeCart} from "./removeCart.js"

import { incrementDecrement } from "./incrementDecrement.js"


import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage.js"

let cartProducts = getCartProductFromLocalStorage()
//console.log(cartProducts)

let filterItems = products.filter((cur) => {
  return cartProducts.some((item) => cur.id === item.id)
})


console.log(filterItems)



let productContainer = document.querySelector("#productCartContainer")
let cardTemplate = document.querySelector("#productCartTemplate")
function showAddToCartCards() {

 
  
  filterItems.forEach((curItem) =>{

  const { category, id, image, name, stock, price } = curItem;
    let productClone = document.importNode(cardTemplate.content, true)

  let newPrice = fetchQuantityFromCartLS(id,price)
  productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;

    productClone.querySelector(".productQuantity").textContent = newPrice.quantity

productClone.querySelector(".productPrice").textContent = newPrice.price;


    productClone.querySelector(".stockElement").addEventListener("click", (event) => {
        incrementDecrement(event,id,stock,price);
    })
    productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => {
     removeCart(id)
    })
    
    
productContainer.appendChild(productClone)



    
  })
    

  }

showAddToCartCards()
