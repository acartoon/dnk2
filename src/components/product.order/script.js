import './style.sass'
import $ from 'jquery';
import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import '../../style/dots.sass'
import { trimStringLength } from '../../js/utils';

$('.order-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  slickPrev: false,
  dots: true,
  arrows: false,
  autoplay: false,
  autoplaySpeed: `4000`,
  dotsClass: 'dots',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});

const names = document.querySelectorAll(`.product-order__name`);

names.forEach((name) => {
  const result = trimStringLength(name.innerHTML, 35);
  name.innerHTML = result;
})
