/**
 * @author zhangyi
 * @date 2018/5/25
 */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


const contextPath = path.join(__dirname, '../example');
const nodeModules = path.join(__dirname, '../node_modules');
const devMode = process.env.NODE_ENV === 'development';

let cssLoader = [
    { loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader },
    { loader: 'css-loader' }
];

const lessLoader = cssLoader.concat({ loader: 'less-loader'});

module.exports = {

    output: {
        path: path.join(__dirname, `../dist`),
        publicPath: "/",
        filename: "[name].[hash:4].js"
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: contextPath,
                exclude: nodeModules,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: nodeModules,
                use: cssLoader
            },
            {
                test: /\.less$/,
                exclude: nodeModules,
                use: lessLoader
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: `[name].[hash:4].[ext]`
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    limit: 8192,
                    name: `[name].[hash:4].[ext]`
                }
            },
            {
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                use: 'file-loader',
                // options: {
                //     name: `./assets/img/[name].[hash:4].[ext]`
                // }
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name].[hash:4].css`,
            chunkFilename: `[name].[hash:4].css`,
        }),
        new HtmlWebpackPlugin({
            filename: `index.html`,
            template: 'index.html'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
    ],

    optimization: {
        minimizer: devMode ? [] : [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    },

};
