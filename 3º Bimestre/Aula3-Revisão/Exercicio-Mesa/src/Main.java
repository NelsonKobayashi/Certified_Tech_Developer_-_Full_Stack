public class Main {
    public static void main(String[] args) {
        Funcionario vendedor = new Funcionario("Fernando",15, 2015);
        vendedor.obterAfiliado("Nelson",15);

        Funcionario vendedor1 = new Funcionario("Larissa", 158,2012);
        vendedor1.obterAfiliado("Luiz", 23);

        Afiliado afiliado = new Afiliado("Nelson", 2);

        vendedor.calcularPontos();
        vendedor1.calcularPontos();
        afiliado.calcularPontos();
    }
}
