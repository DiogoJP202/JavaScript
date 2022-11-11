function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if( typeof estoque !== "number"){
                console.log(`O valor de estoque(${estoque}), não é um número.`);
                return;
            }
            estoque = valor;
        }
    });
}

const p1 = new Produto("Camisa_Metal_É_Legal", 40, 30);
console.log(p1); 
console.log(p1.estoque)