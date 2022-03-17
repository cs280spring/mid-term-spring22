# Task 4 [15 points]

Tony is a smart student who starts to learn JavaScript.  He wrote the following code. 

```jsx
class Student {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class GradStudent extends Student {
  constructor(name, email, advisor) {
    super(name, email);
    this.advisor = advisor;
  }
}

const john = new Student ("John Doe", "john@email.com");
const jane = new GradStudent ("Jane Doe", "jane@email.com", "Prof. Smith");

console.log(`name: ${john.name} email: ${john.email}`); // name: John Doe email: john@email.com
console.log(`name: ${jane.name} email: ${jane.email} advisor: ${jane.advisor}`); // name: Jane Doe email: jane@email.com advisor: Prof. Smith
```

He deployed the code to his website, but he then found that some of his customers use browsers that do not support ``class``.  He wants to convert his code to something that can be run in those browsers.  Tony listed an outline below. 


```js
function Student(/*add parameters here*/) {
  //Add your implementation here
  /* TODO */
}

// Add additional code here
/* TODO */

function GradStudent(/*add parameters here*/) {
  //Add your implementation here
  /* TODO */
}

// You may not change any code below. The outputs should be the same as our class version.
const john = new Student ("John Doe", "john@email.com");
const jane = new GradStudent ("Jane Doe", "jane@email.com", "Prof. Smith");

console.log(`name: ${john.name} email: ${john.email}`); // name: John Doe email: john@email.com
console.log(`name: ${jane.name} email: ${jane.email} advisor: ${jane.advisor}`); // name: Jane Doe email: jane@email.com advisor: Prof. Smith
```

**Question** Can you help Tony to finish his task in converting his code to something without ``class``? Please do so in ``index.js``.


Please complete this task in the `index.js` file inside this folder. Do **not** write the answer in this README file.  Do **not** use any automated tools such as Babel for conversion. 