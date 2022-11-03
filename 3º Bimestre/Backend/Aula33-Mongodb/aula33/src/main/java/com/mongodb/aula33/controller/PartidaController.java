package com.mongodb.aula33.controller;

import com.mongodb.aula33.model.Partidas;
import com.mongodb.aula33.service.PartidaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/partidas")
public class PartidaController {

    private PartidaService partidaService;

    @Autowired

    public PartidaController(PartidaService partidaService) {
        this.partidaService = partidaService;
    }

    @PostMapping
    public Partidas adicionarPartidas(@RequestBody Partidas partidas) {return partidaService.guardarPartida(partidas);}

    @GetMapping
    List<Partidas> listarPartida() {return partidaService.listarPartida(); }
}
