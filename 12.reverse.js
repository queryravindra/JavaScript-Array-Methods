const numbers = [1, 2, 3, 4, 5];

numbers.reverse();

console.log(numbers);  // [ 5, 4, 3, 2, 1 ]

//-------------------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

const newArr = numbers.concat().reverse();  // creating a shallow copy

console.log(numbers);  // [ 1, 2, 3, 4, 5 ]
console.log(newArr);  // [ 5, 4, 3, 2, 1 ]


// ------------------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

// Instead of concat you can use spread operator
const newArr = [...numbers].reverse();  // creating a shallow copy

console.log(numbers);  // [ 1, 2, 3, 4, 5 ]
console.log(newArr);  // [ 5, 4, 3, 2, 1 ]


//-------------------------------------------------------------------------------------------------

const str = 'Coding is fun!';

const res = str
    .split('')
    .reverse()
    .join('');

    console.log(res);  // !nuf si gnidoC