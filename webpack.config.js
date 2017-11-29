const webpack = require('webpack')
const UnglifyJS = webpack.optimize.UglifyJsPlugin

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: __dirname + './dist',
    filename: 'bundle.min.js'
  }
}
