
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
     mode: 'development',
     devtool: 'inline-source-map',
     devServer: {
      contentBase: './build',
    },
     entry: './src/index.js',
     output: {
          path: path.resolve(__dirname, "build"),
          publicPath: '/',
        },
     plugins: [
     new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html")
     }),
     new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
     new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
     })
     ],
     module: {
          rules: [
            {
              test: /\.(sa|sc|c)ss$/,
              use: ["style-loader","css-loader","sass-loader"]
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
            {
               test: /\.js$/,
               exclude: /node_modules/,
               use: ["babel-loader"]
             },
          ]
        },
     optimization: {
     splitChunks: { chunks: "all" }
     },
}