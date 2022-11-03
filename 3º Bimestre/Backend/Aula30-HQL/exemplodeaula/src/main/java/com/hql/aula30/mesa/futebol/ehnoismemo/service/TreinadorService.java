package com.hql.aula30.mesa.futebol.ehnoismemo.service;

import com.hql.aula30.mesa.futebol.ehnoismemo.model.Treinador;
import com.hql.aula30.mesa.futebol.ehnoismemo.repository.TreinadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TreinadorService {

    @Autowired
    private TreinadorRepository repository;

    public  void insert (Treinador treinador) {
        repository.save(treinador);
    }
}
