package com.example.paciente.service;

import com.example.paciente.domain.Paciente;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class PacienteServiceImpl implements IPacienteService{

    @Override
    public List<Paciente> listPaciente() {
        return Arrays.asList(
                new Paciente("Simone"),
                new Paciente("Simária")
        );
    }
}
