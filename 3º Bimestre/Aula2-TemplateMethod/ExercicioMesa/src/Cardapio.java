public abstract class Cardapio {

    private double precoBase;

    public Cardapio(double precoBase) {
        this.precoBase = precoBase;
    }

    public void precoFinal(){
        double valor = precoVenda();
        montar();
        System.out.println("O valor final ficou: " + valor);
    }

    public abstract void montar();
    public abstract double precoVenda();

    public double getPrecoBase() {
        return precoBase;
    }

    public void setPrecoBase(double precoBase) {
        this.precoBase = precoBase;
    }
}
