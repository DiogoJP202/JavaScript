const peaple = {
    name: 'Diogo',
    middleName: 'Antonny',
    age: '17',
    adress:{
        street: 'Rua Eneás De Barros',
        number: 67,
        zip_code: 21340-000
    }
}
const {name: nome, age: idade, middleName: sobrenome, adress: endereco, adress:{street: rua, number: numero,zip_code: cep}} = peaple;
console.log(nome, sobrenome, idade, endereco, cep);