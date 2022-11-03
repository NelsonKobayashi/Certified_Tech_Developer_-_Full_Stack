package com.odontologia.dao.impl;

import com.odontologia.dao.IDao;
import com.odontologia.dao.configuracao.ConfiguracaoJDBC;
import com.odontologia.model.Dentista;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


public class DentistaDaoH2 implements IDao<Dentista> {

    private ConfiguracaoJDBC configuracaoJDBC;
    private EnderecoDaoH2 enderecoDaoH2;

    public DentistaDaoH2(DentistaDaoH2 dentistaDaoH2) {
        this.configuracaoJDBC = new ConfiguracaoJDBC();
    }

    public DentistaDaoH2() {

    }

    @Override
    public Dentista salvar(Dentista dentista) {
        Connection conexao = configuracaoJDBC.conectarComBancoDeDados();
        Statement stmt = null;
        String query = String.format(
                "INSERT INTO dentista (id, nome, sobrenome, numRegistro)" +
                        "VALUES ('%s','%s','%s', '%s')",
                dentista.getId(),
                dentista.getNome(),
                dentista.getSobrenome(),
                dentista.getNumRegistro()
        );
        try {
            stmt = conexao.createStatement();
            stmt.executeUpdate(query, Statement.RETURN_GENERATED_KEYS);
            ResultSet keys = stmt.getGeneratedKeys();
            if (keys.next())
                dentista.setId(keys.getInt(1));
            stmt.close();
            conexao.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return dentista;
    }

    //Método Buscar
    @Override
    public Optional<Dentista> buscar(Integer id) {
        Connection conexao = configuracaoJDBC.conectarComBancoDeDados();
        Statement stmt = null;
        String query = String.format(
                "SELECT id, nome, sobrenome, numRegistro" +
                        "FROM dentista " +
                        "WHERE id = '%s'", id);
        Dentista dentista = null;
        try {
            stmt = conexao.createStatement();
            ResultSet resultado = stmt.executeQuery(query);
            while(resultado.next()){
                dentista = criarObjetoDentista(resultado);
            }
            stmt.close();
            conexao.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return dentista != null ? Optional.of(dentista) : Optional.empty();
    }

    //Método excluir
    @Override
    public void excluir(Integer id) {
        Connection conexao = configuracaoJDBC.conectarComBancoDeDados();
        Statement stmt = null;
        String query = String.format(
                "DELETE FROM dentista WHERE id = %s", id);
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
    public List<Dentista> buscarTodos() {
        Connection conexao = configuracaoJDBC.conectarComBancoDeDados();
        Statement stmt = null;
        String query = "SELECT * FROM dentista";
        List<Dentista> dentista = new ArrayList<>();
        try {
            stmt = conexao.createStatement();
            ResultSet resultado = stmt.executeQuery(query);
            while (resultado.next()) {
                dentista.add(criarObjetoDentista(resultado));
            }
            stmt.close();
            conexao.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return dentista;
    }
    private Dentista criarObjetoDentista(ResultSet result) throws SQLException {
        Integer idDentista = result.getInt("id");
        String nome = result.getString("nome");
        String sobrenome = result.getString("sobrenome");
        String numRegistro = result.getString("numRegistro");
        return new Dentista(idDentista, nome, sobrenome,numRegistro);
    }
}
