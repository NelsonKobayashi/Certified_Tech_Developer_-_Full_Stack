package com.orm.aula28mesa.service;

import com.orm.aula28mesa.model.Produto;

import java.util.List;

public interface ProdutoService {

    //Obter todos
    List<Produto> obterTodos();

    //salvar
    void guardar(Produto produto);

    //apagar
    void apagar(Produto produto);

    //subtrair
    void subtrair(Produto produto);

}

