//Micro Desafio 3//resolvido com construtor ao invés do objeto literal

const Alunos = require("./1construtorAluno "); //importando o construtor Aluno

function Curso (nomeCurso, notaAprovacao, faltasMaxima, listaEstudante) { 
    this.nomeCurso = nomeCurso;
    this.notaAprovacao = notaAprovacao;
    this.faltasMaxima = faltasMaxima;
    this.listaEstudante = listaEstudante;
    
    //Micro Desafio 4
    this.adicionarAlunos = (array)=>this.listaEstudante.push(array);

    //Micro Desafio 5
    this.verificarAprovacao = (aluno) => {
        if () {
            
        } else {

        }
    }
}


    


