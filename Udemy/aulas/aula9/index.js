let UmaString = "Um texto";
let frase = "O rato roeu a roupa do rei";
let fruta = "abacaxi";
console.log(UmaString);//vai mostrar a variável.
console.log(UmaString[0]);//mostrar o valor da chave 0.
console.log(UmaString.charAt(3));//mostrar o valor da chave 3.
console.log(UmaString.concat(" em um belo dia!"));//Faz concatenação de um valor com a string.
console.log(UmaString.match("m"));//procura um valor na string e aceita expresssões regulares e retornando seu indice e outras informações.
console.log(frase.indexOf("rato"));//procura um valor na string e retornando seu indice.
console.log(frase.lastIndexOf("rei"));//procura um valor na string começando da última palavra e retornando seu indice.
console.log(frase.search(/r/));//procura um valor na string começando da última palavra, retornando seu indice e aceita expressões regulares.
console.log(frase.replace(/r/g, "l"));//Reposiciona valores.
console.log(frase.length);//mostra a quantidade de caracteres de uma certa string.
console.log(frase.slice(0, 6));//pega uma parte especifica da string.
console.log(frase.split(" "));//Divide a string em partes trocando um caracter selecionado por divisões.
console.log(fruta.toUpperCase);//deixa toda a string em maiuscula.
console.log(fruta.toLowerCase);//deixa toda a string em minuscula.
