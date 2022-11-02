//aula12 30/06/2021
//O reduce() -> Método que reduz a matriz em um único valor
//              O método que executa uma função fornecida para cada valor da matriz
//              O valor de retorno é armazenado em um acumulador (resultado / total)


const numeros = [1,2,-3,4,5,0,7,8,9,19]
let resultado = numeros.reduce(function(acumulador, item){
    return acumulador + item;
})
console.log(resultado);

//com arrow function
let resultado2 = numeros.reduce((acumulador2, item2) => {return acumulador2 + item2});
console.log(resultado2);