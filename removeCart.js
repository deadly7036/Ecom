import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage.js"


import {updateCartValue} from "./updateCartValue.js"

export function removeCart(id) {

  // console.log(id)
let cartProduct = getCartProductFromLocalStorage()

  let cartProducts = cartProduct.filter((product) => product.id !== id)

  localStorage.setItem("productDetails",JSON.stringify(cartProducts))


  let removeDiv = document.querySelector(`#card${id}`)

  if(removeDiv){
    removeDiv.remove()
  }

  
 updateCartValue(cartProducts)
  
  
}
