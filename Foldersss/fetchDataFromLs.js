import {getCardFromLocalStorage} from "./getCard.js"


export const fetchDataFromLs = (id,price) =>{

  
let cartProducts = getCardFromLocalStorage();

  let existingProduct = cartProducts.find((curProd) => curProd.id === id);
  let quantity = 1;

  if (existingProduct) {
    
    quantity = existingProduct.productQuantity;
    console.log(quantity)
    price = existingProduct.price;
  }

  return { quantity, price };
}