package com.integrador.finalproject.repositories;

import java.util.List;
import java.util.Optional;

public interface IDao<T> {

    T salvar(T t);
    Optional<T> buscar(Integer id);
    List<T> buscarTodos();
    T atualizar(T t);
    void excluir(Integer id);
}