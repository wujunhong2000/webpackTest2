const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  // entry: "./src/app.js",
  // entry: ["./src/app.js", "./src/app2.js", "lodash"], // 顺序：前->后
  entry: {
    main: {
      import: ["./src/app.js", "./src/app2.js"],
      dependOn: "lodash",
      filename: 'chanel1/[name].js',
    },
    main2: {
      import: "./src/app3.js",
      dependOn: "lodash",
      filename: 'chanel2/[name].js',
    },
    lodash: {
      import: "lodash",
      filename: 'common/[name].js',
    },
  }, // 在app.js或者app2.js中引用lodash，打包时不会将lodash打入main.js
  output: {
    clean: true, // 清理dist
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "多页应用",
      template: "./index.html",
      inject: "body",
      // filename: "index.html", // dist下的html文件名
      filename: 'chanel1/index.html',
      publicPath: 'http://www.abc.com', // script标签的引用路径
      chunks: ["main", "lodash"], // 只在/dist/index.html中引入main.js
    }),
    new HtmlWebpackPlugin({
      title: "多页应用2",
      template: "./index2.html",
      inject: "body",
      // filename: "index2.html", // dist下的html文件名
      filename: 'chanel2/index.html',
      publicPath: 'http://www.abc.com', // script标签的引用路径
      chunks: ["main2", "lodash"], // 只在/dist/index.html中引入main.js
    }),
  ],
};
