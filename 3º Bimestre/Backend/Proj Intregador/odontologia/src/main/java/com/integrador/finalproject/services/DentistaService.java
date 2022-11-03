package com.integrador.finalproject.services;

import com.integrador.finalproject.entities.Dentista;
import com.integrador.finalproject.repositories.DentistaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DentistaService {

    @Autowired
    private DentistaRepository dentistaRepository;

    public Optional<Dentista> buscar(Integer id){
        return dentistaRepository.findById(id);
    }

    public List<Dentista> buscarTodos(){ return dentistaRepository.findAll();}

    public void salvar(Dentista dentista) {dentistaRepository.save(dentista);
    }

    public void excluir(Integer id) { dentistaRepository.deleteById(id); }

    public Dentista atualizar(Dentista dentista) {return dentistaRepository.save(dentista);}


}
