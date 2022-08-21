import java.util.*;

public class exercicio1 {
    public static void main(String[] args) {
        Set<String> coresArcoIris = new HashSet<>();
        coresArcoIris.add("vermelho");
        coresArcoIris.add("laranja");
        coresArcoIris.add("amarelo");
        coresArcoIris.add("verde");
        coresArcoIris.add("azul");
        coresArcoIris.add("anil");
        coresArcoIris.add("violeta");
        System.out.println("Exibindo todas as cores uma abaixo da outra");
        for (String cor : coresArcoIris) {
            System.out.println(cor);
        }
        System.out.println("O arco-íris possui " +coresArcoIris.size() + " cores.");
        Set<String> coresArcoIris2 = new TreeSet<>(coresArcoIris);
        System.out.println("Cores em ordem alfabética");
        System.out.println(coresArcoIris2);
        List<String> coresArcoIris3 = Arrays.asList("vermelho", "laranja", "amarelo", "verde", "azul", "anil", "violeta");
        Collections.reverse(coresArcoIris3);
        System.out.println("Cores em ordem reversa");
        System.out.println(coresArcoIris3);
        System.out.println("Cores que começam com a letra 'v'");
        for (String cor : coresArcoIris) {
            if (cor.startsWith("v")) {
                System.out.println(cor);
            }
        }
        System.out.println("Removendo todas as cores que começam com a letra 'v'");
        coresArcoIris.removeIf(cor -> cor.startsWith("v"));
        System.out.println(coresArcoIris);
        coresArcoIris.clear();
        System.out.println("Conjunto está vazio? " + true);
    }
}
