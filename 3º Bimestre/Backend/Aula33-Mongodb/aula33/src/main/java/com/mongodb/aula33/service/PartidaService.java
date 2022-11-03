package com.mongodb.aula33.service;

import com.mongodb.aula33.model.Partidas;
import com.mongodb.aula33.repository.PartidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartidaService {

    private PartidaRepository partidaRepository;

    @Autowired
    public PartidaService(PartidaRepository partidaRepository) {
        this.partidaRepository = partidaRepository;
    }

    public Partidas guardarPartida(Partidas partidas) {return partidaRepository.save(partidas);}
    public List<Partidas> listarPartida() {return partidaRepository.findAll();}

}
