// join() creates a new string from an array by concatenating all the elements from that array.
// By default it uses a comma as a separator but you can specify what do you want to be added between the items

const countries = ['India', 'USA', 'Great Britain'];

const res = countries.join();

console.log(res);  // India,USA,Great Britain

//------------------------------------------------------------------------------------------

const countries = ['India', 'USA', 'Great Britain'];

const res = countries.join(' - ');  // India,USA,Great Britain
const res = countries.join('');  // IndiaUSAGreat Britain

console.log(res);  // India,USA,Great Britain


//------------------------------------------------------------------------------------------

const countries = ['India'];

// If you have only one element that separator won't work
const res = countries.join(' - '); 

console.log(res);  // India


//------------------------------------------------------------------------------------------

const countries = ['India', 'USA', 'Great Britain'];

const res = countries.join(', '); 

console.log('I want to visit ' + res);  // I want to visit India, USA, Great Britain


