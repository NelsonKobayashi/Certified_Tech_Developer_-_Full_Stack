//Aula 06 - 09/06/2021
//microDesafio 11 - Arrays

console.log("Passo 1");
const pontos = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];

for (i = 0; i < pontos.length ; i++){
    console.log(pontos[i]);
}

console.log ("---------------------------------------------------------------")

console.log("\n" + "Passo 2");
let nomes = ["Paulo", "Giovani", "Breno", "David", "Nelson"];
console.log(nomes);
nomes.pop();
nomes.push("Kobayashi");
console.log(nomes);

console.log ("---------------------------------------------------------------")

console.log("\n" + "Passo 3");
let animais = ["Cachorro", "Gato", "Galinha", "Cavalo", "Peixe"];
let frutas = ["Maçã", "Pera", "Uva", "Laranja", "Limão"];
console.log("Array animais = " + animais);
console.log("Array frutas = " + frutas);

let ultimoAnimal = animais.pop(); //retirando o último animal e armazenando em uma variável
let ultimaFruta = frutas.pop(); //retirando o última fruta e armazenando em uma variável

animais.push(ultimaFruta); //adicionando a última fruta no Array Animais através da variável criada
console.log("\n" + "Array animais = " + animais);

frutas.push(ultimoAnimal); // adicionando o último animal no Array Frutas através da variável criada
console.log("Array frutas = " + frutas);

let primeiroAnimal = animais.shift(); //retirando o primeiro animal e armazenando em uma variável
let primeiraFruta = frutas.shift(); //retirando a primeira fruta e armazenando em uma variável

animais.unshift(primeiraFruta); //adicionando a primeira fruta no Array Animais através da variável criada
console.log("\n" + "Array animais = " + animais);

frutas.unshift(primeiroAnimal); // adicionando o primeiro animal no Array Frutas através da variável criada
console.log("Array frutas = " + frutas);


console.log ("---------------------------------------------------------------")

console.log("\n" + "Passo 4");
let nomes1 = ["Paulo", "Giovani", "Breno", "David", "Nelson"];

function exibirNome(){
    for (i = 0; i < nomes1.length; i++ ) {
        console.log(nomes1[i]);
    }
    
}
exibirNome();
