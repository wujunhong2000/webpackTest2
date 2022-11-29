// 接收主线程发送来的信息
self.onmessage = (message)=>{
   self.postMessage({
      answer: 11
   })
}