import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FiguraTest {

    Figura figura0, figura1;

    @BeforeEach
    void doBefore(){
        figura0 = new Quadrado(2);
        figura1 = new Circulo(3);
    }

    @Test
    void getPerimetro(){
        assertEquals(8.0, figura0.calcularPerimetro());
        assertEquals(18.84, figura1.calcularPerimetro());
    }
}