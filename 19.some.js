// some() executes a given function on the elements of the array and returns true if the callback funcn
// returns a truthy value for atleast one element inside of the array
// if all of the elements it will return a falsy value then the sum method will return false also

const numbers = [1, 2, 3, 4, 5];

const res = numbers.some(greaterThanFour);

function greaterThanFour(item) {
    return item > 4;
}

console.log(res);  // true


// -------------------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4];

const res = numbers.some(greaterThanFour);

function greaterThanFour(item) {
    return item > 4;
}

console.log(res);  // false


// ----------------------------------------------------------------------------------------------

const persons = [
    {
        name: 'Ravindra',
        age: 25
    },
    {
        name: 'Phanindra',
        age: 20
    }, 
    {
        name: 'John',
        age: 16
    }
];

const res = persons.some(isAdult);

function isAdult(person) {
    return person.age >= 18;
}

console.log(res); // true

