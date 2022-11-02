/* Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).
 */

curso = {
    nomeCurso: 'Prog. Imperativa',
    notaAprov: 7,
    faltasMax: 2,
    estudantes: [['Nelson', 2, [7, 6, 5, 4]],
                 ['Breno', 1, [7, 8, 9, 7]],
                 ['Mariana', 0, [9, 9, 9, 9]]]
};

console.log (curso.estudantes);