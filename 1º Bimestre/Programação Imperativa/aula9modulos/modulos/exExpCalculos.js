//Aula 9 - 21/06/21
//Dentro da Pasta Módulos
//exExpCalculos.js 

module.exports.soma = (a,b) => a + b;

module.exports.subtracao = (a,b) => a - b;

module.exports.multiplicacao = (a,b) => a * b;

module.exports.divisao = (a,b) => {
    if (b!=0) {
        return a / b;
    } else {
        return 'Impossível dividir por Zero.';
    }
}