var path = require('path')
var webpack = require('webpack')
module.exports = {
    devtool: 'cheap-module-eval-source-map',//if you want to product app ,you need value is false
    entry: [   'webpack-dev-server/client?http://192.168.1.102:8080', //资源服务器地址
           'webpack/hot/only-dev-server',    './index.jsx'
    ],
    output: {
        publicPath: "http://192.168.1.102:8080",
        path: './',
        filename: "bundle.js"
    },
    output: {
        path: path.join(__dirname, ''),
        filename: 'bundle.js',
        publicPath: ''
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin()
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
