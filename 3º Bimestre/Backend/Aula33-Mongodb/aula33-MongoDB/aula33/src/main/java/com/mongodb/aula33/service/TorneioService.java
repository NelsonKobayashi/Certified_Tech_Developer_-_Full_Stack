package com.mongodb.aula33.service;

import com.mongodb.aula33.model.Torneio;
import com.mongodb.aula33.repository.TorneioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TorneioService {

    private TorneioRepository torneioRepository;

    @Autowired
    public TorneioService(TorneioRepository torneioRepository) {
        this.torneioRepository = torneioRepository;
    }

    public Torneio guardarTorneio(Torneio torneio) {
        return torneioRepository.save(torneio);
    }

    public List<Torneio> listarTorneio() {
        return torneioRepository.findAll();
    }

}
