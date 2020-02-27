import '../../template/template'
const entryJs = (pages) => {
  return pages.reduce((res, page) => {
    res[page.name] = [`./src/pages/${page.adress}.js`];
    // console.log(res)
    return res;
  }, {})
}

const pages = [
  {name: 'product', adress: 'product/product', chunks: 'product'},
  {name: 'index', adress: 'main/index', chunks: ''},
  {name: 'basket', adress: 'basket/basket', chunks: 'basket'},
  {name: 'payment', adress: 'payment/payment', chunks: 'payment'},
  {name: 'catalog', adress: 'catalog/catalog', chunks: 'catalog'},
  {name: 'catalog-menu', adress: 'catalog.menu/catalog-menu', chunks: 'catalog_menu'},
  {name: 'order', adress: 'order/order', chunks: 'order'},
];

console.log(entryJs(pages))
console.log(`lsdfkjalsk`)