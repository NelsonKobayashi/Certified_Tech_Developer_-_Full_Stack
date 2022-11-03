import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class FlyweightFactoryTest {

    @Test
    void getTamanhoFabrica() {
        Roupa roupa = FlyweightFactory.obterRoupa("jeans");
        roupa.setTamanho("XS");
        Roupa roupa1 = FlyweightFactory.obterRoupa("jeans");
        roupa1.setImportada(true);
        Roupa roupa2 = FlyweightFactory.obterRoupa("jeans");
        roupa2.setTamanho("S");
        Roupa roupa3 = FlyweightFactory.obterRoupa("jeans");
        roupa3.setTamanho("M");
        Roupa roupa4 = FlyweightFactory.obterRoupa("jeans");
        roupa4.seteNovo(false);
        Roupa roupa5 = FlyweightFactory.obterRoupa("camiseta");
        roupa5.seteNovo(true);
        Roupa roupa6 = FlyweightFactory.obterRoupa("camiseta");
        roupa6.setTamanho("L");

        assertEquals(FlyweightFactory.roupaMap.size() == 2, true);
    }

    @Test
    void getTipoSetters() {
        Roupa roupa = FlyweightFactory.obterRoupa("jeans");
        roupa.setImportada(true);
        roupa.setTamanho("XS");
        roupa.seteNovo(false);

        assertEquals(roupa.isImportada(), true);
        assertEquals(roupa.iseNovo(), false);
        assertEquals(roupa.getTamanho(), "XS");
        assertEquals(roupa.getTipo(), "jeans");
    }

}