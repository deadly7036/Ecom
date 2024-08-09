
import { homeToggleEvent } from "./homeToggleEvent.js"
import { addToCart } from "./addToCart.js"
const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");


export const showProductContainer = (products) => {
  if (!products) {
    return flase
  }

  products.forEach((curPro) => {


    const { brand, category, description, id, image, name, price, stock } = curPro


    const productClone = document.importNode(productTemplate.content, true);


    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${price * 4
      }`;
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeToggleEvent(event, id, stock);
      });

    productClone.querySelector(".add-to-cart-button").addEventListener("click", (e) => {
      addToCart(e, id, stock)
    });

    if(productContainer) {   productContainer.appendChild(productClone)
    }

  })


} 