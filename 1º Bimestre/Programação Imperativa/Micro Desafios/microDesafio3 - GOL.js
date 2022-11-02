// Aula 3 - 31/05/2021
//Micro Desafio 3 - GOL!

var nomeJogador = "Valderrama";
var golsJogador = 0;
var precoEmDolar;

function fazerGol(){
    golsJogador++;
    console.log("GOL!!!");
    precoEmDolar =+ 10000; 
    return precoEmDolar;
}
fazerGol();
console.log("Preço atual de " + nomeJogador + " U$: " + precoEmDolar);
