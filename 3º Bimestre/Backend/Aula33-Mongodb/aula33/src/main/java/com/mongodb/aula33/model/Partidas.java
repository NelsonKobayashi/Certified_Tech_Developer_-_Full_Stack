package com.mongodb.aula33.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;

@Document(collection = "partidas")
public class Partidas implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private String id;
    private String status;
    private String resultado;
    @Field(name = "equipe_local")
    private Time timeLocal;
    @Field(name = "equipe_visitante")
    private Time timeVisitante;

    public Partidas() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getResultado() {
        return resultado;
    }

    public void setResultado(String resultado) {
        this.resultado = resultado;
    }

    public Time getTimeLocal() {
        return timeLocal;
    }

    public void setTimeLocal(Time timeLocal) {
        this.timeLocal = timeLocal;
    }

    public Time getTimeVisitante() {
        return timeVisitante;
    }

    public void setTimeVisitante(Time timeVisitante) {
        this.timeVisitante = timeVisitante;
    }
}
