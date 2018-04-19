var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    quiet: false,//suppress error shown in console,has to be set to false
    noInfo: false,
    stats: {
        //config for minimal console.log mess.
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    }
}).listen(3000, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at 3000');
})