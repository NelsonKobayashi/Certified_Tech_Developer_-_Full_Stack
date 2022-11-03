package com.integrador.finalproject.services;


import com.integrador.finalproject.dto.ConsultaDTO;
import com.integrador.finalproject.entities.Consulta;
import com.integrador.finalproject.entities.Dentista;
import com.integrador.finalproject.entities.Paciente;
import com.integrador.finalproject.entities.Usuario;
import com.integrador.finalproject.repositories.ConsultaRepository;
import com.integrador.finalproject.repositories.DentistaRepository;
import com.integrador.finalproject.repositories.PacienteRepository;
import com.integrador.finalproject.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
public class ConsultaService {

    @Autowired
    private ConsultaRepository repositoryConsulta;
    @Autowired
    private PacienteRepository repositoryPaciente;
    @Autowired
    private DentistaRepository repositoryDentista;
    @Autowired
    private UsuarioRepository repositoryUsuario;

    public void salvar(ConsultaDTO consultaDTO) {
        Paciente paciente_id = repositoryPaciente.getById(consultaDTO.getIdPaciente());
        Dentista dentista_id = repositoryDentista.getById(consultaDTO.getIdDentista());
        Usuario usuario_id = repositoryUsuario.getById(consultaDTO.getIdUsuario());
        Consulta consulta = new Consulta(paciente_id, dentista_id, usuario_id, new Date());
        repositoryConsulta.save(consulta);
    }

    public List<Consulta> buscarTodos() {
        return repositoryConsulta.findAll();
    }

    public void excluir(Integer id){
        repositoryConsulta.deleteById(id);
    }

    public Optional<Consulta> buscar(Integer id){
        return repositoryConsulta.findById(id);
    }



}