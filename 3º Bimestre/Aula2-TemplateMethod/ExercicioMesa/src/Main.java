public class Main {
    public static void main(String[] args) {
        Cardapio cardapio = new Adulto(40.0);
        cardapio.precoFinal();

        System.out.println("\n");

        cardapio = new Infantil(50.0, 12.0);
        cardapio.precoFinal();

        System.out.println("\n");

        cardapio = new Vegetariano(60.0,5);
        cardapio.precoFinal();
    }
}
