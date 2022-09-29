const data = new Date();
console.log(data.toDateString());
const umaHora = 60 * 60 * 1000 ;
const umDia = 1000 * 60 * 60 * 24 ;

console.log('Ano', data.getFullYear());
console.log('Mês', data.getMonth());
console.log('Dia', data.getDate());
console.log('Dia da semana', data.getDay());
console.log('Horas', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Minutos', data.getSeconds());
console.log('Milisegundos', data.getMilliseconds());

console.log(Date.now());

const dataBrasil = formataData(data);

console.log(dataBrasil)

function formataData(data){
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    const milisegundos = data.getMilliseconds();

    return `${zeroAEsquerda(dia)}/${zeroAEsquerda(mes)}/${ano} ${horas}:${minutos}:${segundos}.${milisegundos} `
}
function zeroAEsquerda(num){
    return num >= 10 ? num :`0${num}`;
}