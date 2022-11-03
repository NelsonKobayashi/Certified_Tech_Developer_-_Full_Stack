package com.integrador.odontologia.repository.impl;

import com.integrador.odontologia.model.Usuario;
import com.integrador.odontologia.repository.IDao;
import com.integrador.odontologia.repository.configuracao.ConfiguracaoJDBC;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.Statement;

@Repository
public class UsuarioDaoH2 implements IDao<Usuario> {

    private final ConfiguracaoJDBC configuracaoJDBC;

    public UsuarioDaoH2(ConfiguracaoJDBC configuracaoJDBC) {
        this.configuracaoJDBC = configuracaoJDBC;
    }

    @Override
    public Usuario salvar(Usuario usuario) {
        Connection connection = configuracaoJDBC.connectarDB();
        Statement stmt = null;
        String query = String.format(INSERT INTO usuario(nome, email, senha, acesso) VALUES ('%s','%s','%s','%s')"),
                usuario.getNome(),
                usuario.
    }

}
