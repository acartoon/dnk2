import './product.sass';
import '../offers.product/offers-product';
import '../count/count';
import '../product.property/product-property';
import '../accordion-mob/accordion-mob';
import '../button/button';
import $ from 'jquery';
import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
import { Accordion } from '../../js/accordion';
import 'slick-carousel/slick/slick-theme.scss';

$('.slick-main').slick({
  centerPadding: '0',
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slick-for',
  
  slickPrev: false,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: false,
  arrows: false,
});

$('.slick-for').slick({
  arrows: false,
  dots: false,
  centerMode: false,
  centerPadding: '0',
  slidesToShow: 1,
  responsive: [{
    breakpoint: 576,
    settings: {
      arrows: false,
      dots: true,
      dotsClass: 'dots',
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 1,
    }
  }]
});

const property = document.querySelectorAll(`.product__property`);

const accordion = new Accordion(property);
accordion.init();


const descriptionBlock = document.querySelector(`[property="description"]`)
accordion.openAccordion(descriptionBlock);
