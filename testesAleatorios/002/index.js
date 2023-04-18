function createPeople(name, lastName, weight, height){
    return {
        name,
        lastName,
        
        get completeName(){
            return `${this.name} ${this.lastName}`;
        },

        set completeName(value){
            value = value.split(' ');
            this.name = value.shift();
            this.lastName = value.join(' ');
        },

        say(subject){
            return `${this.name} está ${subject}`; 
        },

        weight,
        height,

        get imc(){
            const index = this.weight / (height**2);
            return index.toFixed(2);
        } 
    }
}

const p1 = createPeople('Diogo', 'Antonny', 65, 1.8);
console.log(p1.say('sayndo sobre HTML.'));
console.log(p1.imc);
p1.completeName = "Dioogo Antonny Santos Soares"
console.log(p1.name);