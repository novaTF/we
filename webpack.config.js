const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'react-hot-loader',
        path.join(__dirname, './app/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, 'app')],
                exclude: /node_modules/,
                loader: 'babel-loader',
                options:
                    {
                        presets: ['babel-preset-react'] //@babel/preset
                    }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.tpl.html',
            inject: 'body',
            filename: './index.html'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'pocess.env.NODE_ENV': JSON.stringify('development')
        })
    ]
}