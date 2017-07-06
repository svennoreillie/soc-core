var path = require('path');

module.exports = {
    context: path.resolve('src'),
    entry: './javascripts/soc-core.ts',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    devtool: 'source-map',
    resolve: { 
        extensions: [".tsx", ".ts", ".js", ".json"]
    },
    output: {
        filename: 'soc-core.js',
        sourceMapFilename: '[file].map',
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/'
    },
    devServer: {
        contentBase: 'public'
    },
    watch: false
};