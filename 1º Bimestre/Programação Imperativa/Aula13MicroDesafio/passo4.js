/* 
Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
 */

/* criando objeto solicitado no enunciado */
curso = {
    nomeCurso: 'Prog. Imperativa',
    notaAprov: 7,
    faltasMax: 2,
    estudantes: [['Nelson', 2, [7, 6, 5, 4]],
                 ['Breno', 1, [7, 8, 9, 7]],
                 ['Mariana', 0, [9, 9, 9, 9]]],
    adicionar: function (nome, faltas, notas) {  /*criação do método para inserir novos alunos*/ 
                    curso.estudantes.push ([nome, faltas, notas]);
                }
};

/*chamando o método e inserindo novos alunos ao objeto curso.estudantes*/
let Fernanda = new curso.adicionar ('Fernanda', 1, [8, 9, 8, 9]); 
let Saulo = new curso.adicionar ('Saulo', 0, [9, 9, 8, 9]);

console.log (curso.estudantes);