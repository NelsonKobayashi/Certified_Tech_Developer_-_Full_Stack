package com.clinica.odonto.controller;

import com.clinica.odonto.domain.Dentista;
import com.clinica.odonto.service.IDentistaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DentistaController {

    private final IDentistaService dentistaService;

    @Autowired
    public DentistaController(IDentistaService dentistaService) {
        this.dentistaService = dentistaService;
    }

    @GetMapping("/listadent")
    public List<Dentista> getDentista() {
        return dentistaService.listDentista();
    }
}
