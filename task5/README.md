# Task 5 [20 points]

John just started to learn JavaScript and found that there were many ways to write code with the same functionalities.  Can you help him with the following tasks?

John wants to write `if` statement in different ways.  He has the following code:

```js
let x;

if (x === undefined ||
  x === null ||
  Number.isNaN(x) ||
  x === 0)
  x = 1;
else
  x = x * 2;
```

## Part I [5 points]

John wants to practice `switch` statement instead of `if`. The `switch` statement has five `case` and one `default`.  Can you help with him and finish the code in ``index.js`` inside this folder?

```js
switch (/* TODO */){
  case /* TODO */:
  case /* TODO */:
  case /* TODO */:
  case /* TODO */:
  case /* TODO */:
  default:
}

```

## Part II [5 points]

John thinks that both the ``switch`` and ``if`` statements are too complex.  Can you help him to write an equivalent ``if`` statement without any logic operations?  Please finish the code in ``index.js`` inside this folder.

```js
if (/* TODO */)
   x = 1;
else
   x = x * 2;
```

## Part III [5 points]

John now wants to use only Logic operations (&&, ||, and !) to implement the same functionality.  Can you help him with that?  Please finish the code in ``index.js`` inside this folder.

Note that your code should not contain any of the following ``undefined``, ``null``, and ``NaN``.

## Part IV [5 points]

John again wants to implement the same functionality using Ternary operator.  Can you again help him? Please finish the code in ``index.js`` inside this folder.

Note that your code should not contain any of the following ``undefined``, ``null``, and ``NaN``.

Please complete this task in the `index.js` file inside this folder. Do **not** write the answer in this README file.  Do **not** use any automated tools such as Babel for conversion. 