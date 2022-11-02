// Aula 4 - 02/06/2021
//Micro Desafio 8 - switch
let estacao;

function estacaoAno (estacao){
    if(estacao == "verao" || estacao == "outono" || estacao == "inverno" || estacao == "primavera"){
            switch (estacao) {
                case "verao":
                    console.log ("Que calor hein?!");
                    break
                case "outono":
                    console.log ("A estação que as folhas caem.");
                    break
                case "inverno":
                    console.log ("Frio demais!");
                    break
                case "primavera":
                    console.log ("O Momento que as flores crescem?!");
                    break
            }
    }else{
        console.log("Ops, estação inválida, talvez seja uma de marte!")
    }
}

estacaoAno("verao");
estacaoAno("inverno");
estacaoAno("primavera");
estacaoAno("outono");
estacaoAno("BobEsponja");
