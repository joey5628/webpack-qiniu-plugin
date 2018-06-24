/**
 * @author zhangyi
 * @date 2018/5/26
 */
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config');

module.exports = webpackMerge(webpackBaseConfig, {

    mode: 'production',

    devtool: '#source-map',

    entry: [
        `./example/index.js`
    ]
});
