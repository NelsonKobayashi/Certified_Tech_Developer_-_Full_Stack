package com.hql.aula30.mesa.futebol.ehnoismemo.service;

import com.hql.aula30.mesa.futebol.ehnoismemo.dao.JogadorDAO;
import com.hql.aula30.mesa.futebol.ehnoismemo.model.Equipe;
import com.hql.aula30.mesa.futebol.ehnoismemo.model.Jogador;
import com.hql.aula30.mesa.futebol.ehnoismemo.model.Treinador;
import com.hql.aula30.mesa.futebol.ehnoismemo.repository.EquipeRepository;
import com.hql.aula30.mesa.futebol.ehnoismemo.repository.JogadorRepository;
import com.hql.aula30.mesa.futebol.ehnoismemo.repository.TreinadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JogadorService {

    @Autowired
    private JogadorRepository jogadorRepository;

    @Autowired
    private TreinadorRepository treinadorRepository;

    @Autowired
    private EquipeRepository equipeRepository;

    public void insert (JogadorDAO jogadorDAO){
        Treinador treinador_id = treinadorRepository.getById(jogadorDAO.getIdTreinador());
        Equipe equipe_id = equipeRepository.getById(jogadorDAO.getIdEquipe());
        Jogador jogador = new Jogador(
                jogadorDAO.getNome(),
                jogadorDAO.getPosicao(),
                jogadorDAO.getNumero(),
                treinador_id,
                equipe_id);

        jogadorRepository.save(jogador);
    }
}
