const Nome = window.prompt('Qual é seu nome completo ? ');
const LocalPerg = window.document.getElementById('perguntas');
function CarregarSite(){
    LocalPerg.innerHTML += `Bem Vindo, <u>${Nome}</u>! <br>`;
    LocalPerg.innerHTML += `Seu nome tem <u>${Nome.length}</u> letras! <br>`;
    LocalPerg.innerHTML += `A segunda letra do seu nome é <u>"${Nome[1]}"</u>! <br>`;
    LocalPerg.innerHTML += `O primeiro índice da letra "o" no seu nome é <u>${Nome.indexOf('o')}</u>! <br>`;
    LocalPerg.innerHTML += `O último índice da letra "o" no seu nome é <u>${Nome.lastIndexOf('o')}</u>! <br>`;
    LocalPerg.innerHTML += `As últimas 3 letras do seu nome são <u>${Nome.slice(-3)}</u>! <br>`;
    LocalPerg.innerHTML += `As partes do seu nome são <u>${Nome.split(' ')}</u>! <br>`;
    LocalPerg.innerHTML += `Seu nome apenas com letras minúculas são: <u>${Nome.toUpperCase()}</u>! <br>`;
    LocalPerg.innerHTML += `Seu nome apenas com letras maiúsculas são: <u>${Nome.toLowerCase()}</u>! <br>`;
}