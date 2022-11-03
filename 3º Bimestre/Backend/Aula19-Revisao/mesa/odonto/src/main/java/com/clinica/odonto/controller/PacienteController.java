package com.clinica.odonto.controller;

import com.clinica.odonto.domain.Paciente;
import com.clinica.odonto.service.IPacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PacienteController {

    private final IPacienteService pacienteService;

    @Autowired
    public PacienteController (IPacienteService pacienteService) {
        this.pacienteService = pacienteService;
    }

    @GetMapping("/buscaremail")
    public String busca(Model model) {
        Paciente pac = pacienteService.buscaPorEmail(
                "nyk@nyk.com.br"
        );
        model.addAttribute("nome", pac.getNome());
        model.addAttribute("sobrenome",pac.getSobrenome());
        return "index";
    }
}
