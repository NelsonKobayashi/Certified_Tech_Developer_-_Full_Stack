//23/06/2021
//importando funções de módulos

const calculadora = require('./modulos/ex02ExportFuncoes');

console.log(calculadora.somar(2,5));
console.log(calculadora.subtrair(8,5));
console.log(calculadora.multiplicar(7,5));
console.log(calculadora.dividir(10,5));
console.log(calculadora.dividir(2,0));

//================================================================

calculadora.maiuscula('nelson yoshiaki kobayashi');