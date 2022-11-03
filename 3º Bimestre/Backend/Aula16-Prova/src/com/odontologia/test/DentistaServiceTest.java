package com.odontologia.test;


import com.odontologia.dao.impl.DentistaDaoH2;
import com.odontologia.model.Dentista;
import com.odontologia.service.DentistaService;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.junit.runners.MethodSorters;


import java.util.List;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@RunWith(JUnit4.class)
public class DentistaServiceTest {
    private static DentistaService dentistaService =
            new DentistaService(
                    new DentistaDaoH2());

    @BeforeClass
    public static void carregarDataSet(){
        Dentista d1 = dentistaService.salvar(new Dentista(1,"José","da Silva", "12345"));
        Dentista d2 = dentistaService.salvar(new Dentista(2,"João","da Sorva", "98765"));
        Dentista d3 = dentistaService.salvar(new Dentista(3,"Joselito","sem Noção", "23456"));
    }

    @Test
    public void cadastrarEBuscarDentistaTest(){
        Dentista d = dentistaService.salvar(new Dentista(1,"José","da Silveira", "98765"));
        Assert.assertNotNull(dentistaService.buscar(d.getId()));
    }

    @Test
    public void excluirDentistaTest(){
        dentistaService.excluir(3);
        Assert.assertTrue(dentistaService.buscar(3).isEmpty());
    }

    @Test
    public void trazerTodos(){
        List<Dentista> dentista = dentistaService.buscarTodos();
        Assert.assertTrue(!dentista.isEmpty());
        Assert.assertTrue(dentista.size()==2);
        System.out.println(dentista);
    }
}

