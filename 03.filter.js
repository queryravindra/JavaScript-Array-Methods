// It returns new array by removing all the values which are returned from callback funcn as falsy values

const numbers = [1, 2, 3, 4, 5, 6];

const even = numbers.filter(isEven);

function isEven(value) {
    return value % 2 === 0;
}

console.log(even);  // [2, 4, 6]


/******************************************************************************************************************************/

const people = [
    {
        name: 'Ravindra',
        age: 22
    },

    {
        name: 'Phanindra',
        age: 18
    },

    {
        name: 'Vishu',
        age: 10
    }
];

const adults = people.filter(person => person.age >= 18);

console.log(adults);
// [ { name: 'Ravindra', age: 22 }, { name: 'Phanindra', age: 18 } ]


/*******************************************************************************************************************************/

const numbers = [1, 2, 3, 2, 1, 3, 3, 5 , 4 , 6, 4, 6, 4];

const nums = numbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

console.log(nums);  // [ 1, 2, 3, 5, 4, 6 ]