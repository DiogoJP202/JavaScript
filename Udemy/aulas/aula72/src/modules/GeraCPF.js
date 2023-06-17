import ValidaCPF from "./ValidaCPF";

export default class  GeraCPF{
    random(min = 100000000, max= 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    geraNovoCPF(){
        const cpfSemDigito = this.random();
        const digito1 = ValidaCPF.criaDigito(cpfSemDigito);
        const digito2 = ValidaCPF.criaDigito(cpfSemDigito + digito1);
        const novoCpf = cpfSemDigito + digito1 + digito2;

        return this.CPFformatado(novoCpf);
    }

    CPFformatado(cpf){
        return (
            cpf.slice(0, 3) + "." +
            cpf.slice(3, 6) + "." +
            cpf.slice(6, 9) + "-" +
            cpf.slice(9, 12)
        )
    }
}