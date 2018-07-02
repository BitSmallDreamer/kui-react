/**
 * by chuchur /chuchur@qq.com
 * 打包vue 组件
 */
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //for webpack 4
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //for webpack 4
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path');
const webpackBaseConfig = require('./webpack.base.conf.js');
const merge = require('webpack-merge');
const pkg = require('../package.json');

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, '../src/index.jsx')
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "",
        filename: "k-ui.js",
        library: 'kui-react',
        libraryTarget: 'umd',
    },
    performance: {
        hints : false
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'], // : , 
                // use: ExtractTextPlugin.extract({ fallback: "style-loader", use: [{ loader: "css-loader" }, { loader: "less-loader" },], }),
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true
                    },
                    sourceMap: false
                }
            })
        ]
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
        new MiniCssExtractPlugin({ filename: 'k-ui.css' }),
        // new ExtractTextPlugin({filename:"k-ui.css"}),
        new webpack.BannerPlugin(pkg.name + ' v' + pkg.version + ' by chuchur (c) ' + new Date().getFullYear() + ' Licensed ' + pkg.license),
        // 允许错误不打断程序
        // new webpack.NoErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({ minimize: true })
    ],

})