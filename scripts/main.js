import { card } from "../components/card.js";
import { referenceList } from "../data/reference.js";
import { renderToDom } from "../utils/renderToDom.js";

// .includes()

// .filter()

// .reduce()

// .map()

// .findIndex()
const toggleCart = (event) => {
  if (event.target.id.includes("fav-btn")) {
    // GOOGLE: Destructuring assignment
    const [,id] = event.target.id.split('--');

    const index = referenceList.findIndex(item => item.id === Number(id));
    referenceList[index].inCart = !referenceList[index].inCart
    renderCards(referenceList);
  }

}

// .forEach()
const renderCards = (array) => {
  let refStuff = "";
  array.forEach((item) => {
    refStuff += card(item);
  });

  renderToDom("#cards", refStuff);
}


// ******* SAVE FOR CONNECTING IT ALL TOGETHER ******
const startApp = () => {
  renderCards(referenceList)

  document.querySelector('#cards').addEventListener('click', toggleCart);
}
startApp();
