public class ProcessaMail {

    public static void main(String[] args) {
        CheckMail check = new CheckMail();
        check.verificar(new Mail("nelson@nelson.com", "tecnico@comlmeia.com", "teste"));
        check.verificar(new Mail("nelson@nelson.com", "gerencia@comlmeia.com", "teste"));
        check.verificar(new Mail("nelson@nelson.com", "comercial@comlmeia.com", "teste"));
        check.verificar(new Mail("nelson@nelson.com", "teste@comlmeia.com", "teste"));

    }
}
