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

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;
}

Camisa.prototype = Object.create(Produto.prototype);
Camisa.prototype.constructor = Camisa;

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const camisa01 = new Camisa('Camiseta', 24.99, 'Verde');
camisa01.desconto(10);
console.log(camisa01);

const caneca01 = new Caneca('Copinho', 10, 'vidro', 30);
caneca01.desconto(0.99);
console.log(caneca01);