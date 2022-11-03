package com.farmacia.model;

public class Medicamento {

    private Integer id;
    private String nome;
    private String laboratorio;
    private Integer qtde;
    private Double preco;

    //Construtor-padrão
    public Medicamento(){}

    //Construtor
    public Medicamento(Integer id, String nome, String laboratorio, Integer qtde, Double preco) {
        this.id = id;
        this.nome = nome;
        this.laboratorio = laboratorio;
        this.qtde = qtde;
        this.preco = preco;
    }

    public Medicamento(String nome, String laboratorio, Integer qtde, Double preco) {
        this.nome = nome;
        this.laboratorio = laboratorio;
        this.qtde = qtde;
        this.preco = preco;
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

    public String getLaboratorio() {
        return laboratorio;
    }

    public void setLaboratorio(String laboratorio) {
        this.laboratorio = laboratorio;
    }

    public Integer getQtde() {
        return qtde;
    }

    public void setQtde(Integer qtde) {
        this.qtde = qtde;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    @Override
    public String toString() {
        return "Medicamento{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", laboratorio='" + laboratorio + '\'' +
                ", qtde=" + qtde +
                ", preco=" + preco +
                '}';
    }
}
