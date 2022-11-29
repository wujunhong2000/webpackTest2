// Tree shaking ( 生产模式 )
// 去除应用程序中没有使用的代码，可更大程度的优化代码。必须使用 ES6 模块化，并开启 production 模式。

// import { module } from './filename.js'
// 如果不需要某些文件被 webpack 清除，可以在 package.json 中配置 sideEffects 属性

// {
//   "sideEffects": ["*.css" ,"*.scss", "*.global.js"...]
// }

// import { add, minus } from './main'
// console.log(add(5, 6));

// import 'lodash' // 第三方模块的导入没有被tree-shaking

// 有副作用的文件不会进行tree-shaking，如全局样式、设置了全局配置的js文件
// webpack4默认将所有文件视为有副作用的文件，webpack5默认做tree-shaking
// package.js文件中配置sideEfects: true, false(所有文件都没有副作用，可以删除)), Array(["*.css"], 所有css文件都不处理)

import './style.css'
import './m.global'