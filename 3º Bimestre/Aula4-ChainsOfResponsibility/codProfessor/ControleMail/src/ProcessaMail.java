public class ProcessaMail {
    public static void main(String[] args){
        CheckMail check = new CheckMail();
        check.verificar( new Mail("wheslley@digitalhouse.com","teste1@colmeia.com", "gerencial"));
        check.verificar( new Mail("wheslley@digitalhouse.com","teste2@colmeia.com", "comercial"));
        check.verificar( new Mail("wheslley@digitalhouse.com","teste3@colmeia.com", "tecnico"));
        check.verificar( new Mail("wheslley@digitalhouse.com","teste4@colmeia.com", "Teste"));
    }
}
