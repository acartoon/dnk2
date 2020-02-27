const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const entryJs = (pages) => {
  const result = pages.reduce((res, page) => {
    res[page.name] = [`./src/pages/${page.adress}.js`];
    return res;
  }, {});
  // result['app'] = ['./src/template/template.js'];
  return result;
}

const pages = [
  {name: 'index', adress: 'main/index', chunks: 'index'},
  {name: 'basket', adress: 'basket/basket', chunks: 'basket'},
  {name: 'product', adress: 'product/product', chunks: 'product'},
  {name: 'payment', adress: 'payment/payment', chunks: 'payment'},
  {name: 'catalog', adress: 'catalog/catalog', chunks: 'catalog'},
  {name: 'catalog-menu', adress: 'catalog.menu/catalog-menu', chunks: 'catalog_menu'},
  {name: 'order', adress: 'order/order', chunks: 'order'},
];
// {name: 'app', adress: 'template.js', chunks: 'template'},
// let isProduction = (process.env.NODE_ENV == "production");

module.exports = {
  // context: __dirname + `/src/pages/`,
  devtool: 'source-map',
  mode: "development",
  entry: entryJs(pages),
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
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 1,
      minChunks: 4,
      name: 'common'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
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
        test: /\.(scss|sass|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                // sourceMap: true
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
        chunks: [page.chunks],
        css: [page.chunks],
    })),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new ExtractTextPlugin(
      {filename: 'style/[name].css'}
    ),
    // new OptimizeCssAssetsPlugin({
    //   assetNameRegExp: /\.optimize\.css$/g,
    //   // cssProcessor: require('cssnano'),
    //   cssProcessorPluginOptions: {
    //     preset: ['default', { discardComments: { removeAll: true } }],
    //   },
    //   canPrint: true
    // }),

    new CopyWebpackPlugin([{
      from: './src/img',
      to: './img'
    }])
  ]
}
