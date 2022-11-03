package com.odontologia.test;


import com.odontologia.dao.impl.EnderecoDaoH2;
import com.odontologia.dao.impl.PacienteDaoH2;
import com.odontologia.model.Endereco;
import com.odontologia.model.Paciente;
import com.odontologia.service.EnderecoService;
import com.odontologia.service.PacienteService;

import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

import java.util.Date;
import java.util.List;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class PacienteServiceTest {
    private static PacienteService pacienteService =
            new PacienteService(
                    new PacienteDaoH2(
                            new EnderecoDaoH2()));
    private EnderecoService enderecoService =
            new EnderecoService(
                    new EnderecoDaoH2());

    @BeforeClass
    public static void carregarDataSet(){
        Endereco endereco = new Endereco(1, "Av. Paulista", "123", "Bela Vista","São Paulo");
        Paciente p = pacienteService.salvar(new Paciente(1, "Nelson","Kobayashi","123456789", new Date(),endereco));
        Endereco endereco1 = new Endereco(2,"Praça da Liberdade","111","Liberdade", "São Paulo");
        Paciente p1 = pacienteService.salvar(new Paciente(2,"Ethan", "Kobayashi", "123456987", new Date(),endereco1));
    }

    @Test
    public void cadastrarEBuscarPacienteTest(){
        Endereco endereco = new Endereco("Rua Galvão Bueno","321","Liberdade","São Paulo");
        Paciente p = pacienteService.salvar(new Paciente("Letícia","Háruka", "123456789", new Date(), endereco));
        Assert.assertNotNull(pacienteService.buscar(p.getId()));
    }

    @Test
    public void excluirPacienteTest(){
        pacienteService.excluir(3);
        Assert.assertTrue(pacienteService.buscar(3).isEmpty());
    }

    @Test
    public void trazerTodos(){
        List<Paciente> paciente = pacienteService.buscarTodos();
        Assert.assertTrue(!paciente.isEmpty());
        Assert.assertTrue(paciente.size()==2);
        System.out.println(paciente);
    }

}
