import './product.sass';
import '../offers.product/offers-product';
import '../count/count';
import '../product.property/product-property';
import '../accordion-mob/accordion-mob';
import '../button/button';
import $ from 'jquery';
import slick from 'slick-slider';
import 'slick-slider/slick/slick.scss';
// import 'slick-slider/slick/slick-theme.scss';


$('.slick-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  focusOnSelect: true,
  appendArrows: 'click',
  adaptiveHeight: true,

  responsive: [{
    breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }

  ]
  // asNavFor: '.slick-main'
});

$('.slick-main').slick({
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