package com.hql.aula30.mesa.futebol.ehnoismemo.service;

import com.hql.aula30.mesa.futebol.ehnoismemo.model.Equipe;
import com.hql.aula30.mesa.futebol.ehnoismemo.repository.EquipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EquipeService {

    @Autowired
    private EquipeRepository repository;

    //Inserir
    public void insert(Equipe equipe) {
        repository.save(equipe);
    }

}
