// The array slice() returns a shallow copy of a portion of an array
// it wont modify the original array on which it is called upon

const numbers = [1, 2, 3, 4, 5, 6];

const numbers2 = numbers.slice(1, 4);

console.log(numbers);  // [1, 2, 3, 4, 5, 6]
console.log(numbers2);  // [ 2, 3, 4 ]


// **************************************************************************************************

const numbers = [1, 2, 3, 4, 5, 6];

const numbers2 = numbers.slice();

console.log(numbers);  // [1, 2, 3, 4, 5, 6]
console.log(numbers2);  // [1, 2, 3, 4, 5, 6]

// **************************************************************************************************

const numbers = [1, 2, 3, 4, 5, 6];

const numbers2 = numbers.slice(-3);

console.log(numbers);  // [1, 2, 3, 4, 5, 6]
console.log(numbers2);  // [4, 5, 6]

// **************************************************************************************************

const numbers = [1, 2, 3, 4, 5, 6];

const numbers2 = numbers.slice(1);

console.log(numbers);  // [1, 2, 3, 4, 5, 6]
console.log(numbers2);  // [2, 3, 4, 5, 6]

// **************************************************************************************************

const participants = ['Ravindra', 'Phanindra', 'John', 'Tyson', 'Nick', 'Gladiator'];

const winners = participants.slice(0, 3);

console.log(participants);  // [ 'Ravindra', 'Phanindra', 'John', 'Tyson', 'Nick', 'Gladiator' ]
console.log(winners);  // [ 'Ravindra', 'Phanindra', 'John' ]

