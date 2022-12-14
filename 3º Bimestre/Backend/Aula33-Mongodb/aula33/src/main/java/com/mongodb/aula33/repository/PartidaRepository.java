package com.mongodb.aula33.repository;

import com.mongodb.aula33.model.Partidas;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PartidaRepository extends MongoRepository<Partidas, String> {
}
