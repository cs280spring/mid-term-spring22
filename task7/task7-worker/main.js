import './style.css'


let myWorker = new Worker('worker.js');

const array1 = new Int32Array([3, 4, 2, 6]);
const array2 = new Int32Array([5, 4, 6, 7]);

// Passing array1 and array2 to the worker using myWorker.postMessage

/* TODO */

// Making sure that array1 and array2 are not accessible

/*
  TODO: Obtaining the result from the worker
*/
myWorker.onmessage = function(e) {
  let result = "" /* TODO: delete "" and replace with your answer */;
  document.querySelector('#app').innerText = `Calculation Result: ${result}`;
}

// Expected result: 85
