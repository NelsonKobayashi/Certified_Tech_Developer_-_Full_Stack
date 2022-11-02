//Aula 07 - 16/06/2021
//MicroDesafio 13 

/* Exercício 1 - “Conta bancária"
Defina um novo objeto ‘conta’ que contenha as seguintes propriedades:
--> Número de conta, Saldo, Nome do Titular <--
Crie um método chamado ‘depósito’ que tem a quantidade de dinheiro como parâmetro de entrada. Ao fazer um depósito, a quantia em dinheiro deve ser adicionada ao saldo existente. O método também deve imprimir na tela o tipo de transação realizada e o novo saldo.
Crie um novo método chamado saque, como o método de depósito, deve consistir em um parâmetro numérico que será a quantia de dinheiro que queremos sacar. Esta quantia será subtraída do saldo existente. Caso o valor do saque seja superior ao saldo disponível, deve-se imprimir na tela a mensagem “Fundos Insuficientes”, caso contrário deve-se imprimir o tipo de transação realizada e o novo saldo.
Crie uma função construtora de nosso objeto de conta.
Instancie os objetos com diferentes valores iniciais e teste os métodos.

Exercício 2 - “Calcular notas”
Crie o objeto de aluno, que consistirá nas seguintes propriedades básicas:

Nome
Número do arquivo
Lista de notas
Gostaríamos de calcular a média do aluno e se o aluno foi aprovado com base na nota de aprovação que será dada. Para este exercício, vamos deixar você pensar sobre todos os métodos e propriedades que podem ser necessários para que nosso programa funcione corretamente da maneira solicitada.

 */

/* let conta = {
    numeroConta: 1234567,
    saldo: 100.00,
    nomeTitular: "Nelson Kobayashi",
    deposito: function (dinheiro){ // método para depósito
        novoSaldo = this.saldo + dinheiro; // acrescendo dinheiro ao saldo atual
        this.saldo = novoSaldo // atualizando o valor de saldo
        console.log(`Operação realizada: Depósito \n Valor Depositado: ${dinheiro} bitcoins. \n Saldo em conta: ${novoSaldo} bitcoins`);
    },
    saque: function (dinheiro) { // método para saque
        if(this.saldo >= dinheiro) { //verifica se tem saldo suficiente para o saque
            novoSaldo = this.saldo - dinheiro; // retira de saldo o valor do saque (dinheiro)
            this.saldo = novoSaldo; // atribui a saldo o valor atualizado depois do saque.
            console.log(`Operação realizada: Saque \n Valor Sacado: ${dinheiro} bitcoins. \n Saldo em conta: ${novoSaldo} bitcoins. \n`);
        } else {
            console.log(`\nSaque no valor de ${dinheiro} bitcoins bloqueado, saldo insuficiente, seu saldo atual é de ${this.saldo} bitcoins.`)
        }

    }
}

console.log(`Conta: ${conta.numeroConta} \n Nome do Titular: ${conta.nomeTitular}`);

let operacao1 = conta.saque(90.00);
let operacao2 = conta.deposito(15.00);
let operacao3 = conta.saque(30.00); */

/*================================================================================ UTILIZANDO FUNÇÕES CONSTRUTORAS*/


function conta (numeroConta, saldo, nomeTitular){
    this.numeroConta = numeroConta;
    this.saldo = saldo;
    this.nomeTitular = nomeTitular;
    this.deposito = function(dinheiro){ // método para depósito
        novoSaldo = this.saldo + dinheiro; // acrescendo dinheiro ao saldo atual
        this.saldo = novoSaldo // atualizando o valor de saldo
        console.log(`Operação realizada: Depósito \n Valor Depositado: ${dinheiro} bitcoins. \n Saldo em conta: ${novoSaldo} bitcoins`);
    };
    this.saque = function (dinheiro) { // método para saque
        if(this.saldo >= dinheiro) { //verifica se tem saldo suficiente para o saque
            novoSaldo = this.saldo - dinheiro; // retira de saldo o valor do saque (dinheiro)
            this.saldo = novoSaldo; // atribui a saldo o valor atualizado depois do saque.
            console.log(`Operação realizada: Saque \n Valor Sacado: ${dinheiro} bitcoins. \n Saldo em conta: ${novoSaldo} bitcoins. \n`);
        } else {
            console.log(`Saque no valor de ${dinheiro} bitcoins bloqueado, saldo insuficiente, seu saldo atual é de ${this.saldo} bitcoins.`)
        };

    };
    console.log(`Conta: ${this.numeroConta} \n Nome do Titular: ${this.nomeTitular}`);
};



const contaNelson = new conta ("12.365-7", 120 , "Nelson Kobayashi");

contaNelson.deposito(30);
contaNelson.saque(140);
contaNelson.saque(20);