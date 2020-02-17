import './filter-catalog.sass'
import '../filter/filter.sass'
import '../toggle/toggle.js'
import { Accordion } from '../../js/accordion';

const filterList = document.querySelectorAll(`.filter-catalog__item`);

const accordion = new Accordion(filterList);
accordion.init();


// const closeDropdown = (filterItem) => {
//   filterItem.classList.remove(`active`)
//   const filterBody = filterItem.querySelector(`.filter-catalog__filter`);
//   filterBody.style.maxHeight = null;
// }

// const openFilter = (filterItem) => {
//   const filterBody = filterItem.querySelector(`.filter-catalog__filter`);
//   if(!filterBody.style.maxHeight) {
//     if(activeFilter) {
//       closeDropdown(activeFilter)
//     }
//     filterItem.classList.add(`active`)
//     filterBody.style.maxHeight = filterBody.scrollHeight + 'px';
//     activeFilter = filterItem;
//   } else {
//     filterItem.classList.remove(`active`)
//     filterBody.style.maxHeight = null;
//   }
// }

// let activeFilter = null;

// filter.forEach((filterItem) => {
//   const title = filterItem.querySelector(`.filter-catalog__title`);
//   const btn = filterItem.querySelector(`.button`);
//   title.addEventListener(`click`, () => {
//     openFilter(filterItem)
//     btn.addEventListener(`click`, () => {
//       closeDropdown(filterItem)
//     })
//   })
// });

// document.addEventListener(`click`, (evt) => {
//   const target = evt.target;
//   if(!target.closest(`.filter-catalog__item`) && activeFilter) {
//     closeDropdown(activeFilter)
//   }
// })
