//Criar essas tags e colocar textos nelas automatícamente com a ajuda da estrutura de repetição "FOR".

const elementos = [
    {tag: 'div', Class:'div1', texto: 'Frase 1'},
    {tag: 'div', Class:'div2', texto: 'Frase 2'},
    {tag: 'div', Class:'div3', texto: 'Frase 3'},
    {tag: 'div', Class:'div4', texto: 'Frase 4'},
]

const res = document.getElementsByTagName('section')[0];

for (let i = 0; i < elementos.length; i++){
    const {tag, Class, texto} = elementos[i];
    const div = document.createElement(tag);

    div.classList.add(Class);
    div.innerHTML = texto;
    res.appendChild(div);
}
