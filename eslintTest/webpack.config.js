const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./app.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'eslint-loader']
      }
    ],
  },
  devServer: {
    client: {
      overlay: true, // 关闭页面eslint提示
    }
  },
  plugins: [new HtmlWebpackPlugin()],
};
