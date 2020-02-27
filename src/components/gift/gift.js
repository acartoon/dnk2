import '../input/input'
import './gift.sass'
import '../info.block/info-block'

const giftButton = document.querySelector(`.gift__button`);
const giftInput = document.querySelector(`.gift__input`);
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
  giftInput.insertAdjacentHTML(`afterEnd`, template)
});