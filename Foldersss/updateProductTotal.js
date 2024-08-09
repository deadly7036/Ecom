import {getCardFromLocalStorage} from "./getCard.js"




export function updateProductTotal() {
  let subTotal = document.querySelector(".productSubTotal")
  let totalFinal = document.querySelector( ".productFinalTotal")
  let cardPrice = getCardFromLocalStorage()

 cardPrice = cardPrice.reduce((accum,cur) =>{
    return accum +  cur.price
 },0)
  console.log(cardPrice)
  subTotal.innerText = `₹${cardPrice}`
  totalFinal.innerText = `₹${cardPrice + 50}`
}