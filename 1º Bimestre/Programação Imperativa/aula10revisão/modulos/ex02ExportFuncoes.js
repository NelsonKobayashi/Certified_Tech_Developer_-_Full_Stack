//23/06/2021
//dentro da pasta módulos

exports.somar = (a,b) => a + b;
exports.subtrair = (a,b) => a - b;
exports.multiplicar = (a,b) => a * b;
exports.dividir = (a,b) => {
    if (b != 0) {
        return a / b;
    } else {
        return 'Impossível dividir por Zero.';
    }
}

//Função letra MAIÚSCULA
exports.maiuscula = (texto) => console.log (texto.toUpperCase());