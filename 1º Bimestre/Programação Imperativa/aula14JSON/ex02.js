// Aula 14 - 07/07/2021
// JSON        

/* criando um JSON e imprimindo */ 
let frutas = '{"fruta":"banana", "preco":8.50 , "tipo":["prata","maça","da terra", "ouro"], "origem":"Brasil"}';
console.log(frutas);


/* transformando em JS */
let frutasConvertidasJs = JSON.parse(frutas);
console.log(frutasConvertidasJs.origem);


/*retornado para o arquivo JSON atribuindo novo nome*/
let frutasReconvertidasJson = JSON.stringify(frutasConvertidasJs);
console.log(frutasReconvertidasJson);


