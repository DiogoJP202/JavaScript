const name = `Diogo Antonny Santos Soares`;
const stayName = name => console.log(name);

class Person{
    constructor(name){
        this.name = name;
    }
}

module.exports = {
    name, stayName, Person
}