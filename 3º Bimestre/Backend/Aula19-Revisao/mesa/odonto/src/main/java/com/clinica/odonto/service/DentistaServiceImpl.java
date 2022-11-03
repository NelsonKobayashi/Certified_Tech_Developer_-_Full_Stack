package com.clinica.odonto.service;

import com.clinica.odonto.domain.Dentista;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DentistaServiceImpl implements IDentistaService{

    private Dentista dentista1 = new Dentista(
            1,
            "Zusé",
            "da Silva",
            "123456");

    private Dentista dentista2 = new Dentista(
            2,
            "Zuséfino",
            "da Mata",
            "123321");


    @Override
    public List<Dentista> listDentista(){
        ArrayList<Dentista> dentista = new ArrayList<>();
        dentista.add(dentista1);
        dentista.add(dentista2);
        return dentista;
    }

}
