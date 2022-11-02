//aula12 30/06/2021
//O map() -> método que cria uma nova matriz com os resultados da chamada de uma função, para cada elemento da matriz

let salarios = [1050.75, 2000.78, 5000.98, 7500.89];
let salariosAtualizados = salarios.map (reajuste); 
    
function reajuste (item){
    return item*1.4; //atualizando o salário em 40%    
}
console.log(salarios);
console.log(salariosAtualizados);

//com arrow function
let reajuste2 = item => item*1.4;
let salariosAtualizados2 = salarios.map (reajuste2);
console.log(salariosAtualizados2);1