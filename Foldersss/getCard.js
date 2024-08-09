  import {updateCart} from "./updateCart.js"

export const getCardFromLocalStorage = () => {
  let cardItem = JSON.parse(localStorage.getItem("productDetails"))

  if(!cardItem) {
    return []
  }
  updateCart(cardItem.length)
  return cardItem
  
}