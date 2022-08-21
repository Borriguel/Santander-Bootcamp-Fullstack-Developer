import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;

public class Exercicio2 {
    public static void main(String[] args) {
        List<String> respostas = new ArrayList<>();
        Scanner leitor = new Scanner(System.in);
        System.out.println("Telefonou para a vítima? (s/n)");
        respostas.add(leitor.nextLine().toLowerCase());
        System.out.println("Esteve no local do crime? (s/n)");
        respostas.add(leitor.nextLine().toLowerCase());
        System.out.println("Mora perto da vítima? (s/n)");
        respostas.add(leitor.nextLine().toLowerCase());
        System.out.println("Devia para a vítima? (s/n)");
        respostas.add(leitor.nextLine().toLowerCase());
        System.out.println("Já trabalhou para  vítima? (s/n)");
        respostas.add(leitor.nextLine().toLowerCase());
        Iterator<String> iterator = respostas.iterator();
        int respostaSim = 0;
        while (iterator.hasNext()) {
            String resposta = iterator.next();
            if (resposta.equals("s")){
                respostaSim++;
            }
        }
        switch (respostaSim) {
            case 2 -> System.out.println("Suspeito");
            case 3, 4 -> System.out.println("Cúmplice");
            case 5 -> System.out.println("Assassino");
            default -> System.out.println("Inocente");
        }
    }
}
