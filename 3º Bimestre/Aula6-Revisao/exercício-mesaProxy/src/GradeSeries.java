public class GradeSeries implements IGradeSeries{

    @Override
    public Serie getSerie(String nomeSerie) {
        Serie serie = null;
        switch (nomeSerie){
            case "Breaking Bad":
                serie = new Serie("Breaking Bad", "www.breakingbad.com");
                break;
            case "Anos Incríveis":
                serie = new Serie("Anos Incríveis", "www.anosincriveis.com");
                break;
            case "Jacksons 5":
                serie = new Serie("Jacksons 5", "www.jacksons5.com");
                break;

        }
        return serie;
    }
}
