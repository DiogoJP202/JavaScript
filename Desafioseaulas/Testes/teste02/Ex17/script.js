var InputN = window.document.getElementById('txtN')
var Pteste = window.document.getElementById('teste')
function clicarA(){
    var VIN = Number(InputN.value)
    function par_imp(n) {
    if( n % 2 == 0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
var res = par_imp(VIN)
Pteste.innerHTML = res
}