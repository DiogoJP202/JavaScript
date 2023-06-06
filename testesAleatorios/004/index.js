function randomTime(min = 1000, max = 5000){
	let time = Math.random()*(max-min)-min;
	return Math.floor(time);
}

function f1(callback){
	setTimeout(() => {
		console.log('f1');
		if(callback) callback();
	}, randomTime());
}

function f2(callback){
	setTimeout(() => {
		console.log('f2');
		if(callback) callback();
	}, randomTime());
}

function f3(callback){
	setTimeout(() =>  {
		console.log('f3');
		if(callback) callback();
	}, randomTime());
}

function f1Callback(){
	f2(f2Callback);
}

function f2Callback(){
	f3(f3Callback);
}

function f3Callback(){
	console.log("finished here!")
}

f1(f1Callback);