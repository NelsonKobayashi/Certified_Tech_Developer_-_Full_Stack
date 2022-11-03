package com.integrador.finalproject.services;

import com.integrador.finalproject.entities.Endereco;
import com.integrador.finalproject.repositories.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnderecoService {

    @Autowired
    private EnderecoRepository enderecoRepository;

    public Endereco buscar(Endereco id) { return enderecoRepository.getById(id);}

    public List<Endereco> buscarTodos(){return enderecoRepository.findAll();}

    public void salvar (Endereco endereco){
        enderecoRepository.save(endereco);
    }

    public void excluir(Endereco endereco) {enderecoRepository.delete(endereco);}

    public Endereco atualizar(Endereco endereco) {return enderecoRepository.save(endereco);}

}
