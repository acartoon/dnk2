import './filter-categories.sass'
import '../filter/filter.sass'
import { Accordion } from '../../js/accordion';

const filterList = document.querySelectorAll(`.filter-categories__item`);

const accordion = new Accordion(filterList);
accordion.init();
