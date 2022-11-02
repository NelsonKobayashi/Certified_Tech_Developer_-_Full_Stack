public class Views {

    private int contView;
    private int days;

    public Views(int contView, int days) {
        this.contView = contView;
        this.days = days;
    }

    String getContViewSemana(){
        String ok = "";
            ok = ((contView > 5) && (days <= 7)) ? "erro" :
                 ((contView > 10) && (days <= 14)) ? "erro" :
                 (contView > 15) && (days <= 21) ? "erro" :
                 (contView > 20) && (days <= 28) ? "erro" :
                 (contView > 25) && (days <= 31) ? "erro" :
                 "ok";
        return ok;
    }
}
