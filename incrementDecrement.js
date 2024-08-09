import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage.js"

import {updateCartProductTotal} from "./updateCartProductTotal.js"

export function incrementDecrement(e,id,stock,price) {
  const currentCardElement = document.querySelector(`#card${id}`);
  const quantity = currentCardElement.querySelector(".productQuantity");
   const productPrice = currentCardElement.querySelector(".productPrice");


  let cartProduct = getCartProductFromLocalStorage();

  let existingProduct = cartProduct.find(
    (product) => product.id === id
  )

  let productQuantity = 0;
  let lsPrice = 0;

  //console.log(existingProduct)

  if(existingProduct) {
    productQuantity = existingProduct.quantity;
    lsPrice = existingProduct.price;
  } else {
    lsPrice  = price;
    price = price;
  }


  if(e.target.className === "cartIncrement")  {
    if(productQuantity < stock) {
        productQuantity+=1
    } else if(productQuantity === stock) {
        productQuantity = stock;
       lsPrice = price * productQuantity
    }
  }
  

  if(e.target.className === "cartDecrement") {
  if(productQuantity > 1) {
     productQuantity -= 1
  }
  }

  lsPrice = price * productQuantity
lsPrice = Number(lsPrice.toFixed(2));

  let newItem = {
id,price:lsPrice,quantity:productQuantity
  }

  let newCartProduct = cartProduct.map((item) => item.id === id ? newItem : item)


  localStorage.setItem("productDetails", JSON.stringify(newCartProduct))

  quantity.textContent = productQuantity;
  productPrice.textContent = lsPrice;

  
  updateCartProductTotal()
}