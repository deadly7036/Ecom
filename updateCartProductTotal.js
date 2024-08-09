import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage.js"





export function updateCartProductTotal() {
  let subTotal = document.querySelector(".productSubTotal")
    let totalFinal = document.querySelector( ".productFinalTotal")
    let cardPrice = getCartProductFromLocalStorage()
console.log(cardPrice)
   let newPrice = cardPrice.reduce((acc,item) => acc  +  item.price ,0)


  subTotal.innerText = `₹${newPrice}`
    totalFinal.innerText = `₹${newPrice + 50}`
  
}
  
 //console.log(newPrice)
   

  



updateCartProductTotal() 