const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./app.js",
  output: {
    publicPath: "/",
  },
  devServer: {
    static: path.join(__dirname, "./dist"),
    compress: false, // 是否在服务器进行代码压缩
    port: 8080,
    headers: {
      "X-Access-Token": "123123",
    },
    proxy: {
      "/api": "http://localhost:9000",
    },
    // https: true,
    historyApiFallback: true,
    host: '0.0.0.0', // 局域网内多设备访问
  },
  plugins: [new HtmlWebpackPlugin()],
};
