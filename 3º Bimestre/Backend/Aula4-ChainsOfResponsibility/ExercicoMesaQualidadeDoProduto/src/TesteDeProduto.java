public class TesteDeProduto {
    public static void main(String[] args) {
        CheckQuality check = new CheckQuality();
        check.verificar(new Artigo("produto1",1000,1200,"saudável"));
        check.verificar(new Artigo("produto2",1001,1119,"quase saudável"));
        check.verificar(new Artigo("produto4",900,1250,"saudável"));
        check.verificar(new Artigo("produto3",1550,1,"saudável"));
        check.verificar(new Artigo("produto5",1000,1200,"muito saudável"));

    }
}
