import { getCartProductFromLocalStorage } from "./getCartProductFromLocalStorage.js";
import { updateCartValue } from "./updateCartValue.js";

getCartProductFromLocalStorage();
export const addToCart = (e, id, stock) => {
  let getLocalStorage = getCartProductFromLocalStorage();
  console.log('getLocalStorage:', getLocalStorage);
  console.log('Is Array:', Array.isArray(getLocalStorage));

  if (!Array.isArray(getLocalStorage)) {
    console.error('getLocalStorage is not an array');
    return;
  }

  const card = document.querySelector(`#card${id}`);
  let quantity = card.querySelector(".productQuantity").innerText;
  let price = card.querySelector(".productPrice").innerText;

  price = price.replace("₹", "");
  let existing = getLocalStorage.find((item) => item.id === id);
  console.log('Existing item:', existing);

  if (existing && quantity > 1) {
    quantity = Number(existing.quantity) + Number(quantity);
    price = Number(price * quantity);
    let newItem = { id, quantity, price };
    getLocalStorage = getLocalStorage.map((item) => {
      return item.id === id ? newItem : item;
    });

    localStorage.setItem("productDetails", JSON.stringify(getLocalStorage));
  }

  if (existing) {
    return false;
  }

  price = Number(price * quantity);
  quantity = Number(quantity);
  getLocalStorage.push({ id, price, quantity });

  localStorage.setItem("productDetails", JSON.stringify(getLocalStorage));

  updateCartValue(getLocalStorage);
};
