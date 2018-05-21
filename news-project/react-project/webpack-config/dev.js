const WebpackMerge = require('webpack-merge');
const Base = require('./base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = WebpackMerge(Base,{
  context: __dirname,
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: '../src/index.html',
      favicon: '../src/index.html'
    })
  ]
})
