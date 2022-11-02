public class GradeSeriesProxy implements  IGradeSeries{

    private GradeSeries grade;
    private Views views;

    public Views getCont(){
        return views;
    }

    public void setViews(Views views){
        this.views = views;
    }

    public GradeSeriesProxy(GradeSeries grade) {
        this.setGrade(grade);
    }

    public void setGrade(GradeSeries grade) {
        this.grade = grade;
    }

    @Override
    public Serie getSerie(String nomeSerie) throws SerieNaoHabilitadoException {
        Serie serie = grade.getSerie(nomeSerie);
        if(getCont().getContViewSemana().equals("erro")){
            throw new SerieNaoHabilitadoException(nomeSerie + " Está muito bitolado, vai assistir outra série!");
        }
        return serie;
    }
}
