import java.util.ArrayList;

public class Funcionario extends Vendedor{

    private Afiliado afiliado;
    private int contarAfiliado = 0;
    private int anoContratacao;

    public Funcionario(String nome, int vendas, int anoContratacao) {
        super(nome, vendas);
        this.anoContratacao = anoContratacao;
    }

    public void obterAfiliado(String nome, int vendas){
        this.afiliado = new Afiliado(nome, vendas);
        contarAfiliado++;
    }

    @Override
    public void calcularPontos() {
        int pontos;
        int tempoCasa = 2021-anoContratacao;
        pontos =  (contarAfiliado * 10) + (getVendas() * 5) + (tempoCasa * 5);
        setPontos(pontos);
        System.out.println("O Funcionário " + getNome() + " tem o total de " + pontos + " pontos, e sua categoria é " + mostrarCategoria());
    }

}
