function Account(agency, account, balance){
	this.agency = agency;
	this.account = account;
	this.balance = balance;
};

Account.prototype.retire = function(money){
	if(this.balance < money){
		console.log(`insufficient balance! Your balance is ${this.balance}`);
		return;
	}

	this.balance -= money;
	console.log(`Withdrawn amount is ${money}.`);
	return console.log(`Current balance is ${this.balance}.`);
};

Account.prototype.deposit = function(money){
	this.balance += money;
	console.log(`Amount deposited ${money}.`);
	return console.log(`Current balance is ${this.balance}.`);
};

Account.prototype.seeBalance = function(){
	return console.log(`Ag/Ac: ${this.agency}/${this.account} - Balance: ${this.balance.toFixed(2)}`);
};

const diogo = new Account(55, 00, 100000000);
diogo.retire(500000);
console.log(diogo.balance);

function CurrentAccount(agency, account, balance, limit){
	Account.call(this, agency, account, balance);
	
	this.limit = limit;	
};

CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

CurrentAccount.prototype.retire = function(money){
	if((this.balance + limit) < money){
		console.log(`Insufficient balance! - Current  balance is ${this.balance}`);
		return;
	}

	this.balance -= money;
	console.log(`Withdrawn amount is ${money}.`);
	return console.log(`Current balance is ${this.balance}.`);
};

const felipe = new CurrentAccount(666, 00, 240000000, 120000000);
felipe.deposit(10);

function SavingAccount(agency, account, balance){
	Account.call(this, agency, account, balance);

	let time = setInterval(() => {
		this.balance += this.balance * (5/100);
	}, 600000);
}

SavingAccount.prototype = Object.create(Account.prototype);
SavingAccount.prototype.constructor = SavingAccount;

const pedro = new SavingAccount(31, 00, 10000);