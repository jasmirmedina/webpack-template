const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const miniCssRule = { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] };

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],

  module: { rules: [miniCssRule] },

  optimization: { minimizer: [new CssMinimizerPlugin()] }
});