// Aula 08 - 16/06/2021

let precoCusto = [280, 330, 1500, 3300, 150]
let margemLucro = 1.5;

function custoInicial (precoCusto){
    console.log("\n*********Relatório Preço Custo*********");
    for (let i = 0; i < precoCusto.length; i++){
        console.log("Posição do Array é: " + i + " - " + precoCusto[i]);
    }
}

function precoFinal (precoCusto){
    console.log("\n*********Relatório Preço de Venda*********");
    for (let i = 0; i < precoCusto.length; i++){
        let resultado = precoCusto [i] * margemLucro;
        console.log("O preço final do produto " + i + " é: " + resultado);
    }
}

custoInicial(precoCusto);
precoFinal(precoCusto);

/**
let produtosCusto = {
    ssd: 280,
    teclado: 330,
    monitor: 1500,
    placaVideo: 3300,
    headset: 150
}

let produtosVenda = () => {

}
*/


