var caixaN = document.getElementById('txtN')
function clicarAnalizar(){
    if (caixaN.value.length == 0){
        window.alert('Escolha algum número!')
    } else if (caixaN.value < 0 || caixaN.value > 100) {
        window.alert('Coloque um valor entre 0 e 100!')
    }else {
        var VcaixaN = Number(caixaN.value)
        var sele = document.getElementsByTagName('select')[0]
        var opt = document.createElement('option')
        sele.appendChild(opt)
        let Vscaixa = 0
        Vscaixa.push(VcaixaN)
        
    }
}