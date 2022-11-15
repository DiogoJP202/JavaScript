function Produto(nome, preco){
   this.nome = nome;
   this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
   this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
   this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto("Camiseta_Branca", 50);
p1.desconto(50);
console.log(p1);

const p2 = new Produto("Camiseta_Preta", 100);

Object.setPrototypeOf(p2, p1);

p2.desconto(50);
console.log(p2)

const p3 = Object.create(Produto.prototype, {
   preco: {
      writable: true,
      configurable: true, 
      value: 43,
      enumerable: true
   },
   nome: {
      writable: true,
      configurable: true, 
      value: "pano de prato fds kkkkkk",
      enumerable: true
   },
});
console.log(p3.nome);