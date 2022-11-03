package com.hql.aula30.mesa.futebol.ehnoismemo.repository;

import com.hql.aula30.mesa.futebol.ehnoismemo.model.Jogador;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JogadorRepository extends JpaRepository<Jogador, Integer> {
}
