package com.odontologia.dao.impl;

import com.odontologia.dao.IDao;
import com.odontologia.dao.configuracao.ConfiguracaoJDBC;

import com.odontologia.model.Paciente;
import com.odontologia.model.Endereco;
import com.odontologia.util.Util;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public class PacienteDaoH2 implements IDao<Paciente> {

    private ConfiguracaoJDBC configuracaoJDBC;
    private EnderecoDaoH2 enderecoDaoH2;

    public PacienteDaoH2(EnderecoDaoH2 enderecoDaoH2) {
        this.configuracaoJDBC = new ConfiguracaoJDBC();
        this.enderecoDaoH2 = enderecoDaoH2;
    }

    @Override
    public Paciente salvar(Paciente paciente) {
        Connection conexao = configuracaoJDBC.conectarComBancoDeDados();
        Statement stmt = null;
        paciente.setEndereco(enderecoDaoH2.salvar(paciente.getEndereco()));
        String query = String.format(
                "INSERT INTO paciente (nome, sobrenome, rg, dataCadastro, endereco_id)" +
                    "VALUES ('%s','%s','%s','%s','%s')",
                paciente.getNome(),
                paciente.getSobrenome(),
                paciente.getRg(),
                Util.dateToTimestamp(paciente.getDataCadastro()),
                paciente.getEndereco().getId()
        );
        try {
            stmt = conexao.createStatement();
            stmt.executeUpdate(query, Statement.RETURN_GENERATED_KEYS);
            ResultSet keys = stmt.getGeneratedKeys();
            if (keys.next())
                paciente.setId(keys.getInt(1));
            stmt.close();
            conexao.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return paciente;
    }

    //Método Buscar
    @Override
    public Optional<Paciente> buscar(Integer id) {
        Connection conexao = configuracaoJDBC.conectarComBancoDeDados();
        Statement stmt = null;
        String query = String.format(
                "SELECT id, nome, sobrenome, rg, dataCadastro, endereco_id " +
                        "FROM paciente " +
                        "WHERE id = '%s'", id);
        Paciente paciente = null;
        try {
            stmt = conexao.createStatement();
            ResultSet resultado = stmt.executeQuery(query);
            while(resultado.next()){
                paciente = criarObjetoPaciente(resultado);
            }
            stmt.close();
            conexao.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return paciente != null ? Optional.of(paciente) : Optional.empty();
    }

    //Método excluir
    @Override
    public void excluir(Integer id) {
        Connection conexao = configuracaoJDBC.conectarComBancoDeDados();
        Statement stmt = null;
        String query = String.format(
                "DELETE FROM paciente WHERE id = %s", id);
        try {
            stmt = conexao.createStatement();
            stmt.executeUpdate(query);
            stmt.close();
            conexao.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    //Método buscarTodos
    @Override
    public List<Paciente> buscarTodos() {
        Connection conexao = configuracaoJDBC.conectarComBancoDeDados();
        Statement stmt = null;
        String query = "SELECT * FROM PACIENTE";
        List<Paciente> pacientes = new ArrayList<>();
        try {
            stmt = conexao.createStatement();
            ResultSet resultado = stmt.executeQuery(query);
            while (resultado.next()) {
                pacientes.add(criarObjetoPaciente(resultado));
            }
            stmt.close();
            conexao.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return pacientes;
    }
        private Paciente criarObjetoPaciente(ResultSet result) throws SQLException {
            Integer idPaciente = result.getInt("id");
            String nome = result.getString("nome");
            String sobrenome = result.getString("sobrenome");
            String rg = result.getString("rg");
            Date dataCadastro = result.getDate("dataCadastro");
            Endereco endereco = enderecoDaoH2.buscar(result.getInt("endereco_id")).orElse(null);
            return new Paciente(idPaciente, nome, sobrenome, rg, dataCadastro, endereco);
        }
}








