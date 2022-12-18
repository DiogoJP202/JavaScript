fetch('pessoas.json') //fetch busca os dados da Url
  .then(resposta => resposta.json()) //.json retorna uma promise com o json convertido
  .then(json => carregaElementosNaPagina(json));

// axios('pessoas.json')
//   .then(resposta => carregaElementosNaPagina(resposta.data));
//tanto o axios quanto o fetch funcionam.

function carregaElementosNaPagina(json) {
  const table = document.querySelector('.resultado');

  let contador = 0;

  for(let pessoa of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = `${pessoa.idade} anos`;
    tr.appendChild(td2); 

    let td3 = document.createElement('td');
    td3.innerHTML = `${verificaSexo(pessoa.sexo)}`;
    tr.appendChild(td3); 

    let td4 = document.createElement('td');
    td4.innerHTML = `${pessoa.estado}`;
    tr.appendChild(td4); 

    let td5 = document.createElement('td');
    td5.innerHTML = `${pessoa.cpf}`;
    tr.appendChild(td5);

    table.appendChild(tr);

    if(par(contador)){
      tr.classList.add('par');
    }
    contador++;
  }
}

function par(numero){
  if(numero % 2 === 0) return true;
  return false;
}

function verificaSexo(sexo){
  if(sexo === "") return "-";
  return sexo;
}