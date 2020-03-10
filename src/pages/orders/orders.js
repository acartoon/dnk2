import '../../template/template'
import '../../components/product.order/script'
import './style.sass'
import '../../style/text.sass'
import '../../components/user.help/script'
import '../../components/help.pop/script'
import '../../components/filter.fast/script'
import '../../components/pagination/script'
import { CLIENT_WIDTH } from '../../js/utils'

const orders = {
  COUNT_PRODUCT: {
    xs: 3,
    md: 5
  },

  template: require("!!pug-loader! ../../../src/pages/orders/template.pug"),

  orderList: document.querySelectorAll(`.orders__order-list`),
  
  WINDOW_WIDTH: document.documentElement.clientWidth,
  // countProductToRender: this.orderList,

  // countProductToRender: (this.WINDOW_WIDTH > CLIENT_WIDTH.md) ? this.COUNT_PRODUCT.md : this.COUNT_PRODUCT.xs,

  transformProductList(productList) {
    const countProductToRender = (this.WINDOW_WIDTH > CLIENT_WIDTH.md) ? this.COUNT_PRODUCT.md : this.COUNT_PRODUCT.xs;
    const productListLength = productList.children.length;
    if(productListLength > countProductToRender) {
  
      for(let i = countProductToRender; i < productListLength; i++) {
        productList.children[i].classList.add(`orders__order-item--hidden`)
      }
      const count = productListLength - countProductToRender;
      productList.insertAdjacentHTML("beforeend", this.template({count}));
    }
  },

  init() {
    this.orderList.forEach((order) => {
      this.transformProductList(order)
    })
  }
}

orders.init();
