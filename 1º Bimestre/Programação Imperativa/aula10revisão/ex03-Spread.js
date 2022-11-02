
//Spread - é muito útil para quebrar um array

function somar (x, y, z){
    return x + y + z;
}

const numeros = [15, 27, 39];
console.log('Total...............: ' + somar(...numeros) + '\n');

/*-------------------------------------------------------------- */

console.log('Maior número do Array: ' + Math.max (...numeros));

console.log('Menor número do Array: ' + Math.min (...numeros) + '\n');

/*-------------------------------------------------------------- */

/* juntando Arrays */
let nome = 'Nelson';
let sobrenome = 'Kobayashi';

let nomeCompleto = [nome,sobrenome];
console.log(...nomeCompleto + '\n');

/*------------------------------------------------------------------ */


