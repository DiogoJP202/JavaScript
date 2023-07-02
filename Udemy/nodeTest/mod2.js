class Person{
    contructor(name, middleName){
        this.name = name;
        this.middleName = middleName;
    }

    sayName(){
        console.log(`${this.name} ${this.middleName}`);
    }
}