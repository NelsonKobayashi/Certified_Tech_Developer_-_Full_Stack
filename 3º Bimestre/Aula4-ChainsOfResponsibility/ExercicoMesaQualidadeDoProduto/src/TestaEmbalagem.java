public class TestaEmbalagem extends  Handler {

    @Override
    public void verificar(Artigo artigo) {
        if((artigo.getEmbalagem().equalsIgnoreCase("saudável")) || (artigo.getEmbalagem().equalsIgnoreCase("quase saudável"))) {
            if(this.getSeguinte() != null) {
                this.getSeguinte().verificar(artigo);
            }
        } else {
            System.out.println("O produto foi Rejeitado, a EMBALAGEM não corresponde.");
        }
    }
}
