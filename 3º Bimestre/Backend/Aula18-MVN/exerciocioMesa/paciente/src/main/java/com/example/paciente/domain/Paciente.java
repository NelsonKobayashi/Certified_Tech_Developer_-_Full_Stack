package com.example.paciente.domain;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

public class Paciente {

    private String nome;

    public Paciente(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Controller
    public class PacienteController {

        @GetMapping("/index")
        public String welcome(Model model){
            model.addAttribute("nome","Felipe");
            return "index";
        }
    }
}
