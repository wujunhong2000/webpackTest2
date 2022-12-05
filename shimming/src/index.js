// import _ from 'lodash';
console.log(_.join(['hello', 'webpack'], ' '));

// imports-loader 将this指向改为window
// exports-loader 不导入第三方库，也能使用

const { file, helpers } = require('./global')
