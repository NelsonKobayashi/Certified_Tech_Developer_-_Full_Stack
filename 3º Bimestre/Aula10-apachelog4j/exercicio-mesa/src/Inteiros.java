import org.apache.log4j.Logger;


import java.util.ArrayList;
import java.util.List;

public class Inteiros {

    private static final Logger logger = Logger.getLogger(Inteiros.class);

    List<Integer> inteiros = new ArrayList<>();
    //private ArrayList<Inteiros> listInteiros = new ArrayList<>();

    public void adicionar (int numero){
        inteiros.add(numero);
    }

    public void zero() throws Exception{
        if (inteiros.size() == 0) {
            throw new Exception();
        }
    }

    public void maisDeCinco() throws Exception{
        if (inteiros.size() >= 5 && inteiros.size() < 10) {
            logger.info("Tem mais de cinco.");
        } else {
            throw new Exception();
        }
    }

    public void maisDeDez() throws Exception{
        if (inteiros.size() >= 10) {
            logger.info("Tem mais de dez itens");
        } else {
        throw new Exception();
        }
    }

    public void calcularMedia() throws Exception{
        int divisor = inteiros.size();
        if (inteiros.size()==0){
            throw new Exception();
        } else {
            int result = inteiros
                    .stream()
                    .reduce(0, Integer::sum);

            logger.info("A média é: " + (result / divisor));
        }
    }




}
