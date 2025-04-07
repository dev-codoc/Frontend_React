// In JS the arrays can be used to store different type of data and this data can vary from string - integer - float

// Spread operator is an important topic of JS 


// 1. Here we can see that the copy is not real it is directly modifying the orginal array and it is failure of referencing so we NEED to make an real copy which won't allow to modify the original array .
let original = [1,2,3]
let copy = original
copy.pop()
console.log(original);
console.log(copy);

// Solution is SPREAD OPERATOR

let origin = [1,2,3,4]
let realcopy = [...origin] // (...) => this is called spread operator
realcopy.pop()
console.log(origin);
console.log(realcopy);

// In the solution the original array is not modified ....