
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
     mode: 'development',
     entry: './src/index.js',
     output: {
          path: path.resolve(__dirname, "build")
        },
     plugins: [
     new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html")
     })
     ],
     module: {
          rules: [
            {
              test: /\.[css|scss]$/,
              use: ["style-loader","css-loader"]
            },
            {
               test: /\.js$/,
               exclude: /node_modules/,
               use: ["babel-loader"]
             }
          ]
        },
     optimization: {
     splitChunks: { chunks: "all" }
     },
}