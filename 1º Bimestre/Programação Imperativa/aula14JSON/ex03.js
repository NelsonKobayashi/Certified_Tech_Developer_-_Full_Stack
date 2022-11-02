// Aula 14 - 07/07/2021
// JSON   
// Objetivo da Aplicação: Escrevendo arquivos -- teste.txt --
// fs= file system -> apaga o arquivo que já existe (sobreescreve o arquivo)

const fs = require('fs');
/* criando um JSON e imprimindo */ 
let frutas = '{"fruta" : "banana", "preco" : 8.50 , "tipo" : ["prata","maça","da terra", "ouro"], "origem" : "Brasil"}';
fs.writeFileSync('teste.txt', frutas);


/* lendo o arquivo Teste.txt */
let lerJson = fs.readFileSync('teste.txt','utf-8');
console.log(lerJson);


/* converter o JSON para JS */
let convertendoLerJson = JSON.parse(lerJson);
console.log(convertendoLerJson);
