public class HandlerSpam extends Handler{

    @Override
    public void verificar(Mail eMail) {
        System.out.println("Marcado como SPAM");
    }
}
