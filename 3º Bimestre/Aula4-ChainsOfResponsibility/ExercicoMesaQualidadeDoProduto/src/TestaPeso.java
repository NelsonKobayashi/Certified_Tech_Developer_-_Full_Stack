public class TestaPeso extends  Handler {

    @Override
    public void verificar(Artigo artigo) {
        if((artigo.getPeso() <= 1200) && (artigo.getLote() >=1300)) {
            System.out.println("O produto foi Rejeitado, o PESO não corresponde.");
        } else {
            if(this.getSeguinte() != null) {
                this.getSeguinte().verificar(artigo);
            }
        }
    }
}
