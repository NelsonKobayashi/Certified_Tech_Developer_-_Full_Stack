package com.example.map1.service;

import com.example.map1.domain.Paciente;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class OdontoService {

    private static Map<Integer, Paciente> mapa = new HashMap<>();

    private static String[] nomes = {
            "Antonio", "Marta", "Bianca", "Creuza", "Patrick",
            "Jonas", "Paula", "Ana", "Fernanda", "Patricia"};

    private static String[] sobrenomes = {
            "Moraes", "Silveira", "Andrade", "Oliveira", "Bueno",
            "Martinelli", "Souza", "Sauro", "De Sá", "Gomes"};

    public Paciente criarPaciente() {
        Random rand = new Random();
        int upperbound = 10;
        String nome = nomes[rand.nextInt(upperbound)];
        String sobrenome = sobrenomes[rand.nextInt(upperbound)];
        String email = nome.toLowerCase() + sobrenome.toLowerCase() + "@dh.com";
        Integer id = mapa.size() + 1;

        mapa.put(id, new Paciente(
                nome, sobrenome, email, (rand.nextInt(upperbound) + 18)));

        return mapa.get(id);
    }

    public Map<Integer, Paciente> buscarPaciente() {
        return mapa;
    }

    public void deletar(Integer id) {
        mapa.remove(id);
    }

}
