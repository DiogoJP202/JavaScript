function createPerson(name, lastName){
    return Object.create(personPrototype, { //connects the prototype and sets the name and lastName.
        name: {value: name},
        lastName: {value: lastName}
    })
}

// Decoupling the methods so they can be reused in other factory functions.

const sayHi= {
    sayHi(){
        console.log(`${this.name} ${this.lastName} say hi!`);
    }
};

const eat = {
    eat(){
        console.log(`${this.name} is eating.`);
    }
};

const drink = {
    drink(){
        console.log(`${this.lastName} is drinking`);
    }
};

const personPrototype = {...sayHi, ...eat, ...drink} //Prototype of createPerson;

/*
OR:

const personPrototype = Object.assign({} ,sayHi ,eat ,drink);
*/ 

const p1 = createPerson('Diogo', 'Antonny');
p1.sayHi();
p1.eat();
p1.drink();