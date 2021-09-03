const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", 'css-loader'],
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}