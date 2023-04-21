import arrow, { name as importName, middleName, exportAge, sum, Person as PersonA} from './module' // 'filePathHere'
// To change the names of the variable being imported we can do: variableNameHere as newNameHere
// To call the default value, we have to export without the key brackets. it’s like: import something from ‘./module1’;

console.log(importName, middleName, exportAge, sum(4, 6));  //’Diogo’, ‘Antonny’, 18, 10

const p1 = new PersonA('Manuel', 'Gomes');
console.log(p1);

console.log(arrow);

/*
Getting the default arrow function and other exports:
import multiply, {name, middleName, exportAge, sum, Person, sayHi};
console.log(multiply(3, 5)
// 15
*/

