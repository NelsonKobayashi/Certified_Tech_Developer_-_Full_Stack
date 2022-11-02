// Aula 14 - 07/07/2021
// JSON

let dadosJson = '{"Nome":"Nelson", "Sobrenome":"Kobayashi", "Sexo":"Masculino"}';
console.log(dadosJson);
// JSON é um objeto nativo

//desserialização ou parsing
//converte os dados Json acima em JS objeto literal. 
//Inicio da Rotina
let dadosConvertidosJs = JSON.parse(dadosJson); 
console.log(dadosConvertidosJs); 
console.log(dadosConvertidosJs.Nome.toUpperCase());
// Término da Rotina


//serialização 
//converte os dados Js em JSON.
//Inicio da Rotina 
let voltandoParaJson = JSON.stringify(dadosConvertidosJs); 
console.log(voltandoParaJson);
//Término da Rotina


/* Testando  objeto literal*/
let objetoLiteral = {materia: 'Prog. Imperativa', professor: 'William'};
console.log(objetoLiteral);
objetoLiteral.professor = objetoLiteral.professor.toUpperCase(); //trocando o professor com Maiúsculas
console.log(objetoLiteral);


/* Transformar o objeto em JSON*/           
 let objetoLiteralParaJson = JSON.stringify(objetoLiteral);
 console.log(objetoLiteralParaJson);