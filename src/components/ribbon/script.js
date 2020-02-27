import './style.sass'

import $ from 'jquery';
import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

$('.ribbon__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  slickPrev: false,
  dots: false,
  arrows: false,
  autoplay: false,
  autoplaySpeed: `4000`,
});