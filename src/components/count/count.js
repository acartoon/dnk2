import './count.sass'

const counter = document.querySelectorAll(`.count`)

const getCounter = (counterElem) => {
  const minus = counterElem.querySelector(`.count__btn--minus`);
  const plus = counterElem.querySelector(`.count__btn--plus`);
  const count = counterElem.querySelector(`.count__count`);
  let value = Number(count.innerHTML);

    minus.addEventListener(`click`, () => {
      let result = value === 1 ? value: --value;
      count.innerHTML = result;
    })

    plus.addEventListener(`click`, () => {
      console.log(value)
      count.innerHTML = ++value;
    })

}

counter.forEach(getCounter)