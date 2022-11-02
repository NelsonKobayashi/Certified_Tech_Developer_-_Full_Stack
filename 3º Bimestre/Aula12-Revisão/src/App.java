import java.sql.*;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;

public class App {

    private static final String sqlCreate = "DROP TABLE IF EXISTS usuarios; " +
            "CREATE TABLE usuarios (" +
            "id INT AUTO_INCREMENT PRIMARY KEY, " +
            "primeiroNome VARCHAR(32) NOT NULL, " +
            "sobrenome VARCHAR(32) NOT NULL, " +
            "idade int NOT NULL)";

    private static final  String sqlInsert = "INSERT INTO usuarios " +
            "(primeiroNome, sobrenome, idade) VALUES " +
            "('Jardel','Silva', 24), ('Renner','Almeida', 31), ('Caio','Castro', 22) ";

    private static final String sqlDelete = "DELETE FROM usuarios WHERE id = 1";

    // Declaração do nosso Logger
    private static final  Logger logger = Logger.getLogger(App.class);

    // Método Main
    public static void main(String[] args) throws Exception {

        // Aqui e configuração do Logging
        BasicConfigurator.configure();
        Connection connection = null;

        try {
            connection = getConnection();
            Statement statement = connection.createStatement();
            statement.execute(sqlCreate);
            statement.execute(sqlInsert);
            statement.execute(sqlDelete);
            logger.info("Excluímos o usuário com o id = 1");
        }
        catch (Exception e){
            e.printStackTrace();
        }
        finally {
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
