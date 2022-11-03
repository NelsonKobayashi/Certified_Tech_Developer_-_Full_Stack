package com.hql.aula30.mesa.futebol.ehnoismemo.model;

import javax.persistence.*;

@Entity
@Table
public class Jogador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String posicao;
    private String numero;

    //Teremos duas chaves estrangeiras: Many to One
        //-equipe_id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "equipe_id")
    private Equipe equipe;
        //-treinador_id
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "treinador_id")
    private Treinador treinador;



    public Jogador() {
    }

    public Jogador(String nome, String posicao, String numero, Treinador treinador,Equipe equipe) {
        this.nome = nome;
        this.posicao = posicao;
        this.numero = numero;
        this.treinador = treinador;
        this.equipe = equipe;

    }

    public Jogador(Integer id, String nome, String posicao, String numero, Treinador treinador,Equipe equipe) {
        this.id = id;
        this.nome = nome;
        this.posicao = posicao;
        this.numero = numero;
        this.treinador = treinador;
        this.equipe = equipe;

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

    public String getPosicao() {
        return posicao;
    }

    public void setPosicao(String posicao) {
        this.posicao = posicao;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public Equipe getEquipe() {
        return equipe;
    }

    public void setEquipe(Equipe equipe) {
        this.equipe = equipe;
    }

    public Treinador getTreinador() {
        return treinador;
    }

    public void setTreinador(Treinador treinador) {
        this.treinador = treinador;
    }
}
