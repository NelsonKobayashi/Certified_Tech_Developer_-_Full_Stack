import java.util.HashMap;

public class FlyweightFactory {

    public static final HashMap<String, Roupa> roupaMap = new HashMap<>();

    public static Roupa obterRoupa(String tipo) {
        Roupa roupa = roupaMap.get(tipo);
        if (roupa == null) {
            roupa = new Roupa(tipo);
            roupaMap.put(tipo, roupa);
            System.out.println("Criando Objeto de roupa tipo: " + tipo);
            return roupa;

        }
        System.out.println("Recuperando Objeto de comida tipo: " + tipo);
        return roupa;

    }
}


