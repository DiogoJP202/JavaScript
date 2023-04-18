function ran(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time){
  return new Promise((resolve, reject) =>{
    if(typeof msg !== 'string') reject( new Error("ERROR"));

    setTimeout(() =>{
      resolve(msg);
    }, time);
  });
}

function downloadPage(){
  const inCache = true;

  if(inCache){
    return Promise.reject('Page in cache!');
  } else{
    return wait("Page downloaded!", ran(1, 10));
  }
}

downloadPage()
.then(pageData => console.log(pageData))
.catch(err => console.error('Error: ' + err));
// Page in cache!