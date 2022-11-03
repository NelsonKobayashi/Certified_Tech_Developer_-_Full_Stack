package com.odontologia.dao.impl;

import com.odontologia.dao.IDao;
import com.odontologia.dao.configuracao.ConfiguracaoJDBC;
import com.odontologia.model.Endereco;
import com.odontologia.model.Paciente;
import com.odontologia.util.Util;

import java.sql.Connection;
import java.sql.Statement;

public class EnderecoDaoH2 implements IDao<Paciente> {

    private ConfiguracaoJDBC configuracaoJDBC;

    public EnderecoDaoH2(ConfiguracaoJDBC configuracaoJDBC) {
        this.configuracaoJDBC = configuracaoJDBC;
    }

    public Endereco salvar(Endereco endereco) {
        Connection conexao = configuracaoJDBC.conectarComBancoDeDados();
        Statement stmt = null;

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
