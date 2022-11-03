package com.hql.aula30.mesa.futebol.ehnoismemo.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
public class Time {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String nome;
    private String cidade;
    @OneToMany(mappedBy = "time",fetch = FetchType.LAZY)
    private Set<Jogador> jogadores = new HashSet<>();

    public Time() {
    }

    public Time(String nome, String cidade, Set<Jogador> jogadores) {
        this.nome = nome;
        this.cidade = cidade;
        this.jogadores = jogadores;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public Set<Jogador> getJogadores() {
        return jogadores;
    }

    public void setJogadores(Set<Jogador> jogadores) {
        this.jogadores = jogadores;
    }

    @Override
    public String toString() {
        return "Time{" +
                "nome='" + nome + '\'' +
                ", cidade='" + cidade + '\'' +
                ", jogadores=" + jogadores +
                '}';
    }
}
