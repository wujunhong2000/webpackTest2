// "browserslist": [
//    "> 1%", // 全球浏览器使用率大于1%
//    "last 2 versions" // 浏览器最新的两个版本
//  ]

//       require('postcss-nested'), 嵌套，类似less

import styles from './app.css'

const div = document.createElement('div')
div.textContent = 'hello postcss'
div.classList.add(styles.box)
document.body.appendChild(div)
