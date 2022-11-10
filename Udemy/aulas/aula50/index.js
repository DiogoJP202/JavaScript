function Produto(nome, preco, estoque){
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: 50,
        writable: false,
        configurable: false
    });
}

const p1 = new Produto("Camisa_Metal_É_Legal", 40, 30);

console.log(p1);