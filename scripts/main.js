import { card } from "../components/card.js";
import { referenceList } from "../data/reference.js";
import { renderToDom } from "../utils/renderToDom.js";

// .forEach()

// .includes()

// .filter()

// .reduce()

// .map()


// ******* SAVE FOR CONNECTING IT ALL TOGETHER ******
const startApp = () => {
  let refStuff = "";
  referenceList.forEach((item) => {
    refStuff += card(item);
  });

  renderToDom("#cards", refStuff);
}
startApp();
