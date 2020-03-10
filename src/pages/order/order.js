import '../../template/template'
import '../../components/product.order/script'
import './style.sass'
import '../../style/text.sass'
import '../../components/user.help/script'
import '../../components/help.pop/script'

const helpBlock = document.querySelector('.order__help-pop');
const close = helpBlock.querySelector('.help-pop__close');

const helpLink = document.querySelector(`[action='help']`);


helpLink.addEventListener('mouseover', () => {
  helpBlock.style.display='block';
  close.addEventListener('click', () => {
    helpBlock.style.display=null;
  })
})
