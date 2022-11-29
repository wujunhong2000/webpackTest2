// 情景：需要在客户端进行大量运算，但不能影响主线程，异步也会阻塞事件循环，
//  甚至导致浏览器假死状态，Web Works提供了后台处理js的api，允许复杂的、耗时的js
// 处理逻辑放在浏览器后台进行处理，让js线程不阻塞ui线程的渲染

const worker = new Worker(new URL('./work.js', import.meta.url))

worker.postMessage({
   question: 'question'
})

worker.onmessage = (message)=>{
   console.log(message.data.answer);
}