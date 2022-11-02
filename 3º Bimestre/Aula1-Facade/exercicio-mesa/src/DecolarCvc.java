public class DecolarCvc {

    public static void main(String[] args) {

        //criando o preimeiro cliente (instância do primeiro cliente)
        ICheckFacade cliente1 = new CheckFacade();

        //solicitar a busca de voos e hotéis do primeiro cliente
        cliente1.buscar("19/10/2021", "10/12/2021", "São Paulo", "Salvador");
    }
}
