import java.io.FileWriter;
import java.util.Scanner;

public class task22 {
    public static void main(String[] args) throws Exception {

        Scanner sc = new Scanner(System.in);

        String text = sc.nextLine();

        FileWriter fw = new FileWriter("output.txt");

        fw.write(text);

        fw.close();

        System.out.println("Written Successfully");
    }
}