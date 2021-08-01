// find() will search inside of the array and it will return the first element for which 
// the callback function returns truthy value.if it doesn't find one then it will return undefined

const names = ['Ravindra', 'Phanindra', 'John'];

const res = names.find(findPhanindra);

function findPhanindra(item) {
    return item === 'Phanindra';
}

console.log(res);  // Phanindra


// --------------------------------------------------------------------------------------------------------

const persons = [
    {
        name: 'Ravindra',
        age: 25
    }, {
        name: 'Phanindra',
        age: 20
    }, {
        name: 'John',
        age: 18
    }
];

const res = persons.find(findPhanindra);

function findPhanindra(person) {
    return person.name === 'Phanindra';
}

console.log(res);  // { name: 'Phanindra', age: 20 }

const age = persons.find(findPhanindra).age;

console.log(age);  // 20