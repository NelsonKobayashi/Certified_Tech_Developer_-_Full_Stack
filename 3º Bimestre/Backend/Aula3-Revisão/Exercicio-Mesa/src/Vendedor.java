public abstract class Vendedor {

    private String nome;
    private int pontos = 0;
    private int vendas;

    public Vendedor(String nome, int vendas) {
        this.nome = nome;
        this.vendas = vendas;
    }

    public String mostrarCategoria (){
        if(getPontos() < 20) {
            return ("Novato");
        } else if (getPontos() >= 20 && getPontos() <= 30) {
            return("Aprendiz");
        } else if (getPontos() > 30 && getPontos() < 40) {
            return("Bom");
        } else {
            return("Mestre");
        }
    }

    public abstract void calcularPontos();

    public String getNome() {
        return nome;
    }

    public int getPontos() {
        return pontos;
    }

    public void setPontos(int pontos) {
        this.pontos = pontos;
    }

    public int getVendas() {
        return vendas;
    }

}
