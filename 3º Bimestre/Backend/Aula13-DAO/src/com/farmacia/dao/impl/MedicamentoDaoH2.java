package com.farmacia.dao.impl;

import com.farmacia.dao.ConfiguracaoJDBC;
import com.farmacia.dao.IDao;
import com.farmacia.model.Medicamento;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class MedicamentoDaoH2 implements IDao<Medicamento> {

    private ConfiguracaoJDBC configuracaoJDBC;

    public MedicamentoDaoH2(ConfiguracaoJDBC configuracaoJDBC) {
        this.configuracaoJDBC = configuracaoJDBC;
    }

    //aqui ficam as interfaces
    //Salvar
    public Medicamento salvar(Medicamento medicamento){
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement statement = null;
        String query = String.format(
          "INSERT INTO medicamentos" +
          "(nome, laboratorio, qtde, preco) " +
          "VALUES ('%s', '%s','%s', '%s')",
          medicamento.getNome(),
          medicamento.getLaboratorio(),
          medicamento.getQtde(),
          medicamento.getPreco()
        );

        try {
            statement = connection.createStatement();
            statement.executeUpdate(query, Statement.RETURN_GENERATED_KEYS);
            ResultSet keys = statement.getGeneratedKeys();
            if(keys.next())
                medicamento.setId(keys.getInt(1));
            statement.close();
            connection.close();
        }
        catch (SQLException e) {
            e.printStackTrace();
        }
        return medicamento;
    }

    //Buscar por ID
    public Medicamento buscar(Integer id){
        Connection connection = configuracaoJDBC.conectarComBancoDeDados();
        Statement stmt = null;

        String query = String.format(
                "SELECT id, nome, laboratorio, qtde, preco " +
                        " FROM medicamentos " +
                        " WHERE id = '%s'", id
        );
        Medicamento medicamento = null;

        try {
            stmt = connection.createStatement();
            ResultSet result = stmt.executeQuery(query);

            while(result.next()){
                medicamento = new Medicamento(
                    result.getInt("id"),
                    result.getString("nome"),
                    result.getString("laboratorio"),
                    result.findColumn("qtde"),
                    result.getDouble("preco")
                );
            }
            stmt.close();
            connection.close();
        } catch (SQLException e){
            e.printStackTrace();
        }
        return medicamento;
    }
}
