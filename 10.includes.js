// you can find if an element is included in an array

const names = ['Ravindra', 'John', 'David'];

const result = names.includes('John');

console.log(result);  // true

const result2 = names.includes('Jacobs');
console.log(result2);  // false

//-------------------------------------------------------------------------------------------------

const fruits = ['Apple', 'Mango'];

const res = fruits.includes('Orange');

if(res) {
    console.log('Yay!');
} else {
    console.log("Sad... Let's buy an Orange");
}