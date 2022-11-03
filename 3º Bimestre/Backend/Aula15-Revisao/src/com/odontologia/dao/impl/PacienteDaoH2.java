package com.odontologia.dao.impl;

import com.odontologia.dao.configuracao.ConfiguracaoJDBC;
import com.odontologia.dao.IDao;
import com.odontologia.model.Paciente;
import com.odontologia.util.Util;


import java.sql.Connection;
import java.sql.Statement;

public class PacienteDaoH2 implements IDao<Paciente> {

    private ConfiguracaoJDBC configuracaoJDBC;

    public PacienteDaoH2(ConfiguracaoJDBC configuracaoJDBC) {
        this.configuracaoJDBC = configuracaoJDBC;
    }

    public Paciente salvar(Paciente paciente) {
        Connection conexao = configuracaoJDBC.conectarComBancoDeDados();
        Statement stmt = null;
        paciente.setEndereco(enderecoDaoH2.salvar(paciente.getEndereco()));

        String query = String.format(
                "INSERT INTO paciente (nome, sobrenome, rg, dataCadastro, endeco_id) " +
                        "VALUES ('%s','%s','%s','%s','%s')",
                paciente.getNome(),
                paciente.getSobrenome(),
                paciente.getRg(),
                Util.dateToTimestamp(paciente.getDataCadastro()),
                paciente.getEndereco().getId()
        );
        return paciente;
    }

    //Método Buscar

    //Método excluir

    //Método buscarTodos

    //Método criarObjeto
}
