//Exercício Aula 02 
//Desafio Jokempo contra a máquina (melhor de 3)

let jogador = 0;
let computador = 0;
let pedra;
let papel;
let tesoura;

/* criando laço para verificar quem realiza 3 pontos primeiro, recebendo os valores do usuário e da máquina(aleatório) */
while(jogador < 3 && computador < 3){
    let valorEscolhido = prompt("pedra, papel ou tesoura!!!");
    valorEscolhido = valorEscolhido.toLowerCase();
    let valorAleatorio = Math.random(); 
    let valorPc = valorAleatorio < 0.3 ? "pedra" : valorAleatorio < 0.6 ? "papel" : "tesoura";
    if (valorEscolhido == valorPc) {
        alert ("Empate")
        continue;
    }
    
    
    /* comparando resultados para pontuar*/
    valorEscolhido == "pedra" && valorPc == "tesoura" ? jogador++ + alert("Ponto do Jogador: " + jogador) : 
    valorEscolhido == "papel" && valorPc == "pedra" ? jogador++ + alert("Ponto do Jogador: " + jogador) : 
    valorEscolhido == "tesoura" && valorPc == "papel" ? jogador++ + alert("Ponto do Jogador: " + jogador) : computador ++ + alert("Ponto do Computador: " + computador);
}
/* verificando quem completou 3 pontos*/
if(jogador == 3){
    alert("Você ganhou a melhor 3")
} else {
    alert("Você perdeu, que pena....")
}
