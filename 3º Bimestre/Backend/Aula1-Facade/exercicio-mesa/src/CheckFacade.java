public class CheckFacade implements  ICheckFacade{

    // Armazenar a instância de cada Api na memória
    private VooApi vooApi;
    private HotelApi hotelApi;

    // Construtor que cria as instâncias (inicializa)
    public CheckFacade(){
        vooApi = new VooApi();
        hotelApi = new HotelApi();
    }

    // Centralizar as buscas de voos e hoteis
    public void buscar(String dataPartida, String dataRetorno, String origem, String destino){
        vooApi.buscarVoos(dataPartida, dataRetorno, origem, destino);
        hotelApi.buscarHoteis(dataPartida, dataRetorno, destino);
    }
}
