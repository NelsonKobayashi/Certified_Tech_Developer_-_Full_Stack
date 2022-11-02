// Aula 3 - 31/05/2021
//Micro Desafio 1 - Cálculo IMC

let nome = "Nelson";

function valorIMC(peso, altura){
    return(peso/(altura*altura))
}

console.log(valorIMC( 70 , 1.72 )); 
console.log(valorIMC( 65.5 , 1.60 ));
console.log(valorIMC( 83 , 1.85 ));


//console.log("O " + nome + "tem o IMC de: " + valorIMC(70 , 1.72));