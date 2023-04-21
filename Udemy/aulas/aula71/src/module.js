const name = 'diogo';
const middleName = 'antonny';
const age = 18;

function sum(x, y){
  return x + y;
}

// Ways to export data.

export { name, middleName, age as exportAge, sum };
// To change the names of the variable being imported we can do: variableNameHere as newNameHere

// We can declare a variable and export it
export const pi = 3.14;

export function sayHi(){
  console.log('hi')
}

export class Person{
  constructor(name, lastName){
    this.name = name;
    this.lastName = lastName;
  }
}

/*
- We can export a default data. There is only one default for each module, this default can be imported with any name.

- To export constants as default or export data along with default, do:
export { name as default, lastName, age, sum}

- We can export anonymous functions as default: import default (x, y) => x * y;
*/

export default (x, y) => x * y;
