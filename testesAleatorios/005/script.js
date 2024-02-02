const employers = [
    employer1 = {
        name: "João",
        age: 24,
        job: "Web Developer"
    }, 
    employer2 = {
        name: "Ana",
        age: 27,
        job: "Doctor"
    },
    employer3 = {
        name: "roberto",
        age: 18
    }
];

for(let people of employers){
    console.log(`${people.name} is a ${people.job || "Unemployed"}.`);
};