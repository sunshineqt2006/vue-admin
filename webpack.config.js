const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const url = require('url')
const publicPath = ''

const isDev = process.env.npm_lifecycle_event=='dev' ? true : false
let options = isDev ? require('./config/dev.js') : require('./config/pro.js');

module.exports = () => ({
  entry: {
    vendor: ['vue','element-ui'],
    index: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDev ? '[name].js' : 'js/[name].js?[chunkhash]',
    chunkFilename: 'js/[id].js?[chunkhash]',
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        loaders: 'less-loader'
    },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: path.posix.join('assets', 'image/[name].[hash:7].[ext]')
          }
        }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    }),
    new webpack.DefinePlugin({//运行时变量
      '_BASE_URL':JSON.stringify(options.apiBaseUrl),
      '_MOCK':false,//模拟数据
  })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~': path.resolve(__dirname, 'src'),
      'assets': path.resolve('src', 'assets'),
      'components': path.resolve('src', 'components'),
      'views': path.resolve('src', 'views'),
      'styles': path.resolve('src', 'styles'),
      'api': path.resolve('src', 'api'),
      'utils': path.resolve('src', 'utils'),
      'store': path.resolve('src', 'store'),
      'router': path.resolve('src', 'router'),
      'mock': path.resolve('src', 'mock'),
      'static': path.resolve('src', 'static')
    }
  },
  devServer: {
    host: '127.0.0.1',
    port: 8010,
    proxy: options.proxy,
    historyApiFallback: {
      index: url.parse(options.dev ? '/assets/' : publicPath).pathname
    }
  },
 // devtool: options.dev ? '#eval-source-map' : '#source-map'
})
