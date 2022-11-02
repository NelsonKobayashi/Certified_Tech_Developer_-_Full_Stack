public class TestaLote extends  Handler {

    @Override
    public void verificar(Artigo artigo) {
        if((artigo.getLote() < 1000) || (artigo.getLote() >2000)) {
            System.out.println("O produto foi Rejeitado, o LOTE não corresponde.");
        } else {
            if(this.getSeguinte() != null) {
                this.getSeguinte().verificar(artigo);
            }
        }
    }
}
