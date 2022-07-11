function carregar(){
    var Ninicio = document.getElementById ('txtNI')
    var Nfim = document.getElementById ('txtNF')
    var Npassos = document.getElementById ('txtNP')
    var resp = document.getElementById ('res')
    function clicar() {
    if (Ninicio.value.length == 0 || Nfim.value.length == 0){
        window.alert('Verifique se as informacões estão corretas!')
    } else{
        var Vinicio = Number(Ninicio.value)
        let Vfim = Number(Nfim.value)
        let Vpassos = Number(Npassos.value)
        while(Vinicio <= Vfim){
            resp.innerHTML += 1
        }
    }
}
}