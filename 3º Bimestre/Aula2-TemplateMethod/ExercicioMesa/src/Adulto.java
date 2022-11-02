public class Adulto extends Cardapio{


    public Adulto(double precoBase) {
        super(precoBase);
    }

    @Override
    public void montar() {
        System.out.println("Foi embalado o pacote normal.");
    }

    @Override
    public double precoVenda() {
        return getPrecoBase();
    }
}
