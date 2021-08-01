// splice() changes an array by removing or replacing existing of elements from it

const numbers = [1, 2, 3, 4, 5];

const deleted = numbers.splice(2, 3);

console.log(deleted);  // [3, 4, 5]

console.log(numbers);  // [ 1, 2 ]


// -----------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

const deleted = numbers.splice(2, 3, 6, 7);

console.log(deleted);  // [3, 4, 5]

console.log(numbers);  // [ 1, 2, 6, 7 ]


// -----------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

const deleted = numbers.splice(2, 0, 6, 7);

console.log(deleted);  // [3, 4, 5]

console.log(numbers);  // [ 1, 2, 6, 7, 3, 4, 5 ]


