public class CheckQuality {
    Handler initial;

    public CheckQuality(){
        this.initial = new TestaLote();
        Handler peso = new TestaPeso();
        Handler embalagem = new TestaEmbalagem();
        Handler aceito = new HandlerAceito();

        initial.setSeguinte(peso);
        peso.setSeguinte(embalagem);
        embalagem.setSeguinte(aceito);
    }

    public void verificar(Artigo artigo){
        initial.verificar(artigo);
    }
}
