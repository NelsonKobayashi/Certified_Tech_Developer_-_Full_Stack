public class Main {
    public static void main(String[] args) {
        GradeSeriesProxy proxy = new GradeSeriesProxy(new GradeSeries());
        proxy.setViews(new Views(4,7));

        try{
            System.out.println(proxy.getSerie("Anos Incríveis").getLink());
        }catch (SerieNaoHabilitadoException e){
            System.out.println(e);
        }
    }
}
