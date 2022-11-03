package com.clinica.odonto.controller;

import com.clinica.odonto.domain.Paciente;
import com.clinica.odonto.service.IPacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PacienteControllerLista {

    private final IPacienteService pacienteService;

    @Autowired
    public PacienteControllerLista(IPacienteService pacienteService) {
        this.pacienteService = pacienteService;
    }

    @GetMapping("/listapac")
    public List<Paciente> getPaciente() {
        return pacienteService.listPaciente();
    }


}