export const homeToggleEvent = (e,id,stock) =>{
  let card  = document.querySelector(`#card${id}`)
console.log(stock)
  let productQuantity = card.querySelector(".productQuantity")
  //console.log(productQuantity)
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1
  //console.log(quantity)
  
if(e.target.className === "cartIncrement" ) {
  if(quantity < stock) {
      quantity += 1
  } else if (quantity == stock) {
     quantity = stock 
  }
}

  if(e.target.className === "cartDecrement" ) {
     if(quantity  > 1) {
         quantity -= 1
     }
  }
  productQuantity.setAttribute("data-quantity",quantity)
  productQuantity.textContent = quantity

}