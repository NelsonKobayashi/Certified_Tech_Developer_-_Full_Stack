exports.tempo = (tempoInserido,tempoPadrao) => {
    if (tempoInserido = tempoPadrao){
        console.log("Prato pronto, bom Apetite!") 
    } else if (tempoInserido > (tempoPadrao * 3)){
        console.log("KABUUUUMMMM!!!")
    } else if (tempoInserido < tempoPadrao) {
        console.log("Tempo insuficiente... :(")
    } else {
        console.log("A comida queimou. :(")
    }
} 