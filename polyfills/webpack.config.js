module.exports = {
  mode: "development",
  entry: "./src/index.js",
  use: {
    loader: 'babel-loader',
    options: {
      preset: [
        '@babel/preset-env',
        {
          targets: [
            'last 1 version',
            '> 1%'
          ], 
          useBuiltIns: 'usage',
          corejs: 3
        }
      ]
    }
  }
};
