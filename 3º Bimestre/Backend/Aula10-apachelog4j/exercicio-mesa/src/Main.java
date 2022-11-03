import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;

public class Main {

    private static final Logger logger = Logger.getLogger(Main.class);

    public static void main(String[] args) {

        BasicConfigurator.configure();

        Inteiros inteiros = new Inteiros();

        try{
            inteiros.zero();
        } catch (Exception e) {
            logger.error("Mas báá Che, num achei nada aqui guri!", e) ;
        }


        inteiros.adicionar(1);
        inteiros.adicionar(2);
        inteiros.adicionar(3);
        inteiros.adicionar(4);
        inteiros.adicionar(5);
        inteiros.adicionar(6);
        inteiros.adicionar(1);
        inteiros.adicionar(2);
        inteiros.adicionar(3);

        Inteiros inteiros2 = new Inteiros();
        inteiros2.adicionar(1);
        inteiros2.adicionar(2);
        inteiros2.adicionar(3);
        inteiros2.adicionar(4);
        inteiros2.adicionar(5);
        inteiros2.adicionar(6);
        inteiros2.adicionar(1);
        inteiros2.adicionar(2);
        inteiros2.adicionar(3);
        inteiros2.adicionar(1);
        inteiros2.adicionar(2);
        inteiros2.adicionar(3);
        inteiros2.adicionar(4);
        inteiros2.adicionar(5);
        inteiros2.adicionar(6);
        inteiros2.adicionar(1);
        inteiros2.adicionar(2);
        inteiros2.adicionar(3);
        inteiros2.adicionar(1);
        inteiros2.adicionar(2);
        inteiros2.adicionar(3);

        try{
            inteiros.maisDeCinco();
        } catch (Exception e) {
            logger.error("não tem mais de cinco", e) ;
        }

        try{
            inteiros.maisDeDez();
        } catch (Exception e) {
            logger.error("não tem mais de mais de dez", e) ;
        }

        try{
            inteiros.calcularMedia();
        } catch (Exception e) {
            logger.error("não sei fazer divisão por 0");
        }
        try{
            inteiros2.maisDeCinco();
        } catch (Exception e) {
            logger.error("não tem mais de cinco", e) ;
        }

        try{
            inteiros2.maisDeDez();
        } catch (Exception e) {
            logger.error("não tem mais de mais de dez", e) ;
        }

        try{
            inteiros2.calcularMedia();
        } catch (Exception e) {
            logger.error("não sei fazer divisão por 0");
        }

    }

}
