


const updateCart = document.querySelector("#cartValue");



export function updateCartValue(cart) {
  return updateCart.innerHTML = `
  <i class="fa-solid fa-cart-shopping">${cart.length}</i>
  `
}



