function retornaHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{ hour12: false });
}
function paraInteval(){
    console.log(retornaHora(),'hoi')
}
let timer = setInterval(paraInteval, 1000);

setTimeout(function(){
    clearInterval(timer)}, 10000
)