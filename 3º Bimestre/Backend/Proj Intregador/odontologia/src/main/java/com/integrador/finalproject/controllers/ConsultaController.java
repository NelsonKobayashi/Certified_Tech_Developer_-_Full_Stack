package com.integrador.finalproject.controllers;


import com.integrador.finalproject.dto.ConsultaDTO;
import com.integrador.finalproject.entities.Consulta;
import com.integrador.finalproject.services.ConsultaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consultas")
public class ConsultaController {

    private final ConsultaService consultaService;
    @Autowired
    public ConsultaController(ConsultaService consultaService) {
        this.consultaService = consultaService;
    }

    @PostMapping
    public ResponseEntity<?> salvar(@RequestBody ConsultaDTO consultaDTO){
        consultaService.salvar(consultaDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Consulta>> buscarTodos (){
        return ResponseEntity.ok(consultaService.buscarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Consulta> buscar(@PathVariable Integer id) {
        return ResponseEntity.ok(consultaService.buscar(id).orElse(null));
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluir(@PathVariable Integer id){
        consultaService.excluir(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Consulta> atualizar(@RequestBody ConsultaDTO consultaDTO) {
       consultaService.salvar(consultaDTO);
       return new ResponseEntity<>(HttpStatus.OK);
    }



}
