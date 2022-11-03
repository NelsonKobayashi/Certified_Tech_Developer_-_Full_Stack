package teste.com.farmacia;

import com.farmacia.dao.ConfiguracaoJDBC;
import com.farmacia.dao.impl.MedicamentoDaoH2;
import com.farmacia.model.Medicamento;
import com.farmacia.service.MedicamentoService;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class MedicamentoServiceTest {

    private MedicamentoService medicamentoService =
            new MedicamentoService(
                    new MedicamentoDaoH2(
                            new ConfiguracaoJDBC()));

    @Test
    public void guardarMedicamento(){
        Medicamento medicamento = new Medicamento(
            "Ibuprofeno",
            "lab123",
            1000,
            200.0);

        medicamentoService.salvar(medicamento);
        Assertions.assertTrue(medicamento.getId() != null);
    }
}
