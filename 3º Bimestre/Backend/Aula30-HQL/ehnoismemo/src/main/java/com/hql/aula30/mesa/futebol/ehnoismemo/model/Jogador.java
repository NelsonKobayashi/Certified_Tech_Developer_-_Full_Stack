package com.hql.aula30.mesa.futebol.ehnoismemo.model;

import javax.persistence.*;

@Entity
@Table
public class Jogador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String nome;
    private String posicao;
    private int numero;
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "Portuguesa")
    private Time time;

    public Jogador() {
    }

    public Jogador(String nome, String posicao, int numero, Time time) {
        this.nome = nome;
        this.posicao = posicao;
        this.numero = numero;
        this.time = time;
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

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    @Override
    public String toString() {
        return "Jogador{" +
                "nome='" + nome + '\'' +
                ", posicao='" + posicao + '\'' +
                ", numero=" + numero +
                ", time=" + time +
                '}';
    }
}
