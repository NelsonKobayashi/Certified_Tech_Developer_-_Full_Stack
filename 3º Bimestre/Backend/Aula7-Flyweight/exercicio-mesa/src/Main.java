public class Main {

    public static void main(String[] args) {

        final ArvoreFactory arvore = new ArvoreFactory();

        Arvore arvore1 = arvore.getArvore("Ornamentais");
        arvore1.setAltura(200);
        arvore1.setLargura(400);
        arvore1.setCor("Verde");
        System.out.println(arvore1.toString());

        Arvore arvore2 = arvore.getArvore("Frutíferas");
        arvore2.setAltura(500);
        arvore2.setLargura(300);
        arvore2.setCor("Vermelho");
        System.out.println(arvore2.toString());

        Arvore arvore3 = arvore.getArvore("Florífera");
        arvore3.setAltura(100);
        arvore3.setLargura(200);
        arvore3.setCor("Azul");
        System.out.println(arvore3.toString());

        Arvore arvore4 = arvore.getArvore("Ornamentais");
        arvore4.setAltura(200);
        arvore4.setLargura(400);
        arvore4.setCor("Verde");
        System.out.println(arvore1.toString());

    }
}
