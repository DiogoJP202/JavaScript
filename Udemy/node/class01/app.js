// const Dog = require('./mod1');
// const dog01 = new Dog('Spike');

// const Person = require('../../nodeTest/mod2')

// console.log(dog01.name);  
// dog01.bark();

//console.log(__dirname, __filename);

//c:\Users\diogo\OneDrive\Documentos\JavaScript\Udemy\node\class01 
//c:\Users\diogo\OneDrive\Documentos\JavaScript\Udemy\node\class01\app.js

const path = require('path'); //call the function module path
console.log(path.resolve(__dirname, '..', '..', 'nodeTest'));