import { updateCartValue } from "./updateCartValue.js";

export function getCartProductFromLocalStorage() {
  let cart;
  try {
    cart = JSON.parse(localStorage.getItem("productDetails")) || [];
    if (!Array.isArray(cart)) {
      cart = [];
    }
  } catch (error) {
    cart = [];
  }

  updateCartValue(cart);
  return cart;
}
