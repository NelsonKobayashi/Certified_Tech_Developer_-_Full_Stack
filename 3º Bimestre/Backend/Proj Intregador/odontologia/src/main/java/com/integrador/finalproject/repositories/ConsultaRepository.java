package com.integrador.finalproject.repositories;

import com.integrador.finalproject.entities.Consulta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta,Integer>  {
}
