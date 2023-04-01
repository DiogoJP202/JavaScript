function* generator1(){
	yield 'value01';
	yield 'value02'; 
	yield 'value03'; 
  yield* generator2();
}

function* generator2(){
	yield 'value04';
	yield 'value05'; 
	yield 'value06'; 
}

const g1 = generator1();

for(let c = 0; c < 6; c++){
  console.log(g1.next().value);
}
 