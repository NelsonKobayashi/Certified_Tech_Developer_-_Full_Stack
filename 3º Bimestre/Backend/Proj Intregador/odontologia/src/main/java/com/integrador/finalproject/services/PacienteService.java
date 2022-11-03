package com.integrador.finalproject.services;

import com.integrador.finalproject.entities.Paciente;
import com.integrador.finalproject.repositories.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PacienteService {

    @Autowired
    private PacienteRepository pacienteRepository;

    public Paciente buscar(Paciente id){
        return pacienteRepository.getById(id);
    }

    public List<Paciente> buscarTodos(){ return pacienteRepository.findAll();
    }

    public void salvar(Paciente paciente) {pacienteRepository.save(paciente);
    }



    public void excluir(Paciente paciente) {pacienteRepository.delete(paciente); }

    public Paciente atualizar(Paciente paciente) {return pacienteRepository.save(paciente);}


}


