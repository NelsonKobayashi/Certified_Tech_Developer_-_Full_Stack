import org.apache.log4j.Logger;

public class Tigre {

    private static final Logger logger = Logger.getLogger(Tigre.class);

    private String nome;
    private int idade;


    public Tigre(String nome, int idade) {
        super();
        this.nome = nome;
        this.idade = idade;
    }

    public String getNome() { return nome; }

    public void setNome(String nome) { this.nome = nome; }

    public int getIdade() { return idade; }

    public void setIdade(int idade) { this.idade = idade; }

    //Métodos
    public void correr(){
        logger.info("O Tigre " + nome + " está correndo!");
    }

    public void eMaioeQue10() throws Exception {
        if (idade > 10) {
            logger.info("O Tigre " + nome + " tem mais de 10 anos!");
        }
        if (idade < 0) {
            logger.error("A idade não pode ser negativa!");
            throw new Exception();
        }
    }
}
