// flat() creates a new array with all the sub arrays elements concatinated into it
// It was recursively upto the specified debt

const arr = [1, [2, [3, [4]]]];

// output: [1, 2, 3, 4]  --> Target

const res = arr.flat();

console.log(res);  // [ 1, 2, [ 3, [ 4 ] ] ] (removed one array)

// -------------------------------------------------------------------------------------

const arr = [1, [2, [3, [4]]]];

// by default debt value is 1
const res = arr.flat(3);

console.log(res);  // [ 1, 2, 3, 4 ]


// -------------------------------------------------------------------------------------

const arr = [1, [2, [3, [4, [5]]]]];

// by default debt value is 1
const res = arr.flat(3);

console.log(res);  // [ 1, 2, 3, 4, [ 5 ] ]


// -------------------------------------------------------------------------------------

const arr = [1, [2, [3, [4, [5]]]]];

const res = arr.flat(Infinity);

console.log(res);  // [ 1, 2, 3, 4, 5 ]


