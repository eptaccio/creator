const { resolve } = require('path')
const webpack = require('webpack')
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
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015', 'react'
          ]
        }
      }
    ]
  }
}
