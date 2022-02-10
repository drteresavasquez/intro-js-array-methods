import { card } from "../components/card.js";
import { referenceList } from "../data/reference.js";
import { renderToDom } from "../utils/renderToDom.js";

// .forEach()
const renderCards = (array) => {
  let refStuff = "";
  array.forEach((item) => {
    refStuff += card(item);
  });

  renderToDom("#cards", refStuff);
}

// .findIndex() & .includes()
const toggleCart = (event) => {
  if (event.target.id.includes("fav-btn")) {
    // GOOGLE: Destructuring assignment
    const [,id] = event.target.id.split('--');

    const index = referenceList.findIndex(item => item.id === Number(id));
    referenceList[index].inCart = !referenceList[index].inCart
    renderCards(referenceList);
  }
}

// .includes()

// .filter()

// .reduce()

// .map()


// ******* SAVE FOR CONNECTING IT ALL TOGETHER ******
const startApp = () => {
  // PUT ALL CARDS ON THE DOM
  renderCards(referenceList)

  // SELECT THE CARD DIV
  document.querySelector('#cards').addEventListener('click', toggleCart);
}
startApp();
