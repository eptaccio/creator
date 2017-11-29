const webpack = require('webpack')
const { resolve } = require('path')
const UnglifyJS = webpack.optimize.UglifyJsPlugin

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new UnglifyJS({
      mangle: false,
      sourceMaps: false
    })
  ],
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015', 'react'
          ]
        }
      },

      // CSS
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
}
