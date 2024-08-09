
import {getCardFromLocalStorage} from "./getCard.js"
import {updateCart} from "./updateCart.js"


getCardFromLocalStorage()
export const addToCart = (e,id,stock) =>{

  let getLocalStorage = getCardFromLocalStorage()
  const card  = document.querySelector(`#card${id}`)
 // console.log(card)
  let productQuantity = card.querySelector(".productQuantity").innerText
  let price = card.querySelector(".productPrice").innerText

  price = price.replace("₹","")
//  console.log(price )

  let existing = getLocalStorage.find(item => item.id === id)

 console.log(existing)
  if(existing && productQuantity > 1) {
    productQuantity = Number(existing.productQuantity) + Number(productQuantity)
     // console.log("Existing Product",productQuantity)
    price = Number(price * productQuantity)
    let newItem = {id,productQuantity,price}
   newItem = getLocalStorage.map((item) =>{
    return  item.id === id ? newItem : item
    })
    
localStorage.setItem("productDetails",JSON.stringify(newItem))

  }
  
 if(existing ) {
    return false
  }
  

  price = Number(price * productQuantity)
  productQuantity = Number(productQuantity)
 getLocalStorage.push({id,price,productQuantity})

  localStorage.setItem("productDetails",JSON.stringify(getLocalStorage))

  updateCart(getLocalStorage.length)
}