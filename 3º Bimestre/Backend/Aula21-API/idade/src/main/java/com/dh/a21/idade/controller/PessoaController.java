package com.dh.a21.idade.controller;

import com.dh.a21.idade.service.impl.IPessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PessoaController {

    @Autowired
    private IPessoaService pessoaService;

    @GetMapping("/{dia}/{mes}/{ano}")
    public Integer calcularIdade(
            @PathVariable("dia") Integer d,
            @PathVariable("mes") Integer m,
            @PathVariable("ano") Integer a){
        return pessoaService.calcularIdade(d,m,a);
    }

}
