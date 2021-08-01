// array concat() allows you to merge two or more arrays into one new Array which will be returned

const a = [1, 2, 3];
const b = [4, 5, 6];

const c = a.concat(b);

console.log(c);  // [ 1, 2, 3, 4, 5, 6 ]

//------------------------------------------------------------------------------------------------

const a = [1, 2, 3];
const b = [4, 5, 6];
const d = [7, 8, 9];

const c = a.concat(b, d);

console.log(c);  // [ 1, 2, 3, 4, 5, 6 , 7, 8, 9]

// -------------------------------------------------------------------------------------------------

const a = [1, 2, 3];
const b = [4, 5, 6];
const d = [7, 8, 9];

const c = a.concat(b, d);

console.log(c);  // [ 1, 2, 3, 4, 5, 6 , 7, 8, 9]

// It will wont change the original Array
console.log(a);  // [ 1, 2, 3 ]
console.log(b);  // [ 4, 5, 6 ]
console.log(d);  // [ 7, 8, 9 ]


//----------------------------------------------------------------------------------------------------

const a = [1, 2, 3];
const b = [4, 5, 6];
const d = [7, 8, 9];

const c = a.concat();

console.log(c);  // [ 1, 2, 3]


//----------------------------------------------------------------------------------------------------

const a = [1, 2, 3];
const b = [4, 5, 6];
const d = [7, 8, 9];

const c = a.concat(1, 2);  // as push method

console.log(c);  // [ 1, 2, 3, 1, 2]


//----------------------------------------------------------------------------------------------------

const a = [1, 2, 3];
const b = [4, 5, 6];
const d = [7, 8, 9];

const c = a.concat(1, 2, a);  // as push method

console.log(c);  // [ 1, 2, 3, 1, 2, 1, 2, 3]

