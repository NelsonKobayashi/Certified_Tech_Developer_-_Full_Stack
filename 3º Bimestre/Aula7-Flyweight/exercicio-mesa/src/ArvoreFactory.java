import java.util.HashMap;

public class ArvoreFactory {

    public static final HashMap<String, Arvore> arvoreMap = new HashMap();

    public static Arvore getArvore(String tipo) {
        Arvore arvore = (Arvore) arvoreMap.get(tipo);

        if(arvore == null) {
            arvore = new Arvore (tipo);
            arvoreMap.put(tipo, arvore);
            System.out.println("Criando novo cadastro de árvore: " + tipo);
            return arvore;
        }
        System.out.println("Recuperando árvore cadastrada no sistema: " + tipo);
        return arvore;
    }
}
