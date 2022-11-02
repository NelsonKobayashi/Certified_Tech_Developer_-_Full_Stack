let qtdeMax;
let qtdeMed;
let compra;

function controleCompras (qtdeMax, qtdeMed){
let compra = qtdeMax >= qtdeMed? "Não efetuar compra" : "Efetuar compra"; 
console.log(compra);
}

controleCompras(100,50);
controleCompras(0,50);
controleCompras(50,50);
