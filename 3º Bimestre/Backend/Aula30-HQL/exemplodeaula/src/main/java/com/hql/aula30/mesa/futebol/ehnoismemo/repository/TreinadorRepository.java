package com.hql.aula30.mesa.futebol.ehnoismemo.repository;

import com.hql.aula30.mesa.futebol.ehnoismemo.model.Treinador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TreinadorRepository extends JpaRepository <Treinador, Integer> {
}
