// main.js
const worker = new Worker('worker.js')
worker.postMessage('start')
worker.onmessage = (e)=> console.log(e.data);

// worker.js
onmessage = (e)=> {
  // 耗时计算
  let result = heavyComputation();
  postMessage(result);
}