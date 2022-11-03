package com.company;

public class Main {
    public static void main(String[] args) {
        Funcionario funcionario = new Efetivo("Nelson", "Kobayashi", "123456789", 6000.0, 850.0, 2500.0);
        funcionario.pagamentoSalario();

        funcionario = new Contratado("Jennifer", "Koga", "987654321", 350.0, 150);
        funcionario.pagamentoSalario();
    }
}
