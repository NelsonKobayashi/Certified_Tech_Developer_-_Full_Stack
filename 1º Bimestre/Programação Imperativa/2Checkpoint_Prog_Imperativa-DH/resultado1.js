var pratos = {
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro: 8
}

function preparo (comida, tempo){
    if (comida == 'pipoca' || comida == 'macarrao' || comida == 'carne' || 
        comida =='feijao' || comida == 'brigadeiro') {
            if (tempo == pratos[comida]){
                console.log(`${comida} preparado(a), bom apetite!`);
            } else if (tempo < pratos[comida]) {
                console.log (`Tempo insuficiente, o(a) ${comida} não está pronto(a).`);} 
            else if (tempo > pratos[comida] && (tempo < pratos[comida]*3)) {
                console.log (`O(A) ${comida} queimou... :(`);
            }
            else {
                console.log('KABUUUUUUMMMM !!!! *.*');
            }
    } else { 
        return 'Comida inexistente, tente novamente.'
    }
}
preparo ('pipoca', 29);
