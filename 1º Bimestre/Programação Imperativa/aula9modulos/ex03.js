//Aula 9     21/06/2121
// Objetos Literais

let carro = {
    placa: 'EMX6366',
    cor: 'preto',
    ano: 2010,
    flex: true,
    mostrar: function() {
        return "Características do seu carro novo:\nPlaca = " + carro.placa + 
                                                    "\nCor = " + carro.cor +
                                                    "\nAno = " + carro.ano +
                                                    "\nBicombustível?" + carro.flex;
    }
}

console.log(carro.mostrar());