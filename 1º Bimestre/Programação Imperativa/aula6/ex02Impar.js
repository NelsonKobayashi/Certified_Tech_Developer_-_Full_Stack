//Aula 06 - 09/06/2021
//Repetições - For  

exibirTipo(10);

function exibirTipo(limite) {
    for(let i = 0; i<=limite; i++) {
        if (i % 2 != 0) {
            console.log(i + " é ímpar!");
        }
    }
}