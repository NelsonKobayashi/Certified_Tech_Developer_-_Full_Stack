package com.nerdflix;

public class GradeFilmes implements IGradeFilmes{

    @Override
    public Filme getFilme(String nomeFilme) {
        Filme filme = null;
        switch (nomeFilme){
            case "Homem Aranha":
                filme = new Filme("Homem Aranha","Brasil","www.homemaranha.com.br");
                break;
            case "Colombiano em busca de vingança":
                filme = new Filme("Colombiano em busca de vingança","colombia","www.vinganca.com.co");
                break;
            case "De volta para o futuro":
                filme = new Filme("De volta para o futuro","Argentina", "www.futuro.com.ar");
                break;
            case "Matrix":
                filme = new Filme("Matrix", "Brasil", "www.matrix.com.br");
                break;
            case "Brinquedo Assassino":
                filme = new Filme("Brinquedo Assassino", "Colombia", "www.brinquedoassassino.com.co");
                break;
        }
        return filme;
    }
}
