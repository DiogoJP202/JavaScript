function sum(x, y){ 
    if(typeof x !== 'number' || typeof y !== 'number'){
      throw('x and y must be numbers!'); //throw an error
    }
    return x + y;
  }
  
  try{
    console.log(sum(1, 2));
    console.log(sum('1', 2)); //Uncaught x and y must be numbers!
  } catch(error){
     console.log(error);
  }
  //to show the complete error, do "throw new ReferenceError(...);"[There are many others erros types]