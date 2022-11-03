package com.integrador.finalproject.controllers;

import com.integrador.finalproject.entities.Endereco;
import com.integrador.finalproject.services.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enderecos")
public class EnderecoController {

    @Autowired
    private EnderecoService enderecoService;

    @PostMapping()
    public ResponseEntity<Endereco> salvar(@RequestBody Endereco endereco) {
        return ResponseEntity.ok(enderecoService.salvar(endereco));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Endereco> buscar(@PathVariable Endereco id) {
        Endereco endereco = enderecoService.buscar(id).orElse(null);
        return ResponseEntity.ok(endereco);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> excluir(@PathVariable Endereco id) {
        ResponseEntity<String> response = null;
        if (enderecoService.buscar(id).isPresent()) {
            enderecoService.excluir(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Excluido");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @PutMapping()
    public ResponseEntity<Endereco> atualizar(@RequestBody Endereco endereco) {
        ResponseEntity<Endereco> response = null;
        if (endereco.getId() != null && enderecoService.buscar(endereco.getId()).isPresent())
            response = ResponseEntity.ok(enderecoService.atualizar(endereco));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return response;
    }

    @GetMapping
    public ResponseEntity<List<Endereco>> buscarTodos(){
        return ResponseEntity.ok(enderecoService.buscarTodos());
    }
}


