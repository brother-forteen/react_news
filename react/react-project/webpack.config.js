var webpack = require("webpack");
var path = require("path");

module.exports = {
    context: __dirname + '/src',
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'

        // filename: '[name].[hash:8].bundle.js',
        // chunkFilename: '[name]-[hash:8].bundle.js',
    },
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
			      }
        ]
    },
};
