/* Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
 */

const aprovado = require('./modulos/aprovacao')

curso = {
    nomeCurso: 'Prog. Imperativa',
    notaAprov: 7,
    faltasMax: 2,
    estudantes: [['Breno', 1, [7, 8, 9, 7], true],
    ['Mariana', 0, [9, 9, 9, 9], true]],
    adicionar: function (nome, faltas, notas) {  /*criação do método para inserir novos alunos*/
        /*calculando média*/
        let media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

        /*trazendo o resultado da aprovação pelo módulo*/
        let resultado;
        resultado = aprovado.passou(media,faltas);

        curso.estudantes.push([nome, faltas, notas, resultado]);
    }
};

/*chamando o método e inserindo novos alunos ao objeto curso.estudantes*/
let Fernanda = new curso.adicionar('Fernanda', 1, [8, 9, 8, 9]);
let Saulo = new curso.adicionar('Saulo', 0, [9, 9, 8, 9]);
let Nelson = new curso.adicionar('Nelson', 2, [7, 6, 5, 4]);
let Yoshiaki = new curso.adicionar('Yoshiaki', 1, [9, 9, 9, 9]);
let Kobayashi = new curso.adicionar('Kobayashi', 4, [8, 9, 8, 8]);
let Saitama = new curso.adicionar('Saitama', 0, [1, 2, 3, 4]);

console.log(curso.estudantes)