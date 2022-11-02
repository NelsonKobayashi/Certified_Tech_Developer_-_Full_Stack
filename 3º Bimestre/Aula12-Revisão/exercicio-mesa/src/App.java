import java.sql.*;
import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;

public class App {

    private static final String sqlCreate = "DROP TABLE IF EXISTS funcionarios; " +
            "CREATE TABLE funcionarios (id INT PRIMARY KEY, primeiroNome VARCHAR(32) NOT NULL, sobrenome VARCHAR(32) NOT NULL, idade INT NOT NULL, cargo VARCHAR (32), email VARCHAR (32), CPF VARCHAR(14))";

    private static final String sqlInsert = "INSERT INTO funcionarios " +
            "(id, primeiroNome, sobrenome, idade, cargo, email, CPF) VALUES " +
            "(0, 'Larissa', 'Nunes', 25, 'Gerente', 'lalanunes@lala.com', '123.456.789-00')," +
            "(1, 'David', 'Silva', 21, 'TI', 'david@lala.com', '321.456.789-00')," +
            "(2, 'Marcos', 'Spano', 18, 'Estagiário', 'maridodealuguel@lala.com', '456.456.789-00')," +
            "(3, 'Breno', 'Rodrigues', 18, 'Estagiário', 'brenex@lala.com', '987.456.789-00')," +
            "(4, 'Nelson', 'Kobayashi', 41, 'Faxineiro', 'nelson@lala.com', '654.456.789-00')";

    private static final String sqlInsert2 = "(1, 'Nelson da Terra 2', 'Kobayashi', 41, 'Faxineiro', 'nelson@lala.com', '654.456.789-00')";

    private static final String sqlUpdate = "UPDATE funcionarios SET CPF='654.987.321-11' WHERE id = 0";

    private static final String sqlDelete = "DELETE FROM funcionarios WHERE id = 3";

    private static final String sqlDelete2 = "DELETE FROM funcionarios WHERE PrimeiroNome = 'Nelson'";

    //Declaração do Logger
    private static final Logger logger = Logger.getLogger(App.class);

    //Método Main
    public static void main(String[] args) throws Exception {

        //Configuração do Logger
        BasicConfigurator.configure();
        Connection connection = null;

        try {
            connection = getConnection();
            Statement statement = connection.createStatement();
            statement.execute(sqlCreate);
            try {
                statement.execute(sqlInsert);

            } catch (Exception e) {
                e.printStackTrace();
            }
            try {
                statement.execute(sqlInsert2);
            } catch (Exception e) {
                logger.info("Unique index or primary key violation");
            }
            try {
                statement.execute(sqlUpdate);
                logger.debug("O CPF do id 0 foi atualizado");
            } catch (Exception e) {
                e.printStackTrace();
            }
            try {
                statement.execute(sqlDelete);
                logger.info("Funcionário de id 3 foi deteletado");
            } catch (Exception e) {
                e.printStackTrace();
            }
            try {
                statement.execute(sqlDelete2);
                logger.info("Funcionário de nome Nelson foi deteletado");
            } catch (Exception e) {
                e.printStackTrace();
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (connection == null)
                return;
            connection.close();
        }
    }
    public static Connection getConnection() throws Exception {
        Class.forName("org.h2.Driver");
        return DriverManager.getConnection("jdbc:h2:tcp://localhost/~/test", "sa", "");
    }

}
