function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw ('Esperando instância de Date');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{ hour12: false });
}

try{
    const data = new Date('01-01-1970 12:30:00');
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    console.log(e);
} finally {
    console.log('Tenha um Bom Dia!');
}