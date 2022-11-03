public class HotelApi {

    // Procurar os hotéis de acordo com um data pré-estabelecida
    public void buscarHoteis(String dataEntrada, String dataSaida, String cidade){
        System.out.println("====================================");
        System.out.println("Hotéis encontrados: " + cidade);
        System.out.println("Data de Entrada: " + dataEntrada + " - Data de Saída: " + dataSaida);
    }
}
