package com.clinica.odonto.service;

import com.clinica.odonto.domain.Paciente;

import java.util.List;

public interface IPacienteService {

    List<Paciente> listPaciente();
    Paciente buscaPorEmail(String email);
}
