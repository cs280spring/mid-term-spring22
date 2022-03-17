# Task 6 [20 points]

Mary is learning JavaScript closure and asynchronous programming.  She finds the following interesting program.  Can you help her explain their outputs? 


## Example 1 [5 points]

```js
const months = ["Jan", "Feb", "Mar", "Apr"]
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log("Month:" + months[i]); 
  }, 1000);
}
```

Q: Can you explain the output of Example 1 in terms of (i) number of outputs, and (ii) value of each output? 

## Example 2 [7 points]

```js
const months = ["Jan", "Feb", "Mar", "Apr"];
for (var i = 0; i < 3; i++) {
  let month = months[i];
  setTimeout(function log() {
    console.log(`Month:${month}`); 
  }, 1000);
}
```
Q: Can you explain the output of Example 2 in terms of (i) number of outputs, (ii) sequence of outputs, and (iii) value of each output?  Additionally, can you compare Example 1 and 2 and explain why their results are different? 

## Example 3 [8 points]

```js
// Part 1
const myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {resolve("then"); console.log("then")}, 100);
  }
);

await myPromise;
console.log("I am learning await now");
```

```js
// Part 2
const myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {resolve("then"); console.log("then")}, 100);
  }
);

console.log("I am learning await now");
```

Q: Can you explain why the outputs of two parts of Example 3 are different in browser console? 


Please complete this task in the `Answer.md` file inside this folder. Do **not** write the answer in this README file.  
