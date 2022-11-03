public class Vegetariano extends Cardapio{

    private double container;

    public Vegetariano(double precoBase, double container) {
        super(precoBase);
        this.container = container;
    }

    @Override
    public void montar() {
        System.out.println("Foi embalado o pacote vegetariano.");
    }

    @Override
    public double precoVenda() {
        return (getPrecoBase() + container) * 1.01;
    }
}
