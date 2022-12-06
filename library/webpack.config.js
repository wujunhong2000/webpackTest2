const path = require("path")

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mylib.js',
    library: {
      name: 'mylib',
      type: 'window',
    }
  }
};