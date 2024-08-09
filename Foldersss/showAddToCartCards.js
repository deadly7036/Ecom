import { getCardFromLocalStorage } from "./getCard.js"
import { fetchDataFromLs } from "./fetchDataFromLs.js"
import products from "./api/products.json"
import { removeFromCart } from "./removeFromCart.js"
import {incrementDecrement} from "./incrementDecrement.js"
import { updateProductTotal} from "./updateProductTotal.js"
let curElm = getCardFromLocalStorage()

//console.log(curElm)


let filterProducts = products.filter((item) => {
  return curElm.some((curE) => {
    return curE.id === item.id
  })
})

//console.log(filterProducts)

let productContainer = document.querySelector("#productCartContainer")
let cardTemplate = document.querySelector("#productCartTemplate")

function showCart() {

  filterProducts.forEach((curPro) => {
    const { category, id, image, name, stock, price } = curPro
    let productClone = document.importNode(cardTemplate.content, true)

    let lSActualData = fetchDataFromLs(id, price)


    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;


    productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
    productClone.querySelector(".productPrice").textContent =
      lSActualData.price;


    productClone.querySelector(".stockElement").addEventListener("click", (event) => {
        incrementDecrement(event, id,stock,price);
    })
    productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => {
     removeFromCart(id)
    })
    productContainer.appendChild(productClone)
  })


}

showCart()


updateProductTotal()