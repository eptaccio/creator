const webpack = require('webpack')
const UnglifyJS = webpack.optimize.UglifyJsPlugin

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: __dirname + './dist',
    filename: 'bundle.min.js'
  },
  plugins: [
    new UglifyJsPlugin({
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
