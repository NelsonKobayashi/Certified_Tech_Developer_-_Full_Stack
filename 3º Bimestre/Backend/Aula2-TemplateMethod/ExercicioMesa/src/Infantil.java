public class Infantil extends Cardapio{

    private double presente;

    public Infantil(double precoBase, double presente) {
        super(precoBase);
        this.presente = presente;
    }

    @Override
    public void montar() {
        System.out.println("Foi embalado o pacote infantil.");
    }

    @Override
    public double precoVenda() {
        return getPrecoBase() + presente;
    }

}
