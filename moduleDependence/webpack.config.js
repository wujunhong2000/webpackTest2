const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
module.exports = {
  mode: "development",
  entry: "./src/app.js",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // 模块省略拓展名时，文件名相同，拓展名不同，引入顺序
    extensions: ['.js', '.json', '.vue']
  },
  plugins: [new HtmlWebpackPlugin(), new BundleAnalyzerPlugin()],
  externalsType: 'script', // 表示externals以什么形式载入
  externals: {
    // 可以定义第三方包
    jquery: 'jQuery', // key的名字要和第三方包的名字相同，值是在window对象上暴露的对象
    jquery: [
      'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.1/jquery.js',
      '$', // '$'表示script标签在浏览器暴露的对象
    ], 
  }
};
