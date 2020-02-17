export class Accordion {
  constructor(accordion, ) {
    this._accordion = accordion;
    this._activeAccordion = null;
  }

  init() {
    this._accordion.forEach((accordion) => {
      this._initAccordion(accordion)
    });
  }
  
  _closeAccordion(accordion) {
    accordion.classList.remove(`active`)
    const accordionBody = accordion.lastElementChild;
    accordionBody.style.maxHeight = null;
  }

  _openAccordion(accordion) {
    const accordionBody = accordion.lastElementChild;
    if(!accordionBody.style.maxHeight) {
      if(this._activeAccordion) {
        this._closeAccordion(this._activeAccordion)
      }
      accordion.classList.add(`active`)
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
      this._activeAccordion = accordion;
    } else {
      accordion.classList.remove(`active`)
      accordionBody.style.maxHeight = null;
    }
  }

  _initAccordion(accordion) {
    const toggle = accordion.firstElementChild;
 
    toggle.addEventListener(`click`, () => {
      this._openAccordion(accordion);
    })
  }
}