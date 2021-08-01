// map() executes a given function on every element from an array and returns a new array

const numbers = [1, 2, 3, 4, 5];

numbers.map(double);

function double(value, index, arr) {
    return value * 2;
}

console.log(numbers);
// [ 1, 2, 3, 4, 5 ]

// map() doesn't change the array ,it will create and return new array


/**********************************************************************************************************************************/


const numbers = [1, 2, 3, 4, 5];

const numbersDouble = numbers.map(double);

function double(value, index, arr) {
    return value * 2;
}

console.log(numbersDouble);
// [ 2, 4, 6, 8, 10 ]


/**********************************************************************************************************************************/


const numbers = [1, 2, 3, 4, 5];

const numbersDouble = numbers.map(multiply);

function multiply(value, index, arr) {
    return value * index;
}

console.log(numbersDouble);
// [ 0, 2, 6, 12, 20 ]


/**********************************************************************************************************************************/


const products = [
    {
        name: 'laptop',
        price: 1000,
        count: 5
    }, {
        name: 'desktop',
        price: 1500,
        count: 2
    }, {
        name: 'phone',
        price: 500,
        count: 10
    }
];

const totalProductsValue = products.map(item => ({
    name: item.name,
    totalValue: item.price * item.count
}));

console.log(totalProductsValue);


// [
//     { name: 'laptop', totalValue: 5000 },
//     { name: 'desktop', totalValue: 3000 },
//     { name: 'phone', totalValue: 5000 }
// ]



/**********************************************************************************************************************************/


const str = ['1', '2', '3', '4'];

// const numbers = str.map(item => Number(item));  // [1, 2, 3, 4] (we can simplify this to below statement)
const numbers = str.map(Number);  // [1, 2, 3, 4]

console.log(numbers);