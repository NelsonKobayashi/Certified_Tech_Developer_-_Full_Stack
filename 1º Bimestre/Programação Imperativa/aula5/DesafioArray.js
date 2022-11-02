//Aula 05 - 07/06/2021
// Desafio Array

let ListaCompras = ["Arroz" , "Feijão" , "Ovo" , "Alho" , "Frango"];

//push - inseri no final
ListaCompras.push("Banana");
console.log(ListaCompras);

//pop - retira no final
ListaCompras.pop();
console.log(ListaCompras);

//shift - retira no inicio
ListaCompras.shift();
console.log(ListaCompras);

//unshift - inseri ni inicio
ListaCompras.unshift("Arroz Integral");
console.log(ListaCompras);

//indexOf - retorna o índice
console.log(ListaCompras.indexOf("Ovo"));

//lastIndexOf - Retorna a última ocorrência do dado solicitado
console.log(ListaCompras.lastIndexOf("Alho"));

//join - junta todos os indices 
console.log (ListaCompras.join("- (◕‿◕) -"));