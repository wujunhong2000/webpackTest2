const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./app.js",
  output: {
    publicPath: "/",
  },
  devServer: {
   hot: true, // 热替换，js需要单独配置 （webpack4中的HotModuleReplacementPlugin,webpack5内置）
   livereload: true, 
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })],
};
