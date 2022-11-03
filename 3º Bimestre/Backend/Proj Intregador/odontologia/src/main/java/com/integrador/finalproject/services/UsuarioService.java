package com.integrador.finalproject.services;


import com.integrador.finalproject.entities.Usuario;
import com.integrador.finalproject.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario buscar(Usuario id){ return usuarioRepository.getById(id);}

    public List<Usuario> buscarTodos(){return usuarioRepository.findAll();}

    public void salvar(Usuario usuario){usuarioRepository.save(usuario);}

    public void excluir(Usuario usuario){usuarioRepository.delete(usuario);}

    public Usuario atualizar(Usuario usuario){return usuarioRepository.save(usuario);}

}
