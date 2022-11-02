/* Objetivos
Nessa prática veremos um pouco melhor como as Promises vêm para resolver os problemas, ou o visual, das funções callbacks. Vamos lembrar de usar o que vimos até agora para fazer nosso código.
Arquivos JSON que serão utilizados nestas atividades: file.json, file2.json e file3.json

Micro Desafio 1
Dado o seguinte código de leitura de arquivos com FileSystem, necessitamos modificá-lo para a sintaxe de Promises, de modo que possamos ver os arquivos corretamente através do console.
 
 */

const fs = require('fs');

// forma convencional
fs.readFile('file.json', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(JSON.parse(data));
    }
});

// utilizando Promises

const promessa = new Promise((resolve, reject) => {
    console.log("Requisição em andamento...")
    //criação de um delay de 3 segundos
    setTimeout(
        () => { //verficamos se a promise dará erro ou não
            if (conexao == false) {
                reject("ACESSO NEGADO - SERVER NÃO CONECTADO")
            } else {
                resolve(JSON.stringify({
                    vserver: "168.192.0.1",
                    vlogin: "admin",
                    vsenha: 123
                }))
            }
        }, 3000)
})

promessa
    .then((resolve) => { //consumo ou utilização do retorno da promise
        const dados = JSON.parse(resolve);
        console.log(dados);
    }).catch((reject) => {
        console.log(reject)
    })
