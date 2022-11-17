///exporting module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);
/*
console.log('Importing module');

////IMPORTING EVERYTHING FROM A MODULE
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(shoppingCart.totalPrice)

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price); // is not a good practice
import { john } from './shoppingCart.js';
import add, { cart } from './shoppingCart.js';
add('Pizza', 3);
add('bread', 3);
add('Apple', 4);
console.log(cart);
// The import module is alive connection to the export module...
console.log(john);

//////////TOP LEVEL AWAIT
// console.log('start fetching');
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log('check');
// one thing to note is that the await keyword here is now blocking feature

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);
  return {
    title: data.at(-1).title,
    text: data.at(-1).body,
  };
};

const lastPost = await getLastPost();
console.log(lastPost);
// const lastPost = getLastPost();
//  this is not very clean
//  lastPost.then(res => console.log(res));
//  console.log(lastPost);

// MODULE PATTERN BEFOR ES6
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  let userId = 4;
  
  const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} added to cart`);
  };
  const orderStock = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} from supllier`);
  };
  //return a public api
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
    // userId,
  };
})();

shoppingCart2.addToCart('Apple', 5);
shoppingCart2.addToCart('Bread', 4);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);
console.log(shoppingCart2.userId);
*/
