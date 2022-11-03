public class DepartamentoGerencial extends Handler{

    @Override
    public void verificar(Mail eMail) {
        if ((eMail.getDestino().equalsIgnoreCase("gerencia@colmeia.com")) || (eMail.getAssunto().equalsIgnoreCase("gerencial"))) {
            System.out.println("Enviado à Gerencia");
        } else {
            if (this.getSeguinte() != null) {
                this.getSeguinte().verificar(eMail);
            }
        }
    }
}

