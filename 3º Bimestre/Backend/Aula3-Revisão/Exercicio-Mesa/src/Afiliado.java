public class Afiliado extends Vendedor{


    public Afiliado(String nome, int vendas) {
        super(nome, vendas);
    }

    @Override
    public void calcularPontos() {
        int pontos = getVendas() * 15;
        setPontos(pontos);
        System.out.println("O Afiliado " + getNome() + " tem o total de " + pontos + " pontos, e sua categoria é " + mostrarCategoria());
    }

}
