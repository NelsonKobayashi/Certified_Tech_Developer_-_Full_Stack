// Aula 5 - 02/06/2021
//Micro Desafio 9 - Arrays

let nomes = ["Lilian", "Letícia", "Ethan", "Nelson"];
console.log(nomes, "\n");

//push - inclui no final
console.log("O método push() insere mais um item ao final do array.")
nomes.push("Kobayashi");
console.log(nomes, "\n");


//pop - retira no final
console.log("O método pop() retira um item ao final do array.")
nomes.pop();
console.log(nomes, "\n");

//shift - retira no começo
console.log("O método shift() retira um item no início do array.")
nomes.shift();
console.log(nomes, "\n");

//unShift - insere no inicio
console.log("O método unShift() insere um ou mais itens no início do array.")
nomes.unshift("Miyuki");
console.log(nomes, "\n");

//join - junta todos e transforma em array
console.log("O método join() apresenta todos os itens do array juntos, transformando-os todos em uma string.")
console.log(nomes.join(), "\n");

console.log("Você pode definir o que quiser np método join, para utilizar como separador dos itens do array:");
console.log(nomes.join("- (◕‿◕) -"), "\n");

