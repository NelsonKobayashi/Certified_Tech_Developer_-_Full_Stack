package com.integrador.odontologia.service;


import com.integrador.odontologia.model.Dentista;
import com.integrador.odontologia.repository.IDao;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DentistaService {
    private IDao<Dentista> dentistaIDao;

    public DentistaService(IDao<Dentista> dentistaIDao) {

        this.dentistaIDao = dentistaIDao;
    }

    public Dentista registrarDentista(Dentista dentista) {
        return dentistaIDao.salvar(dentista);
    }
    public Optional<Dentista> buscar(Integer id){return dentistaIDao.buscar(id);}
    public List<Dentista> buscarTodos(){return dentistaIDao.buscarTodos();}
    public void excluir(Integer id){dentistaIDao.excluir(id);}
    public Dentista atualizar(Dentista dentista){return dentistaIDao.atualizar(dentista);}

}
