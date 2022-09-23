let usuarios = [];
let informacoes;
let resp = document.getElementById('resp')
const form = document.querySelector('.formu')

form.addEventListener('submit', enviarEventoForm)

function enviarEventoForm(evento){
    evento.preventDefault();

    let nome = document.getElementsByClassName('info')[0]
    let sobrenome = document.getElementsByClassName('info')[1]
    let peso = document.getElementsByClassName('info')[2]
    let altura = document.getElementsByClassName('info')[3]
    informacoes = 
    {
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,
        descricao(){
            return `${this.nome} ${this.sobrenome} ${this.peso} ${this.altura}`
        }
    }
    usuarios.push(informacoes)
    resp.innerHTML = ``
    resp.innerHTML += `${informacoes.descricao()}`
}
