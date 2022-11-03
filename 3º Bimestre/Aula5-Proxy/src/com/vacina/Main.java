package com.vacina;

import java.util.Date;
import java.util.Calendar;

public class Main {
    public static void main(String[] args) {
        //Data e hora de agendamento
        int year = 2021;
        int month = 12;
        int day = 21;

        Calendar calendar = Calendar.getInstance();
        calendar.set(year, month-1, day); // month-1 pois o mês funciona como array, começa do 0.
        Date date = calendar.getTime();

        //Agendamento e Registro da vacina
        Pessoa pessoa = new Pessoa("Nelson","Kobayashi","3333333333","CoronaVac",date);

        IRegistro registro = new RegistroVacinaProxy();
        registro.registrar(pessoa.dados());
    }
}
