function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor) {
        console.log(`saldo insuficiente, saldo = ${this.saldo}`)
        return;
    };

    this.saldo -= valor;
    console.log(`Saldo Atual = ${this.saldo}; valor retirado = ${this.saldo -= valor}`)
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    console.log(`Saldo Atual = ${this.saldo}; valor depositado = ${this.saldo += valor}`)
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} Saldo: ${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(11, 12, 100);

function Contacorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};

Contacorrente.prototype = Object.create(Conta.prototype);
Contacorrente.prototype.constructor = Contacorrente;

Contacorrente.prototype.sacar = function(valor){
    if(this.saldo + this.limite < valor) {
        console.log(`saldo insuficiente, saldo = ${this.saldo}`)
        return;
    };

    this.saldo -= valor;
    console.log(`Saldo Atual = ${this.saldo}; valor retirado = ${this.saldo -= valor}`)
};

const contacorrente1 = new Contacorrente(12, 10, 10, 100);

contacorrente1.sacar(80);

function Contapoupanca(agencia, conta, saldo){
    Contacorrente.call(this, agencia, conta, saldo);
    this.limite = limite;
};

Contapoupanca.prototype = Object.create(Conta.prototype);
Contapoupanca.prototype.constructor = Contapoupanca;

const contaPoupanca1 = new Contapoupanca(55, 12, 999);
