// forEach() executes a given function on every element from an array

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(consoleItem);

function consoleItem(item, index, arr) {
    // console.log(item);
    console.log('a[' + index +'] = ' + item);
}

/*
1
2
3
4
5
*/

/* 
a[0] = 1
a[1] = 2
a[2] = 3
a[3] = 4
a[4] = 5
*/

// ******************************************************************************************************************************


const numbers = [1, 2, 3, 4, 5];

numbers.forEach((item, index, arr) => {
    console.log('a[' + index +'] = ' + item);
});

/*
a[0] = 1
a[1] = 2
a[2] = 3
a[3] = 4
a[4] = 5
*/


// ******************************************************************************************************************************


const numbers = [1, 2, 3, 4, 5];

numbers.forEach((item, index, arr) => {
    console.log(arr);
});

/*
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
*/


// ******************************************************************************************************************************


const numbers = [1, 2, 3, 4, 5];

let sum = 0;

numbers.forEach( item => {
    sum += item;
});

console.log(sum);  // 15


// ******************************************************************************************************************************


const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a'];

let count = {};

letters.forEach( item => {
    if(count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }
});

console.log(count);  

/*
{ a: 3, b: 2, c: 1, d: 1 }
*/
