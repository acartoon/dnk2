import './accordion-mob.sass';

const accordionList = document.querySelectorAll(`.accordion-mob`)

const useAccordion = (accordion) => {
  // закрыт аккордион
  let toggle = false;
  const title = accordion.querySelector(`.accordion__head`);
  const body = accordion.querySelector(`.accordion__body`);
  title.addEventListener(`click`, () => {
    toggle = !toggle;

    if(toggle) {
      accordion.classList.add(`accordion--open`);
      body.style.maxHeight = body.scrollHeight  + `px`;
    } else {
      accordion.classList.remove(`accordion--open`);
      body.style.maxHeight =  null;
    }
  })
};

accordionList.forEach((accordion) => {
  useAccordion(accordion)
});