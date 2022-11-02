let qtdeMax;
let qtdeMed;

function controleCompras (qtdeMax, qtdeMed){
    switch (qtdeMax >= qtdeMed) {
        case true: 
            console.log("Não efetuar compra.")
            break
        case false:
            console.log("Efetuar compra.")
    }

}

controleCompras(100,50);
controleCompras(0,50);
controleCompras(50,50);
