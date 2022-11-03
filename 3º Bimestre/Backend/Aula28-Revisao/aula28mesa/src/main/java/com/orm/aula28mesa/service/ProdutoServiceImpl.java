package com.orm.aula28mesa.service;

import com.orm.aula28mesa.dao.ProdutoRepository;
import com.orm.aula28mesa.model.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoServiceImpl implements ProdutoService{

    private final ProdutoRepository produtoRepository;

    @Autowired
    public ProdutoServiceImpl(ProdutoRepository produtoRepository) {
        this.produtoRepository = produtoRepository;
    }

    @Override
    public List<Produto> obterTodos() {
        return produtoRepository.findAll();
    }

    @Override
    public void guardar(Produto produto) {
        produtoRepository.save(produto);
    }

    @Override
    public void apagar(Produto produto){
        produtoRepository.delete(produto);
    }

    @Override
    public void subtrair(Produto produto) {
        produtoRepository.save(produto);
    }
}
