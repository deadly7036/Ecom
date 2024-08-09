
const updateCarts = document.querySelector("#cartValue");

export const updateCart = (lengthProperty) =>{
  return updateCarts.innerHTML = `
  <i class="fa-solid fa-cart-shopping">${lengthProperty}</i>
  `
}



/*

cartValue">
              <i class="fa-solid fa-cart-shopping"> 0 </i>
*/

