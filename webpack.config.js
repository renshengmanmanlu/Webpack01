var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app.js')],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 8099
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};