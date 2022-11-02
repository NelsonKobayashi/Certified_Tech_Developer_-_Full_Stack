public class FacadeDesconto implements IFacadeDesconto{

    //Armazenando a instância de cada API na memória
    private ApiCartao apiCartao;
    private ApiProduto apiProduto;
    private ApiQtde apiQtde;

    //construtor que cria as instâncias
    public FacadeDesconto() {
        apiCartao = new ApiCartao();
        apiProduto = new ApiProduto();
        apiQtde = new ApiQtde();
    }

    public int desconto(Cartao cartao, Produto prod, int quantidade) {
        int desconto = 0;
        desconto = desconto + apiQtde.desconto(quantidade);
        desconto = desconto + apiProduto.desconto(prod);
        desconto = desconto + apiCartao.desconto(cartao);

        return desconto;
    }
}
