import '../../template/template'
import './product.sass';
import '../../components/product.viewed/product-viewed.js'
import '../../components/catalog.viewed/catalog-viewed.js'
import '../../components/catalog.family/catalog-family.js'
import '../../components/product/product.js'
import '../../components/product.family/product-family.js'
import '../../components/catalog.look/catalog-look'
import '../../components/product.look/product-look.js'
import { Accordion } from '../../js/accordion';
import '../../components/user.help/script'
import '../../style/dots.sass'

const product = document.querySelectorAll(`.accordion`);

const accordion = new Accordion(product);
accordion.init();


const familyLink = document.querySelector(`[href="#family"]`);
familyLink.addEventListener(`click`, (e) => {
  e.preventDefault();
  const familyBlock = document.querySelector(`[id="family"]`)
  const accordionElem = familyBlock.querySelector(`.accordion`);
  accordion.openAccordion(accordionElem);
  familyBlock.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
});
