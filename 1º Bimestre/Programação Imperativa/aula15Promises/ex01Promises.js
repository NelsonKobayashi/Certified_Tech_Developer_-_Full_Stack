// 12-07-21 - Aula 15
// Promises
//O que são promises? 
/* Promises é um objeto javascript que vincula:
    1 - A produção de código.
    2 - O consumo desse código.
 */
/* Propriedades do Objeto Promisse: 
    - Pendente
    - Realizada
    - Rejeitada
 */

function meuVerficador(resposta) {
    console.log(resposta);
}

let minhaPromessa = new Promise(
    function (Resolve, Reject) {
        let x = 0;
        if (x == 0) {
            Resolve("Tudo Ok!")
        } else {
            Reject("Deu erro....:(")
        }
    }
);

minhaPromessa
    .then(function (Resolve) {
        meuVerficador(Resolve)
    })
    .catch((Reject) => {
        console.log(Reject)
    });


