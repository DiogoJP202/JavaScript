var horáriodesaopaulo = new Date()
var horário = horáriodesaopaulo.getHours()
if (horário <= 11) {
    console.log ('BOM DIA!')
    console.log (`Agora são exatamente ${horário}h.`)
} else if ( horário <= 18) {
    console.log ('BOA TARDE!')
    console.log (`Agora são exatamente ${horário}h.`)
} else if ( horário <= 23) {
    console.log ('BOA NOITE!')
    console.log (`Agora são ${horário}h.`)
} else {
    console.log ('Horário ultrapassou as 23h, por favor rever horário!')
}