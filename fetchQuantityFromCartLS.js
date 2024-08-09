import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage.js"


export function fetchQuantityFromCartLS(id,price) {

  let cartProducts = getCartProductFromLocalStorage()

  let quantity = 1;

  let existingProduct= cartProducts.find((item) => item.id === id)

  if(existingProduct) {
    quantity = existingProduct.quantity
    price = existingProduct.price
  } 

  return {quantity,price}
  //console.log(existingProduct)
  
}