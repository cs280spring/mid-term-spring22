# Task 2 [15 points]

Bob is a student who wants to learn JavaScript particularly the prototype chain.  He wrote the following code and tested it on the web browser console of a particular website. 


```js
let myObj = {prop1: 3, prop2: 5, prop3: 4};
for (prop in myObj) {
    console.log(`${prop}: ${myObj[prop]}`);
}
```

Surprisingly, he found that the code outputs the following text:

```text
prop1: 3
prop2: 5
prop3: 4
prop4: 6
```

You have two sub-tasks to work on:

**Question (1)** Can you help Bob to explain why this happens by completing *Part One* in ``index.js`` with one line of code? 

**Question (2)** Can you fix Bob's code in *Part Two* in ``index.js`` so that it outputs the following results:

```text
prop1: 3
prop2: 5
prop3: 4
```

Please complete this task in the `index.js` file inside this folder. Note that you cannot hard-code any property key or values in your solution. Do **not** write the answer in this README file.