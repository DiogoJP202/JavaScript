function verificar(){ //ao clicar no botão, o codigo abaixo ira rodar.
    var data = new Date ()
    var ano = data.getFullYear ()
    var fano = document.getElementById ('txtano')
    var resul = document.getElementById ('res')
    if(fano.value.length == 0 || Number(fano.value > ano)){ //se o ano colocado tiver menos que 0 objetos ou for maior que o ano atual, ira aparecer a mensagem abaixo. //Length é a quantidade de digitos que um objeto tem.
        window.alert('[ERRO] Verificar informacões preenchidas!')
    } else {
        var fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('ip', 'foto')
        if ( fsexo[0].checked ) {
            gênero = 'Homem'
            if (idade >= 0 && idade <=13 ){
                img.src='imagens/menino.png'//poderiamos trocar o "img.src='imagens/menino.png'" por "img.setAttribute('src', 'imagens/menino.png'"
            }
            else if ( idade <= 22){
                img.src='imagens/homemjovem.png'
            } else if ( idade <= 45) {
                img.src='imagens/homem.png'
            } else {
                img.src='imagens/idoso.png'
            }
        } else if( fsexo[1].checked ) {
            gênero = 'Mulher'  
            if (idade >= 0 && idade <=13 ){
                img.src='imagens/menina.png'
            }
            else if ( idade <= 22){
                img.src='imagens/mulherjovem.png'
            } else if ( idade <= 45) {
                img.src='imagens/mulher.png'
            } else {
                img.src='imagens/idosa.png'
            }
        } else {
            window.alert('Marque a caixa com homem ou mulher!')
        }
        resul.innerHTML = `Detectamos ${gênero} com ${idade}.`
        resul.appendChild(img)
    }
    
}