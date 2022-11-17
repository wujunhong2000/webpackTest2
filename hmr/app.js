import './style.css'
import './input.js'
const buttonWrap = document.createElement('button')
buttonWrap.textContent = '添加'
buttonWrap.addEventListener('click', ()=>{
   const square = document.createElement('div')
   square.classList.add('square')
   document.body.appendChild(square)
})
document.body.appendChild(buttonWrap)

// js热替换
if(module.hot){
   module.hot.accept('./input.js', ()=>{
      
   })
}