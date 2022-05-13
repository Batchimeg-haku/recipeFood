const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin"); //src/index.html ийг index.html bundle руу хөрвүүлэхдээ output ын main.js г.м script уудыг холбох ыг холбох 

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'docs'),
    },
    devServer: {
        contentBase: './docs',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
    ],
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }]
                ]
              }
            }
          }
        ]
      }
};