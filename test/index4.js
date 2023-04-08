class Person{
    constructor(name, lastName){ 
      this.name = name; 
      this.lastName = lastName;
    }
      // methods here!
      say(){
          console.log(`${this.name} say hi!`);
    };
      
      eat(){
          console.log(`${this.name} is eating!`);
      };
  
      drink(){
          console.log(`${this.name} is drinking!`);
      };
  };
  
  const p1 = new Person("Diogo", "Antonny");
  p1.say();
  p1.drink();
  p1.eat();