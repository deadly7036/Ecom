import { getCardFromLocalStorage } from "./getCard.js"

import { updateProductTotal} from "./updateProductTotal.js"


export function incrementDecrement(e, id, stock, price) {
   const currentCardElement = document.querySelector(`#card${id}`);
   const productQuantity = currentCardElement.querySelector(".productQuantity");
   const productPrice = currentCardElement.querySelector(".productPrice");
   //console.log(id)
   let cardItem = getCardFromLocalStorage()
   let existingProd = cardItem.find(item => item.id === id)
   //  console.log(newCardItem)
   //console.log(existingProd)

   let quantity = 1;
   let lsPrice = 0

   if (existingProd) {
      console.log(existingProd, "Yhis is existing product")
      quantity = existingProd.productQuantity
      lsPrice = existingProd.price
   } else {
      lsPrice = price;
      price = price
   }

   if (e.target.className === "cartIncrement") {
      if (quantity < stock) {
         quantity += 1
      } else if (quantity == stock) {
         quantity = stock
         lsPrice = Number(price * quantity)
      }
   }

   if (e.target.className === "cartDecrement") {
      if (quantity > 1) {
         quantity -= 1
      }
   }

   if(lsPrice) {
      lsPrice = Number(lsPrice * quantity)
      lsPrice = lsPrice.toFixed(2)
   
   }

   let newItem = { id, productQuantity: quantity, price: lsPrice }
    console.log(cardItem)
   newItem = cardItem.map((item) => {
      return item.id === id ? newItem : item
   })

   localStorage.setItem("productDetails", JSON.stringify(newItem))

   productQuantity.innerText = quantity

   productPrice.innerText = lsPrice

updateProductTotal()
}

//console.log('page refreshed')