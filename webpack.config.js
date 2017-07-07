var path = require('path');
var webpack = require('webpack');
var extractText = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/javascripts/soc-core',
        vendor: './src/javascripts/vendor',
        css: './src/stylesheets/soc.scss'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'shared'
        }),
        new extractText({
            filename: 'style.css',
            disable: false,
            allChunks: true
        }),
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ],

    devtool: 'source-map',
    devServer: {
        contentBase: 'dist'
    },

    module: {
        loaders: [{
            test: /\.scss$/,
            loader: extractText.extract('css-loader!sass-loader')
        }]
    },

    watch: false
};