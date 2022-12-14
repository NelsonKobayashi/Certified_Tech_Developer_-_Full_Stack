package com.integrador.odontologia.controller;

import com.integrador.odontologia.model.Usuario;
import com.integrador.odontologia.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping()
    public ResponseEntity<Usuario> registrarUsuario(@RequestBody Usuario usuario){
        return ResponseEntity.ok(usuarioService.registrarUsuario(usuario));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> buscar(@PathVariable Integer id){
        Usuario usuario = usuarioService.buscar(id).orElse(null);
        return ResponseEntity.ok(usuario);
    }

    @PutMapping()
    public ResponseEntity<Usuario> atualizar(@RequestBody Usuario usuario){
        ResponseEntity<Usuario> response = null;
        if(usuario.getId() != null && usuarioService.buscar(usuario.getId()).isPresent())
            response = ResponseEntity.ok(usuarioService.atualizar(usuario));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> excluir(@PathVariable Integer id){
        ResponseEntity<String> response = null;
        if (usuarioService.buscar(id).isPresent()){
            usuarioService.excluir(id);
            response = ResponseEntity.status(HttpStatus.NO_CONTENT).body("Eliminado");
        } else {
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return response;
    }

    @GetMapping
    public ResponseEntity<List<Usuario>> buscarTodos() {
        return ResponseEntity.ok(usuarioService.buscarTodos());
    }
}

