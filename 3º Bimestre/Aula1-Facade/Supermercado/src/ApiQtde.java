public class ApiQtde {

    public int desconto(int quantidade) {
        if(quantidade > 12) {
            return 15;
        } else {
            return 0;
        }
    }
}
