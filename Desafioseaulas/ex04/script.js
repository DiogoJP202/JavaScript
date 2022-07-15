var Num = document.getElementById('txtN')
 var resp = document.getElementById('res')
 let selet = document.getElementById('Seletor')
function clicar(){
 if (Num.value.length == 0){
    window.alert('[ERROR] Coloque um número!')
 } else {
   selet.innerHTML = ''//Quando ativar a fuction, o selet fica vazio
    resp.innerHTML = 'Tabuada carregada: '
    let VNum = Number(Num.value)
    var mult = 0
   while(mult <= 10) {
    var item = document.createElement('option') //cria um elemento no documento html.
    item.innerHTML += `${VNum} X ${mult} = ${VNum*mult}`
    item.value = `item${mult}`
    selet.appendChild(item)//coloca esse elemento em algum lugar(no select, nesse caso.).
    mult += 1
   }
   if ( mult = 10){
      mult = 0
   }
   selet.style.height = '300px'
 }
}