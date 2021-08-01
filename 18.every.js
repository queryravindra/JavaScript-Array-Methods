// executes a given function on every item of an array and return true only if the callback function returns
//  truthy value for all the items inside the array.if falsy value is found it will return false immediately

const numbers = [1, 2, 3, 4, 5];

const res = numbers.every(isPositive);

// function isPositive(item, index, arr) {

// }

function isPositive(item) {
    return item > 0;
}

console.log(res);  // true


// ----------------------------------------------------------------------------------------------------------

const numbers = [-1, 1, 2, 3, 4, 5];

const res = numbers.every(isPositive);

function isPositive(item) {
    return item > 0;
}

console.log(res);  // false


// --------------------------------------------------------------------------------------------------------------

const persons = [
    {
        name: 'Ravindra'
    },
    {
        name: 'Phanindra'
    },
    {
        name: 'John'
    },
    {
        surname: 'maram'
    }
];

const res = persons.every(person => person.name !== undefined);

console.log(res);  // false


// --------------------------------------------------------------------------------------------------------------

const arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const res = arrays.every(arr => Array.isArray(arr));

console.log(res);  // true


// --------------------------------------------------------------------------------------------------------------

const arrays = [[1, 2, 3], [4, 5, 6], '789'];

const res = arrays.every(arr => Array.isArray(arr));

console.log(res);  // false


