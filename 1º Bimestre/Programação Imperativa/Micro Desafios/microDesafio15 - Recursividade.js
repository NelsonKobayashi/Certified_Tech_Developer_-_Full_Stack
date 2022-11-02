//Aula 06 - 14/06/2021
//microDesafio 12 - Cálculo de Fatorial com FOR e RECURSIVIDADE 


/* O tech leader da equipe precisa criar um código onde seja calculado o número fatorial de um valor inteiro. Para isto, deveremos:

Criar uma função que calcula o fatorial usando loop (for);
Recriar esta mesma função usando recursividade (sem o uso de for) */

/** Fatorial com laço FOR */
function fatorialComFor(n){
    var f = 1;
    for(let i = 0; i <= n-1; i++){
        f = f * (n-i);
    }
    return f;
}
console.log(fatorialComFor(6))


/** Fatorial com Recursividade */
function fatorial (num){
    if(num==1){
        resultado = 1;
    }else{//A recursividade está na instrução fatorial(num-1), pois ela chama a função novamente para calcular o valor anterior, até a condição de IF ser atendida.
        resultado = num * fatorial(num-1);
    }
    return resultado;
}

console.log(fatorial(5));
    
