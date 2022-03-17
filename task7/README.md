# Task 7 [15 points]

Stella is learning Web Worker.  She finds out that Web Worker can perform heavyweight computation in the background.  Specifically, she wants to transfer two vectors from the main thread to the worker and calculates the dot produce of these two vectors.  

Say for example, we have two vectors:

```text
a = [3, 4, 2, 6]
b = [5, 4, 6, 7]

dot<a, b> = 3*5 + 4*4 + 2*6 + 6*7 = 85
```

She writes a template with a main threat (``main.js``) and a worker (``worker.js``). Now she defines two ``Int32Array`` and wants to transfer (*not* copy) these two arrays to the worker code. Then, she wants to calculate the dot product and return the result back to the main thread. 

**Question** Can you help her with that and finish the `main.js` and `worker.js` files inside the `task7-worker` folder? 

Please complete this task in the `main.js` and `worker.js` files inside the `task7-worker` folder. Do **not** write the answer in this README file.  

Note that two vectors should not be accessible from the main thread after transfer. 