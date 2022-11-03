package com.odontologia.service;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;

import com.odontologia.dao.IDao;
import com.odontologia.model.Dentista;

import java.util.List;
import java.util.Optional;



public class DentistaService {

    private IDao<Dentista> dentistaIDao;

    public DentistaService(IDao<Dentista> dentistaIDao) {
        this.dentistaIDao = dentistaIDao;
    }

    public Dentista salvar(Dentista dentista) {
        dentistaIDao.salvar(dentista);
        return dentista;
    }

    public Optional<Dentista> buscar(Integer id) {
        logger.info("Dentista localizado.");
        return dentistaIDao.buscar(id);
    }

    public List<Dentista> buscarTodos() {
        logger.info("Dentistas localizados.");
        return dentistaIDao.buscarTodos();
    }

    public void excluir(Integer id) {
        logger.info("Dentista excluído.");
        dentistaIDao.excluir(id);
    }

    private static final Logger logger = Logger.getLogger(DentistaService.class);
}


