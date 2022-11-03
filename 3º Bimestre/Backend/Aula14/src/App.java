import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class App {

    public static void main(String[] args) {

        List<Cachorro> cachorros = new ArrayList<>();

        Cachorro cachorro1 = new Cachorro();
        cachorro1.setNome("Totó");
        cachorro1.setIdade(3);
        Cachorro cachorro2 = new Cachorro();
        cachorro2.setNome("ScoobyDoo");
        cachorro2.setIdade(5);
        Cachorro cachorro3 = new Cachorro();
        cachorro3.setNome("ScoobyLoo");
        cachorro3.setIdade(1);

        cachorros.add(cachorro1);
        cachorros.add(cachorro2);
        cachorros.add(cachorro3);

        //Salvando a coleção em um arquivo.
        FileOutputStream fo = null;

        try{
            fo = new FileOutputStream("OutputFile.txt");
            ObjectOutputStream dos = new ObjectOutputStream(fo);
            dos.writeObject(cachorros);
        } catch (FileNotFoundException e) {
            System.out.println("Error: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Recuperação do arquivo
        List<Cachorro> cachorros2=null;
        FileInputStream fi = null;

        try{
            fi = new FileInputStream("OutputFile.txt");
            ObjectInputStream ois = new ObjectInputStream(fi);
            cachorros2 = (ArrayList) ois.readObject();
        } catch (FileNotFoundException e) {
        System.out.println("Error: " + e.getMessage());
    } catch (Exception e) {
        System.out.println("Error: " + e.getMessage());
    }

    }
}
