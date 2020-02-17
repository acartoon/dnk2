const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pages = [
  {name: 'product', adress: 'product/product', chunks: 'product'},
  {name: 'index', adress: 'main/index', chunks: ''},
  {name: 'basket', adress: 'basket/basket', chunks: 'basket'},
  {name: 'payment', adress: 'payment/payment', chunks: 'payment'},
  {name: 'catalog', adress: 'catalog/catalog', chunks: 'catalog'},
  {name: 'catalog-menu', adress: 'catalog.menu/catalog-menu', chunks: 'catalog_menu'},
];
// let isProduction = (process.env.NODE_ENV == "production");

module.exports = {
  devtool: 'source-map',
  mode: "development",
  entry: {
    // context: path.resolve(__dirname, 'src'),
    basket: ['./src/pages/basket/basket.js'],
    product: ['./src/pages/product/product.js'],
    app: ['./src/template/template.js'],
    payment: ['./src/pages/payment/payment.js'],
    catalog: ['./src/pages/catalog/catalog.js'],
    catalog_menu: ['./src/pages/catalog.menu/catalog-menu.js'],

  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './dist'),
  },

  devServer: {
    contentBase: path.join(__dirname, `dist`),
    compress: false,
    open: true,
    port: 8082,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // { 
      //   test : /\.pug$/,
      //   use: { 
      //     loader: 'pug-loader',
      //     query: {} 
      //   }
      //  },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.pug$/,
        loaders: [{
            loader: "html-loader"
          },
          {
            loader: "pug-html-loader",
            options: {
              "pretty": true
            }
          }
        ]
      },
      {
        // test: /\.sass$/,
        test: /\.(scss|sass|css)$/,
        // test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            },
          ],
        })
      },
    ]
  },

  plugins: [
    ...pages.map(page => new HtmlWebpackPlugin({
        filename: `./${page.name}.html`,
        template: `./src/pages/${page.adress}.pug`,
        chunks: [page.chunks, 'app'],
        css: [page.chunks],
    })),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new ExtractTextPlugin(
      {filename: 'style/style.[name].css'}
    ),

    new CopyWebpackPlugin([{
      from: './src/img',
      to: './img'
    }]),
  ]
}
