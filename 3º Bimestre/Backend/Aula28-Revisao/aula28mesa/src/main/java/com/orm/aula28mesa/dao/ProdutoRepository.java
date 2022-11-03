package com.orm.aula28mesa.dao;

import com.orm.aula28mesa.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {


}
