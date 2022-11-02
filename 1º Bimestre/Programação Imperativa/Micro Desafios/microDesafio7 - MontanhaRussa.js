// Aula 4 - 02/06/2021
//Micro Desafio 7 - if/ else if/ else

let altura
let acompanhada

function podeSubir(altura,acompanhada){

    if(altura < 2.0 && altura >= 1.40){
        console.log("pode ir");
    }else if(altura < 1.40 && altura >= 1.20 && acompanhada == true){
        console.log("pode ir c acompanhante");
    }else{
        console.log("não poderá subir");
    }
    return podeSubir;
    }

podeSubir(2.30, false);
podeSubir(1.60, true);
podeSubir(1.30, true);
podeSubir(1.30, false);
podeSubir(1.10, true);
