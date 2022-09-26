/*
SHORT-CIRCUIT
&& = TRUE AND TRUE FOR TRUE
|| = TRUE OR TRUE FOR TRUE
*/
var person = {
    name: 'diogo',
    age: 25,
    job: "Web Developer"
}
console.log(person.job || "Desempregado")

function sayHi(){
    return "HI!";
}

let name = "Diogo";

console.log(name && sayHi())