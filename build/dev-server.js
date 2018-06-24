/**
 * @author zhangyi
 * @date 2018/6/24
 */
/**
 * @author zhangyi
 * @date 2018/5/25
 */
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const getDevConfig = require('./webpack.dev.config');

const port = 3001;

const compiler = webpack(getDevConfig({ port }));



const server = new webpackDevServer(compiler, {
    host: '127.0.0.1',
    stats: { colors: true },
    hot: true,
}).listen(port, '0.0.0.0', function(err) {
    console.log('err----:', err);
    console.log("\n-------------\n");
    console.log(`http://127.0.0.1:${port}/index.html`);
});
