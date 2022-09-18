const Numero = Number(window.prompt('Escolha um número: '));
const resp = window.document.getElementById('perguntas');
const titulo = window.document.getElementsByTagName('H1')[0]
function CarregarSite(){
    titulo.innerHTML += Numero;
    resp.innerHTML += `Raiz quadrada de ${Numero} é <strong>${Numero ** 0.5}</strong>.<br>`;
    resp.innerHTML += `${Numero} é inteiro? <strong>${Number.isInteger(Numero)}</strong>.<br>`;
    resp.innerHTML += `${Numero} não é um número(é um NaN?)? <strong>${Number.isNaN(Numero)}</strong>.<br>`;
    resp.innerHTML += `Arredondando para cima fica <strong>${Math.ceil(Numero)}</strong>.<br>`;
    resp.innerHTML += `Arredondando para baixo fica <strong>${Math.floor(Numero)}</strong>.<br>`;
    resp.innerHTML += `Com apenas duas casas decimais fica <strong>${Numero.toFixed(2)}</strong>.<br>`;
}