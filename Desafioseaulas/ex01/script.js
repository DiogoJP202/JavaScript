function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var foto = window.document.getElementsByClassName ('imagem')[1]
    var mensagem = window.document.getElementById ('msg')
    var fundo = window.document.querySelector('body')
    mensagem.innerHTML = `Agora são ${hora}h.`
    if (hora >= 0 && hora <= 12) {
        //Bom Dia
        foto.src = 'imagens/manha.png'
        fundo.style.background = 'cornflowerblue'
    } else if(hora >= 13 && hora <= 17) {
        //Boa tarde
        foto.src = 'imagens/tarde.png'
        fundo.style.background = 'rgb(173, 78, 0)'
    } else {
        foto.src = 'imagens/noite.png'
        fundo.style.background = 'rgb(18, 2, 78)'
    }
}