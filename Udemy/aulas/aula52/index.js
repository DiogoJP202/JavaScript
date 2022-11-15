const produto1 = {nome: 'banana', preco: 1.5};
const produto2 = { ...produto1, material: 'madeira'};

Object.freeze(produto2.nome); 

console.log(Object.getOwnPropertyDescriptor(produto2, 'preco'));