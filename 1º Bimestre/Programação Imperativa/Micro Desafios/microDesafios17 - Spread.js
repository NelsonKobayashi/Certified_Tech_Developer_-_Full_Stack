//Aula 07 - 16/06/2021
//MicroDesafio 13 - Spread Operator

/* Objetivo
Entender a implementação do spread e parâmetro rest
Micro desafios

Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome. Além disso, crie outro array, desta vez chamado numeros, que deve conter os valores do array numerosPrimos adicionados através do spread, juntos com outros números.

Crie uma função maiorNumero() que receba N parâmetros, e retorne o menor número entre eles, utilizando a função Math.min(). Uma observação importante é que a função Math.min() NÃO deve receber um array como parâmetro, sendo portanto, necessário expandir os valores.
 */

const numerosPrimos = [1, 3, 5, 7, 9];

const numeros = [...numerosPrimos, 11, 13, 15];

console.log(Math.min(...numeros));

// não consegui!!!
// var menorNumero
// function maiorNumero(numeros) {
//     menorNumero = Math.min(...numeros);
//     return menorNumero;
// }
// console.log('com função:' + menorNumero);

