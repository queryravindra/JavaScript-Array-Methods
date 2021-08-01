// findIndex() is similar to find() but the only difference is it will find the element and it will return index

const numbers = [1, 2, 3, 4, 5];

const res = numbers.findIndex(findThree);

function findThree(value) {
    return value === 3;
}

console.log(res);  // 2