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
                console.log(`\n${comida} preparado(a), bom apetite!`);
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

preparo ('pipoca', 10);
preparo ('pipoca', 9);
preparo ('pipoca', 11);
preparo ('pipoca', 30);

preparo ('macarrao', 8);
preparo ('macarrao', 7);
preparo ('macarrao', 9);
preparo ('macarrao', 24);

preparo ('carne', 15);
preparo ('carne', 14);
preparo ('carne', 16);
preparo ('carne', 45);

preparo ('feijao', 12);
preparo ('feijao', 11);
preparo ('feijao', 13);
preparo ('feijao', 36);

preparo ('brigadeiro', 8);
preparo ('brigadeiro', 7);
preparo ('brigadeiro', 9);
preparo ('brigadeiro', 24);