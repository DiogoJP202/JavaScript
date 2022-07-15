var janela = window.confirm('Deixar site verde?')
var corpo = window.document.getElementById('body1')
let listas = window.document.getElementsByTagName('ul')[0]
if (janela == true){
    corpo.style.background = '#57D48B'
    corpo.style.color = 'black'
}
var NTxt = document.getElementById('txtN')
let resp = document.getElementById('res')
function clicar() {
    if ( NTxt.value.length === 0){
        window.alert('[ERROR] Coloque um número!')
    } else {
       let VtxtN = Number(NTxt.value)
       /*let lista1 = document.getElementById('l1')
       let lista2 = document.getElementById('l2')
       let lista3 = document.getElementById('l3')
       let lista4 = document.getElementById('l4')
       let lista5 = document.getElementById('l5')
       let lista6 = document.getElementById('l6')
       let lista7 = document.getElementById('l7')
       let lista8 = document.getElementById('l8')
       let lista9 = document.getElementById('l9')
       let lista10 = document.getElementById('l10')*/
       let mult = 0
       while(mult <= 10){
        var lista = document.createElement('li')
        listas.appendChild(lista)
        lista.innerHTML = `${VtxtN} X ${mult} = ${VtxtN*mult}`
        mult += 1
       }
       resp.innerHTML = 'Tabuada carregada: '
       resp.style.textAlign = 'center'
       listas.style.border= ' 1px solid black'
       listas.style.width = '200px'
       listas.style.margin = 'auto'
       
      /* lista1.innerHTML = ` ${VtxtN} x 1 = ${VtxtN *=1}`
       VtxtN /= 1
       lista2.innerHTML = ` ${VtxtN} x 2 = ${VtxtN *=2}`
       VtxtN /= 2
       lista3.innerHTML = ` ${VtxtN} x 3 = ${VtxtN *=3}`
       VtxtN /= 3
       lista4.innerHTML = ` ${VtxtN} x 4 = ${VtxtN *=4}`
       VtxtN /= 4
       lista5.innerHTML = ` ${VtxtN} x 5 = ${VtxtN *=5}`
       VtxtN /= 5
       lista6.innerHTML = ` ${VtxtN} x 6 = ${VtxtN *=6}`
       VtxtN /= 6
       lista7.innerHTML = ` ${VtxtN} x 7 = ${VtxtN *=7}`
       VtxtN /= 7
       lista8.innerHTML = ` ${VtxtN} x 8 = ${VtxtN *=8}`
       VtxtN /= 8
       lista9.innerHTML = ` ${VtxtN} x 9 = ${VtxtN *=9}`
       VtxtN /= 9
       lista10.innerHTML = ` ${VtxtN} x 10 = ${VtxtN *=10}`
       VtxtN /= 10*/
    }
}