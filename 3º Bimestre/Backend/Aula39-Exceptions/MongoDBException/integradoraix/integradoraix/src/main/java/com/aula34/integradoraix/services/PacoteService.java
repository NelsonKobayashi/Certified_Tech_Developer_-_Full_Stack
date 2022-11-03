package com.aula34.integradoraix.services;

import com.aula34.integradoraix.entities.Pacote;
import com.aula34.integradoraix.repositories.PacoteRepository;
import org.springframework.stereotype.Service;

@Service
public class PacoteService {

    private PacoteRepository pacoteRepository;

    public PacoteService(PacoteRepository pacoteRepository) {
        this.pacoteRepository = pacoteRepository;
    }

    public Pacote adicionar(Pacote pacote) {
        return  pacoteRepository.save(pacote);
    }

}
