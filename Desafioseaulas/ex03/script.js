var Ninicio = document.getElementById ('txtNI')
var Nfim = document.getElementById ('txtNF')
var Npassos = document.getElementById ('txtNP')
var resp = document.getElementById ('res')
function clicar () {
if ( Ninicio.value.length == 0 || Nfim.value.length == 0 || Ninicio.value > Nfim.value) {
    window.alert ('Verifique se as informacões estão corretas!')
} else {
    var Vinicio = Number(Ninicio.value)
    let Vfim = Number(Nfim.value)
    var Vpassos = Number(Npassos.value) 
    var parag = document.createElement('p')
    parag.setAttribute('id', 'contagem')
    
        resp.innerHTML = 'Contando:'
        while(Vinicio < Vfim){
            parag.innerHTML += `${Vinicio + Vpassos}➡️`
        }
}
}