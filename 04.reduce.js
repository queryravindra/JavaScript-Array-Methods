// reduce() methods execute a callback function on every elements of an array and it will return one single output value
// and the output single value will be (an array, string, number or an object)

const numbers = [1, 2, 3, 4, 5];

// const total = numbers.reduce(sum, 0);
const total = numbers.reduce(sum);  
// If we dont provide zero(0) here the initial value will be  the first value from the array
// and that iteration will be skipped

// function sum(accumulator, value, index, arr) {
//     return accumulator + value;
// }

function sum(accumulator, value) {
    return accumulator + value;
}

console.log(total);  // 15


/***********************************************************************************************/

const numbers = [1, 2, 3, 4, 5, 6];

const max = numbers.reduce(callback, -Infinity);

function callback(accumulator, value) {
    if(accumulator > value) {
        return accumulator;
    } else {
        return value;
    }
}

console.log(max);  // 6


/***********************************************************************************************/

const store = [
    {
        name: 'laptop',
        price: 1000,
        count: 3
    }, {
        name: 'desktop',
        price: 1500,
        count: 4
    }, {
        name: 'mobile',
        price: 500,
        count: 10
    }
]

const totalValueStore = store.reduce((accm, item) => accm + (item.price * item.count), 0);

console.log(totalValueStore);  // 14000