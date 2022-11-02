

function preparo (comida, tempo){
    if (comida == "pipoca" || comida == "macarrao" || comida == "carne" || comida == "feijao" || comida == "brigadeiro") {
        switch (comida) {
            case "pipoca":
                if (tempo == 10) {console.log ("A pipoca está pronta, bom apetite."); }
                else if (tempo < 10) { console.log ("Tempo insuficiente, o milho não estourou."); }
                else if (tempo > 10 && tempo < 30) { console.log("A pipoca queimou.");}
                else if (tempo > 30) {console.log("KABUMMMMMMMMMMMMMMMMMMMMMMMMMMMM!!!!");}
                break;
            case "macarrao":
                if (tempo == 8) { console.log ("Comida pronta."); }
                else if (tempo < 8) { console.log ("Tempo insuficiente."); }
                else if (tempo > 8 && tempo < 24) { console.log("A comida queimou.");}
                else if (tempo > 24) {console.log("KABUMMMMMMMMMMMMMMMMMMMMMMMMMMMM!!!!");}
                break;
            case "carne": 
                if (tempo == 15) { console.log ("Comida pronta."); }
                else if (tempo < 15) { console.log ("Tempo insuficiente."); }
                else if (tempo > 15 && tempo < 45) { console.log("A comida queimou.");}
                else if (tempo > 45) {console.log("KABUMMMMMMMMMMMMMMMMMMMMMMMMMMMM!!!!");}
                break;
            case "feijao":
                if (tempo == 12) { console.log ("Comida pronta."); }
                else if (tempo < 12) { console.log ("Tempo insuficiente."); }
                else if (tempo > 12 && tempo < 36) { console.log("A comida queimou.");}
                else if (tempo > 36) {console.log("KABUMMMMMMMMMMMMMMMMMMMMMMMMMMMM!!!!");}
                break;
            case "brigadeiro":
                if (tempo == 8) { console.log ("Comida pronta."); }
                else if (tempo < 8) { console.log ("Tempo insuficiente."); }
                else if (tempo > 8 && tempo < 24) { console.log("A comida queimou.");}
                else if (tempo > 24) {console.log("KABUMMMMMMMMMMMMMMMMMMMMMMMMMMMM!!!!");} 
                break;
        }
    } else {
        console.log ("Prato Inexistente.")
    }
}

preparo ("pipoca",10);
preparo ("macarrao", 15);