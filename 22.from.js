// from() creates a new shallow copy of the array from an array like iterable object

const str = '1234567';

// output: [1, 2, 3, 4, 5, 6, 7]   --> Target

const res = Array.from(str);

console.log(res);  // ['1', '2', '3', '4', '5', '6', '7']

//---------------------------------------------------------------------------------------

const str = '1234567';

const res = Array.from(str, mapFn);

// mapFn() exactly works map() funcn (A mapping function to call on every element of the array.)
function mapFn(x) {
    return Number(x);
}

console.log(res);  // [1, 2, 3, 4, 5, 6, 7]


//---------------------------------------------------------------------------------------

const str = '1234567';

const res = Array.from(str, x => Number(x));

console.log(res);  // [1, 2, 3, 4, 5, 6, 7]


//---------------------------------------------------------------------------------------

// or just we can pass in 'Number' constructor
const str = '1234567';

const res = Array.from(str, Number);

console.log(res);  // [1, 2, 3, 4, 5, 6, 7]


//---------------------------------------------------------------------------------------

    // Remove duplicated values from an array

    const numbers = [1, 2, 3, 4, 3, 1, 4, 4, 2, 1, 3, 5];

    const res = new Set(numbers);

    console.log(res);  // Set(5) { 1, 2, 3, 4, 5 }

    // ----------------------------------------------------------------------------------

    const numbers = [1, 2, 3, 4, 3, 1, 4, 4, 2, 1, 3, 5];

    const res = Array.from(new Set(numbers));

    console.log(res);  // [ 1, 2, 3, 4, 5 ]

    // -----------------------------------------------------------------------------------

    const friends = ['Ravindra', 'Phanindra', 'John', 'David', 'Phanindra', 'John'];

    const resFrirends = Array.from(new Set(friends));

    console.log(resFrirends);  // [ 'Ravindra', 'Phanindra', 'John', 'David' ]