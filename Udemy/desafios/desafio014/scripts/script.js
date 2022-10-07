const inputTarefa = document.querySelector('.input-tarefa');
const buttonTarefa = document.querySelector('.button-tarefa');
const tarefas = document.querySelector('.tarefas');

inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        criaTarefa(inputTarefa.value);
    }
})

buttonTarefa.addEventListener('click', function(event){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
})

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    liparInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function liparInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerText += "  ";
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.setAttribute('class','apagar');
    botaoApagar.setAttribute('title','apagar esta tarefa?');
    li.appendChild(botaoApagar);
}

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON);    
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefas = JSON.parse(tarefas);
    for (let tarefa of listaTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();