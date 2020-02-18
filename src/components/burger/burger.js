import './burger.sass'

const burger = document.querySelector(`.burger`);

export const onClickBurger = (func) => {
  burger.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    func();
  });
}