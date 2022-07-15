var Ninicio = document.getElementById ('txtNI')
var Nfim = document.getElementById ('txtNF')
var Npassos = document.getElementById ('txtNP')
var resp = document.getElementById ('res')
function clicar () {
if ( Ninicio.value.length == 0 || Nfim.value.length == 0 || Npassos.value.length == 0) {
    window.alert ('[ERROR] Verifique se as informacões estão corretas!')
} else {
    var Vinicio = Number(Ninicio.value)
    let Vfim = Number(Nfim.value)
    var Vpassos = Number(Npassos.value) 
    if(Vpassos === 0){
        Vpassos += 1
    }
    resp.innerHTML = 'Contando: <br> '
    if(Vinicio > Vfim){
      /*  
        while(Vinicio > Vfim){
        resp.innerHTML += (`${Vinicio} ➡️`)
        Vinicio = Vinicio - Vpassos
        }
        */ 
       for(let c = Vinicio; c > Vfim; c -= Vpassos) {
        resp.innerHTML += (`${c} ➡️`)
       }
            if ( c = Vfim ){
            resp.innerHTML += (`${c}🏁`)
        }
    } else {
        while(Vinicio < Vfim){
            resp.innerHTML += (`${Vinicio} ➡️`)
            Vinicio = Vinicio + Vpassos
        } if ( Vinicio = Vfim ){
            resp.innerHTML += (`${Vinicio}🏁`)
        }
    }
         
}
}