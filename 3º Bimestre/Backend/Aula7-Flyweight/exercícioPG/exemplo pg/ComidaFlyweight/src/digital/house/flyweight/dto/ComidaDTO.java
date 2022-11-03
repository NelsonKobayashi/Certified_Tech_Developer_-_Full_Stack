package digital.house.flyweight.dto;

public class ComidaDTO {

	private String tipoComida;
	private int preco;
	private boolean temAlface;

	public ComidaDTO(String tipoComida) {
		super();
		this.tipoComida = tipoComida;
	}

	public ComidaDTO() {
		super();
	}

	public String getTipoComida() {
		return tipoComida;
	}

	public void setTipoComida(String tipoComida) {
		this.tipoComida = tipoComida;
	}

	public int getPreco() {
		return preco;
	}

	public void setPreco(int preco) {
		this.preco = preco;
	}

	public boolean isTemAlface() {
		return temAlface;
	}

	public void setTemAlface(boolean temAlface) {
		this.temAlface = temAlface;
	}

	public void descricaoDaComida() {
		System.out.println("É um/uma " + getTipoComida() + " que custa: " + getPreco());
	}

	@Override
	public String toString() {
		return "ComidaDTO [tipoComida=" + tipoComida + ", preço=" + preco + ", temAlface=" + temAlface + "]";
	}
}
