// unshift() adds one or more elements at the begining of the array and returns the new length of the array

const numbers = [1, 2, 3];

numbers.unshift(0);

console.log(numbers);  // [ 0, 1, 2, 3 ]

//---------------------------------------------------------------------------------------------------------

const numbers = [1, 2, 3];

numbers.unshift(0);
numbers.unshift(-1);

console.log(numbers);  // [ -1, 0, 1, 2, 3 ]


//---------------------------------------------------------------------------------------------------------

const numbers = [1, 2, 3];

numbers.unshift(0, -1);


console.log(numbers);  // [ 0, -1, 1, 2, 3 ]


//---------------------------------------------------------------------------------------------------------

const numbers = [1, 2, 3];

const length = numbers.unshift(0, -1);


console.log(length);  // 5


