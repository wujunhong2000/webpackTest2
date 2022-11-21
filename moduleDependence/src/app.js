// ES Modules特性（ES Module 将简称为ESM）
// 通过给script添加 type = module 的属性,就可以以ESM的标准执行其中的JS代码了
// 每个ESM 模块都是单独的私有作用域
// ESM 自动采用严格模式(“use strict”)内部可以不用再定义
// ESM 是通过 跨域(CORS)的方式请求外部js模块的(所以需要服务端支持跨域,普通script标签不存在跨域)
// ESM 的script标签会延迟执行脚本

// nodejs支持模块化，大多数的浏览器已经支持ESM模块化
// loader向webpack描述了如何处理非原生模块（css,TS,less,sass,json,yaml），并且将相关依赖引入bundle中

// webpack执行会返回描述打包流程的对象compiler(类似于promise对象，打包前、打包中、打包完成),每一个打包都创建一个
// compiler对象，走完整个生命周期的流程，所有模块的解析都是compiler内置模块的解析器resolvers(基于enhanced-resolve包实现)处理的. 
// -----------------------------------------------------
// 每当一个文件依赖另一个文件时，webpack 会直接将文件视为存在依赖关系。这使 webpack 可以获取非代码资源，
// 如 images 或 web 字体等。并会把他们作为依赖提供给应用程序。当 webpack 开始工作时，它会根据我们写好的配置，
// 从入口 (Entry) 开始，webpack 会递归的构建一个依赖关系图，这个依赖图包含着应用程序中所需的每个模块，然后将所有模块打包为输出文件。
import _ from 'lodash';
import Headers from '/src/components/Headers.js';
import Body from './components/a/b/Body'
// const math = require('./math.js'); // 相对路径
const math = require('/src/math'); // 绝对路径

import $ from 'jquery'
console.log($);

// console.log(math.add(5, 6));
console.log('math', math);
console.log(_.join(['123', '456']), ' ');
console.log(Headers());
Body();