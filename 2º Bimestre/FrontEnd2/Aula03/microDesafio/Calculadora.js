

const calculoSoma = require('./modulos/soma');
const calculoSubtracao = require('./modulos/subtracao');
const calculoMultiplicacao = require('./modulos/multiplicacao');
const calculoDivisao = require('./modulos/divisao');

let somar = (a,b) => {
    let resultadoSoma;
    resultadoSoma = calculoSoma.soma(a,b);
    console.log(resultadoSoma);
}

let subtrair = (a,b) => {
    let resultadoSubtrair;
    resultadoSubtrair = calculoSubtracao.subtracao(a,b);
    console.log(resultadoSubtrair);
}

let multiplicar = (a,b) => {
    let resultadoMultiplicar;
    resultadoMultiplicar = calculoMultiplicacao.multiplicacao(a,b);
    console.log(resultadoMultiplicar);
}

let dividir = (a,b) => {
    let resultadoDividir;
    resultadoDividir = calculoDivisao.divisao(a,b);
    console.log(resultadoDividir);
}

somar (5,4);
subtrair (5,4);
multiplicar (5,4);
dividir (5,4);
dividir (5,0);

