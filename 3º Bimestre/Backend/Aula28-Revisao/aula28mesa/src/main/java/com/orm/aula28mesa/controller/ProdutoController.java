package com.orm.aula28mesa.controller;

import com.orm.aula28mesa.model.Produto;
import com.orm.aula28mesa.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    private final ProdutoService produtoService;

    @Autowired
    public ProdutoController(ProdutoService produtoService) {

        this.produtoService = produtoService;
    }

    //ex.01
    @PostMapping
    public ResponseEntity<?> criarProduto(@RequestBody Produto produto){
        produtoService.guardar(produto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Produto>> obterTodos (){

        return ResponseEntity.ok(produtoService.obterTodos());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> apagar(@PathVariable Produto id){
        produtoService.apagar(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping
    public int subtrair(@PathVariable Produto produto){
        return produto.getQtde()-1;
    }
}
