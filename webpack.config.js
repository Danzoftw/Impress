const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
  path: path.join(__dirname, '/dist'),
  filename: 'index.bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
   port: 3000,
   contentBase: path.join(__dirname, './'), // where dev server will look for static files, not compiled
   publicPath: '/', //relative path to output path where  devserver will look for compiled files
   watchContentBase: true
  },
  module: {
    rules: [
      { // config for es6 jsx
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: "asset",
      },
    ]
  },
 plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};