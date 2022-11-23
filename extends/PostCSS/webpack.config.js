const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/app.js",
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true, // 开启css模块化
          }
        }, 'postcss-loader'],
      }
    ],
  },
};
