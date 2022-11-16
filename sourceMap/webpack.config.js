const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
   mode: 'development',
   entry: './app.js',
   // source-map 浏览器中代码位置关联打包前代码文件的位置（锁定代码行数），方便开发定位代码
   // 生产环境不使用source-map（原因：反编译、文件体积大）
   // devtool: false,
   // devtool: 'eval',
   // devtool: 'source-map',
   // devtool: 'hidden-source-map', // 不锁定代码行数
   // devtool: 'inline-source-map',
   // devtool: 'cheap-source-map', // 减少main.js.map文件的大小
   devtool: 'cheap-module-source-map', // 减少main.js.map文件的大小（开发环境推荐使用）
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          },
      ]
   },
   plugins: [
      new HtmlWebpackPlugin(),
    ],
}