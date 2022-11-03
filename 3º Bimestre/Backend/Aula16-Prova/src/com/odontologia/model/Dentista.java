package com.odontologia.model;

public class Dentista {

    private Integer id;
    private String nome;
    private String sobrenome;
    private String numRegistro;



    public Dentista(Integer id, String nome, String sobrenome,String numRegistro) {
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.numRegistro = numRegistro;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getNumRegistro() {
        return numRegistro;
    }

    public void setNumRegistro(String numRegistro) {
        this.numRegistro = numRegistro;
    }

    @Override
    public String toString() {
        return "Dentista{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", sobrenome='" + sobrenome + '\'' +
                ", numRegistro='" + numRegistro + '\'' +
                '}';
    }
}
