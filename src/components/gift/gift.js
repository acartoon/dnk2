import '../input/input'
import './gift.sass'

const giftButton = document.querySelector(`.gift__button`);
// const giftInput = document.querySelectorф(`.gift__used-remove`);
const giftContainer = document.querySelector(`.gift`);


// class GiftUsed {
//   constructor(container) {
//     this._container = container;
//     this._template = require("./gift-used.pug");
//     this._removeBtn = 
//   }

//   _removeGift() {

//   }
// }
const template = require("./gift-used.pug");

giftButton.addEventListener(`click`, () => {
  giftContainer.insertAdjacentHTML(`beforeend`, template)
});