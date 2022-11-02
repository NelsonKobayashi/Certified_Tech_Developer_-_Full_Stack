// Aula 3 - 31/05/2021
//Micro Desafio 4 - hatTrick
var fazerGol = 0;
var valorJogador = 100000;

function hatTrick (){
    fazerGol ++;
    if (fazerGol == 3) {
        valorJogador *= 1.10; 
        console.log ("Valor do Jogador atualizado: " + valorJogador);
    }
       
    return valorJogador; 
}

hatTrick();
hatTrick();
hatTrick();

