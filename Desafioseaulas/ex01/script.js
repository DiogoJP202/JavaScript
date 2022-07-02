function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var foto = window.document.getElementsByClassName ('imagem')[1]
    var mensagem = window.document.getElementById ('msg')
    var fundo = window.document.querySelector ('body')
    var corbranca = window.document.getElementsByClassName ('branco') [1]
    var corbranca1 = window.document.getElementsByClassName ('branco') [0]
    mensagem.innerHTML = `Agora são ${hora}h.`
    if (hora >= 0 && hora <= 12) {
        //Bom Dia
        foto.src = 'imagens/manha.png'
        fundo.style.background = '#a6b5b8'
    } else if(hora >= 13 && hora <= 17) {
        //Boa tarde
        foto.src = 'imagens/tarde.png'
        fundo.style.background = '#e06a0b'
    } else {
        foto.src = 'imagens/noite.png'
        fundo.style.background = '#081b1f'
        corbranca.style.color = 'white'
        corbranca1.style.color = 'white'
    }
}