/*
Aula 13 - 05-07-2021
Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1 
*/

let {Aluno} = require ('./modulos/aluno.js')

let aluno = {
    nome: 'Nelson', 
    faltas: 0,
    notas: [1,2,3,4],
    media: function() {
        /* return aluno.notas.reduce((acumulador, item) => acumulador + item)/notas.length;
        }) */
            return (aluno.notas[0] + aluno.notas[1] + aluno.notas[2] + aluno.notas[3]) / 4;
    },
    faltaCont: function () {
        return aluno.faltas += 1;
    }
}

let Breno = new Aluno ('Breno', 0, [7,8,9,6]);

console.log(aluno, "\nMédia = " + aluno.media(), "\nFaltas = " + aluno.faltaCont());