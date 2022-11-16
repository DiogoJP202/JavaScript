function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia){ 
    this.preco += quantia
};
Produto.prototype.desconto = function(quantia){ 
    this.preco -= quantia
};

function Camisa(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
};

Camisa.prototype = Object.create(Produto.prototype);
Camisa.prototype.constructor = Camisa;

const camisa01 = new Camisa('Camiseta', 24.99, 'Verde');
camisa01.desconto(10);
console.log(camisa01);
