var APP_NAME = 'myapp'

var path = require('path');
var src_path = path.join(__dirname, 'src', APP_NAME);
var build_path = path.join(__dirname, 'build');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    context: src_path,
    entry: path.join(src_path, 'js', 'app.js'),
    output: {
        path: build_path,
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass'),
                include: path.join(__dirname, 'src', APP_NAME, 'scss')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ]
};
