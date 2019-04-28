const path = require('path');
const webpack = require('webpack');
//用于插入html模板
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清除输出目录，免得每次手动删除
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    entry: {
        index: path.join(__dirname, 'index.js')
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'js/[name].[hash].js'
    },
    resolve: { alias: { 'vue': 'vue/dist/vue.js' } },
    optimization: {
        minimize: true
    },
    module: {},
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        //持久化moduleId，主要是为了之后研究加载代码好看一点。
        new webpack.HashedModuleIdsPlugin(),
        new BundleAnalyzerPlugin(),
    ]
};
