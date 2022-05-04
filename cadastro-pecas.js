// Se a peça possuir mais de 100 gramas pode cadastrar;
// dada a capacidade de cada caixa, caso a lista de peça seja superior a 10, imprimir menssagem de erro com a mensagem Informando não ter cadacidade suficiente;
// caso a peça tenha nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.

let entrada1 = require("readline-sync");

let peso = entrada1.question("Qual o peso da peca? ");

if(peso >= 100 ){
    console.log("Peca tem peso suficiente para cadastrar");
    
} else {
console.log("Peca com peso fora do padrao para cadastro");
}

let entrada2 = require("readline-sync");

let listaPecas = entrada2.question("quantidade de pecas");

if(listaPecas >= 10){
    console.log("A Lista esta cheia, não tem capacidade suficiente para cadastro");
} else {
    console.log("Peca podera ser cadastrada ! ");
}

let entrada3 = require("readline-sync");

let nomePeca = entrada3.question("Digite o nome da peca ");

if(nomePeca.length < 3) {
    console.log("Nome muito curto!! cadastro deve contar mais de 3 caracteres ");
}

console.log("Fim do Programa");