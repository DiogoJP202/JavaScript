function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number') 
    throw new ReferenceError(`x e y precisam ser números!`);
    
    return x + y; 
}
try {
    console.log(soma(1,2));
    console.log(soma('4',2));
} catch(err){
    console.log(`Error aleatorio`);
    console.log(err);
}