const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssRules = { test: /\.css$/i, use: ["style-loader", "css-loader"] };
const htmlRules = { test: /\.html$/i, loader: "html-loader" };
const assetsRules = { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" };
const fontsRules = { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' };

module.exports = {
  entry: "./src/main.js",

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],

  module: {
    rules: [ cssRules, htmlRules, assetsRules, fontsRules ]
  }
};