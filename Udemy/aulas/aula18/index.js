let horario = 22;

if(horario >= 1 && horario <= 12){
    console.log("BOM DIA!")
} else if(horario > 12 && horario <= 18) {
    console.log("BOA TARDE!")
} else if(horario > 18 && horario <= 23 || horario == 0) {
    console.log("BOA NOITE!")
} else {
    console.log("Horário inválido")
}