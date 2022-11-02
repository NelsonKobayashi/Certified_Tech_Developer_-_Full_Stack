/*
Aula 13 - 05-07-21  
Micro Desafio em grupo
Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.
*/
let {Aluno} = require ('./modulos/aluno.js')

let aluno = {
    nome: 'Nelson', 
    faltas: 0,
    notas: [1,2,3,4]
}

let Breno = new Aluno ('Breno', 0, [7,8,9,6]);

console.log(Breno);
