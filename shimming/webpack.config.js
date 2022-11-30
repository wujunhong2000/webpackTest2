const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      _: 'lodash' // 遇到_，则将lodash引入
     })
  ],
};
