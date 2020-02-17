import './catalog.sass'
import '../../components/filter.catalog/filter-catalog'
import '../../components/filter.categories/filter-categories'
import '../../components/catalog.list/catalog-list'
import '../../components/button/button'
import { Modal } from '../../js/modal'


const filterBtn = document.querySelectorAll(`.catalog__btn-filter`);

const removeСhoice = () => {

}

filterBtn.forEach((button) => {
  const filterType = button.getAttribute(`filter-type`);
  button.addEventListener(`click`, () => {
    const filter = document.querySelector(`[filter=${filterType}]`)
    const modal = new Modal(filter, removeСhoice);
    modal.init();
  })
})
