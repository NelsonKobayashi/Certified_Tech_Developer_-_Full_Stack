package digital.house.flyweigth;

import digital.house.flyweight.dto.ComidaDTO;
import digital.house.flyweight.factory.ComidaFactory;

public class Application {

	public static void main(String[] args) {

		final ComidaFactory comida = new ComidaFactory();

		ComidaDTO comida1 = comida.getComida("Massas");
		comida1.setPreco(10000);

		final ComidaDTO comida2 = comida.getComida("Massas");
		System.out.println(comida2.toString());
	}
}
