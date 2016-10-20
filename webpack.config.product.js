var path = require('path')
var webpack = require('webpack')
module.exports = {
    devtool: 'false', //if you want to product app ,you need value is false
    entry: {
        "vendor": ["react", "react-dom", "react-router", "react-redux", "redux"],
        "app": "./index.jsx"
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: ''
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    query: {
        plugins: ["transform-class-properties"]
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/,
            include: __dirname
        }, {
            test: /\.css?$/,
            loaders: ['style', 'raw'],
            include: __dirname
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=50000&name=[path][name].[ext]'
        }]
    }
}


// When inside Redux repo, prefer src to compiled version.
// You can safely delete these lines in your project.
var reduxSrc = path.join(__dirname, '..', '..', 'src')
var reduxNodeModules = path.join(__dirname, '..', '..', 'node_modules')
var fs = require('fs')
if (fs.existsSync(reduxSrc) && fs.existsSync(reduxNodeModules)) {
    // Resolve Redux to source
    module.exports.resolve = {
            alias: {
                'redux': reduxSrc
            }
        }
        // Compile Redux from source
    module.exports.module.loaders.push({
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: reduxSrc
    })
}
