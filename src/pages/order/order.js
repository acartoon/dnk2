import '../../template/template'
import './style.sass'
// import '../../style/text.sass'
import '../../components/user.help/script'
import '../../components/help.pop/script'
import $ from 'jquery';
import slick from 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import '../../style/dots.sass'

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

const helpBlock = document.querySelector('.order__help-pop');
const close = helpBlock.querySelector('.help-pop__close');

const helpLink = document.querySelector(`[action='help']`);


helpLink.addEventListener('mouseover', () => {
  helpBlock.style.display='block';
  close.addEventListener('click', () => {
    helpBlock.style.display=null;
  })
})

setTimeout(() => {
  new HoverIntent({
    elem,
    over() {
      tooltip.style.left = elem.getBoundingClientRect().left + 5 + 'px';
      tooltip.style.top = elem.getBoundingClientRect().bottom + 5 + 'px';
      tooltip.hidden = false;
    },
    out() {
      tooltip.hidden = true;
    }
  });
}, 2000);
