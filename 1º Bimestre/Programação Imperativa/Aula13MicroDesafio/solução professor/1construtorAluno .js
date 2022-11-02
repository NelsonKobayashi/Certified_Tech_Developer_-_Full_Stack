//Micro Desafio 1

function Alunos(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
}


//Micro Desafio 2

    this.calcularMedia = () => {
        let resultado = this.notas.reduce((acumulador,item) => acumulador+ item)/this.notas.length;
        return resultado.toFixed(1) //  toFixed() -> retorno de casas decimais 
    }
    this.adicionarFaltas = () => this.faltas +=1;

module.exports = Alunos;

