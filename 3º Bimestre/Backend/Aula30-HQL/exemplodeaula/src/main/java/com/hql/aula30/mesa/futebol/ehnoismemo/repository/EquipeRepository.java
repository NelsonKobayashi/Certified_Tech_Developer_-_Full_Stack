package com.hql.aula30.mesa.futebol.ehnoismemo.repository;

import com.hql.aula30.mesa.futebol.ehnoismemo.model.Equipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipeRepository extends JpaRepository<Equipe, Integer> {
}
