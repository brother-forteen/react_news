var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: __dirname,
    entry: '../src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'

        // filename: '[name].[hash:8].bundle.js',
        // chunkFilename: '[name]-[hash:8].bundle.js',
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                } //将react编译成js文件
            },{
  				      test: /\.css$/,
				        // loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[loacl]___[hash:base64:5]'
                loader:'style-loader!css-loader'
			      },{
              test: /\.(png|jpg|gif|svg|ttf)$/,
              loader: 'file-loader',
              options: {
                name: '[name].[ext]?[hash]'
              }
            }
        ]
    }
};
