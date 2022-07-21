var TxtN = document.getElementById('txtN')
var valores = []
var resu = document.getElementById('res')
function clicarA(){
    var Vtxtn = Number(TxtN.value)
    var sele = window.document.getElementById('Select')
    function Colocarvalor(){
    var op = document.createElement('option')
    sele.appendChild(op)
    valores.push(Vtxtn)
    resu.innerHTML = ""
    return op.innerHTML = `Valor ${Vtxtn} adicionado!`
    } 
    function verificarvalor(n){
        if(n > 100 || n < 0){
            return window.alert('Escolha um número entre 0 e 100!')
        } else if(valores.indexOf(n) != -1){
            return window.alert('Não repita valores!')
        } else{
            return true
        }
    }
    if(verificarvalor(Vtxtn) == true){
        Colocarvalor(Vtxtn)
    }
}
function clickF(){
    function somando(){
        var n = 0
        for(var chave = 0; chave <= valores.length -1; chave += 1){
             n += valores[chave]
        }
        return n
    }
    valores.sort(function(a,b){return a-b})
    resu.innerHTML = ` Ao todo, temos ${valores.length} números cadastrados. <br> O maior valor informado foi ${valores[valores.length-1]}. <br> O menor valor informado foi ${valores[0]} . <br> Somando todos os valores temos ${somando(valores)}. <br> A média dos valores são  ${somando(valores)/valores.length}.`
}