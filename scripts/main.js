import { card } from "../components/card.js";
import { referenceList } from "../data/reference.js";
import { renderToDom } from "../utils/renderToDom.js";

// Reusable function to get the cards on the DOM
// .forEach()
const renderCards = (array) => {
  let refStuff = "<h1 class='text-white'>Cards Go Here!</h1>";
  renderToDom("#cards", refStuff);
}

// .findIndex() & .includes()
const toggleCart = (event) => {
  if (event.target.id.includes("fav-btn")) {
   console.log('Clicked Fav btn')
  }
}

// SEARCH
// .includes() & .filter()
const search = (event) => {
  const eventLC = event.target.value.toLowerCase();
  console.log(eventLC)
}

// BUTTON FILTER
// .filter() & .reduce()
const buttonFilter = (event) => {
  if(event.target.id.includes('free')) {
    console.log('FREE')
  }
  if(event.target.id.includes('cartFilter')) {
    console.log('cartFilter')
  }
  if(event.target.id.includes('books')) {
    console.log('books!')
  }
  if(event.target.id.includes('clearFilter')) {
    console.log('clearFilter')
  }
  if(event.target.id.includes('cartList')) {
    cartList();
  }
  
}

// .reduce()
const cartTotal = () => {
  const total = 0
  document.querySelector("#cartTotal").innerHTML = total.toFixed(2);
}

// .map()
const cartList = () => {
  return console.log('Cart List!')
}


const startApp = () => {
  // PUT ALL CARDS ON THE DOM
  renderCards(referenceList)

  // PUT CART TOTAL ON DOM
  cartTotal();

  // SELECT THE CARD DIV
  document.querySelector('#cards').addEventListener('click', toggleCart);

  // SELECT THE SEARCH INPUT
  document.querySelector('#searchInput').addEventListener('keyup', search)

  // SELECT BUTTON ROW DIV
  document.querySelector('#btnRow').addEventListener('click', buttonFilter);
}
startApp();
