const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    //入口
    entry: './src/index.js',
    //出口
    output: {
        //制定输出的路径
        path: path.resolve(__dirname, 'dist'),
        //输出的js文件名
        filename: 'main.js',
    },
    mode: 'production',
    //插件
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            //ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    //加载器
    module: {

        rules: [{
            test: /\.scss$/,
            use: [
                //"style-loader", // creates style nodes from JS strings
                //"css-loader", // translates CSS into CommonJS
                // "sass-loader" // compiles Sass to CSS, using Node Sass by default
                //process.env.NODE_ENV !== 'production' ? 'style-loader' :
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }]
    },
}