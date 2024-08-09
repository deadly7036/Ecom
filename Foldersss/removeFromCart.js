import {getCardFromLocalStorage} from "./getCard.js"
import {updateCart} from "./updateCart.js"
export const  removeFromCart = (id) => {
  //console.log(id)
  const cardItem = getCardFromLocalStorage()
   let newItem;
  newItem = cardItem.filter((item) => item.id !== id)
  localStorage.setItem("productDetails",JSON.stringify(newItem))
  let removeDiv = document.querySelector(`#card${id}`)
  if(removeDiv) {
    removeDiv.remove()
  }
updateCart(newItem.length)
  
}