//Aula 9 - 21/06/21
//Fora da Pasta Módulos
//exImp05Impoit - Importando exExpCalculos.js 

const calculo = require('./modulos/exExpCalculos')

function calcular (a,b,operacao) {
    let resultado;
    
    if (operacao == '+') {
        resultado = calculo.soma(a,b);
    }
    if (operacao == '-') {
        resultado = calculo.subtracao(a,b);
    }
    if (operacao == '*') {
        resultado = calculo.multiplicacao(a,b);
    }
    if (operacao == '/') {
        resultado = calculo.divisao(a,b);
    }
    console.log(resultado);
}

calcular(2,50,'+');
calcular(3,15,'-');
calcular(5,4,'*');
calcular(100,25,'/');
calcular(2,0,'/');