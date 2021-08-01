// indexOf() returns the first index at which given element can found inside the array

const names = ['Ravindra', 'John', 'David'];

console.log(names.indexOf('John'));  // 1

// -----------------------------------------------------------------------------------------------

const names = ['Ravindra', 'John', 'David'];

const idx = names.indexOf('John');

names[idx] = 'Phanindra'; 

console.log(names);  // [ 'Ravindra', 'Phanindra', 'David' ]

//-----------------------------------------------------------------------------------------------------

const names = ['Ravindra', 'John', 'David'];

const idx = names.indexOf('Xavier');

console.log(idx);  // -1

// ----------------------------------------------------------------------------------------------------

const names = ['Lawrence', 'Ravindra', 'John', 'Ravindra', 'David', 'Xavier'];

const idx = names.indexOf('Ravindra');
const lastIdx = names.lastIndexOf('Ravindra');

console.log(idx);  // 1
console.log(lastIdx);  // 3