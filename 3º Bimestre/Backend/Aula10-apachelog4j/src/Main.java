import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;

public class Main {

    private static final Logger logger = Logger.getLogger(Main.class);

    public static void main(String[] args) {

        BasicConfigurator.configure();
        Leao leao = new Leao();
        leao.setIdade(4);
        leao.setNome("Simba");
        leao.seteAlfa(true);
        leao.correr();

        try{
            leao.eMaioeQue10();
        } catch (Exception e) {
            logger.error("A idade do Leão " + leao.getNome() + " está incorreta", e) ;
        }

        Leao leao2 = new Leao();
        leao2.setIdade(-4);
        leao2.setNome("Scar");
        leao2.seteAlfa(false);
        leao2.correr();

        try{
            leao2.eMaioeQue10();
        } catch (Exception e) {
            logger.error("A idade do Leão " + leao2.getNome() + " está incorreta", e) ;
        }
    }
}
