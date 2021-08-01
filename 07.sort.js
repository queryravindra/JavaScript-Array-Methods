// sorts the array by manipulating the array
// default sort order is --> Ascending
// It will converts the elements from array to strings and then it will comapre the sequences of UTF16 code unit values
// (especially when sorting nmbers)

const names = ['Phanindra', 'Ravindra', 'John', 'Brad', 'Tom'];

names.sort();

console.log(names);  // [ 'Brad', 'John', 'Phanindra', 'Ravindra', 'Tom' ]

// ----------------------------------------------------------------------------------------

const numbers = [23, 9, 12, 72, 93, 36, 108, 1001];

numbers.sort(compareFunction);

// console.log(numbers); // [ 1001, 108, 12, 23,  36, 72, 9,  93 ]
console.log(numbers); // [ 9, 12, 23, 36, 72, 93, 108, 1001 ]

function compareFunction(a, b) {
    // 1. return num < 0 ... a comes first
    // 2. 0 ... nothing will be changed
    // 3. > 0 ... b comes first

    return a - b;
}


// ----------------------------------------------------------------------------------------

const products = [
    {
        name: 'laptop',
        price: 1000,
    }, {
        name: 'desktop',
        price: 1500,
    }, {
        name: 'phone',
        price: 500,
    }
];

products.sort();

console.log(products); 
/* [
  { name: 'laptop', price: 1000 },
  { name: 'desktop', price: 1500 },
  { name: 'phone', price: 500 }
] */


//-------------------------------------------------------------------------------------------------------------

const products = [
    {
        name: 'laptop',
        price: 1000,
    }, {
        name: 'desktop',
        price: 1500,
    }, {
        name: 'phone',
        price: 500,
    }
];

products.sort((a, b) => {
    return a.price - b.price;
});

console.log(products); 
/*
[
  { name: 'phone', price: 500 },
  { name: 'laptop', price: 1000 },
  { name: 'desktop', price: 1500 }
]
*/

products.sort((a, b) => b.price - a.price);

console.log(products); 
/*
[
  { name: 'desktop', price: 1500 },
  { name: 'laptop', price: 1000 },
  { name: 'phone', price: 500 }
]
*/