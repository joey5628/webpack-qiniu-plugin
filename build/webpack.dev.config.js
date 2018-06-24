/**
 * @author zhangyi
 * @date 2018/5/26
 */
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');

function getDevConfig({ port }) {

    return webpackMerge(webpackBaseConfig, {

        mode: 'development',

        devtool: "#source-map",

        entry: [
            `webpack-dev-server/client?http://0.0.0.0:${port}`,
            'webpack/hot/dev-server',
            `./example/index.js`
        ],

        plugins: [
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]
    })
}

module.exports = getDevConfig;
