// the array fill() method changes all the elements inside an array with the provided value
// it will change the original array and also returns it

const numbers = [1, 2, 3, 4, 5];

numbers.fill(0);

console.log(numbers);  // [ 0, 0, 0, 0, 0 ]


// -------------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

const num2 = numbers.fill(0);

console.log(numbers);  // [ 0, 0, 0, 0, 0 ]
console.log(num2);  // [ 0, 0, 0, 0, 0 ]

//----------------------------------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5];

const num2 = numbers.fill(0, 1, 4);

console.log(numbers);  // [ 1, 0, 0, 0, 5 ]

//-------------------------------------------------------------------------------------------------

function fillInNumbers(n) {
    return Array(n)
        .fill(0)
        .map((_, index) => index + 1);  // index + 1 becz index by default starts from 0(zero)
}

console.log(fillInNumbers(10));  // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]