import java.util.*;

public class Exercicio {
    public static void main(String[] args) {
        Map<String, Integer> estados = new LinkedHashMap<>();
        estados.put("PE", 9616621);
        estados.put("AL", 3351543);
        estados.put("CE", 9187103);
        estados.put("RN", 3534265);
        System.out.println(estados);
        estados.put("RN", 3535165);
        System.out.println(estados);
        if (estados.containsKey("PB")) {
            System.out.println(estados.get("PB"));
        } else {
            estados.put("PB", 4039277);
        }
        List<Map.Entry<String, Integer>> entries = new ArrayList<>(estados.entrySet());
        entries.sort((o1, o2) -> o1.getKey().compareToIgnoreCase(o2.getKey()));
        System.out.println(entries);
        Collection<Integer> populacao = estados.values();
        var maiorPopulacao = Collections.max(populacao);
        var menorPopulacao = Collections.min(populacao);
        String estadoPopuloso = "";
        String estadoMenosPopuloso = "";
        for (Map.Entry<String, Integer> entry : entries) {
            if (entry.getValue().equals(menorPopulacao)) {
                estadoMenosPopuloso = entry.getKey();
                System.out.println("O estado " + estadoMenosPopuloso + " é o menos populoso com " + menorPopulacao + " habitantes");
            }
        }
        for (Map.Entry<String, Integer> entry : entries) {
            if (entry.getValue().equals(maiorPopulacao)) {
                estadoPopuloso = entry.getKey();
                System.out.println("O estado " + estadoPopuloso + " é o mais populoso com " + maiorPopulacao + " habitantes");
            }
        }
        Iterator<Integer> iterator = estados.values().iterator();
        int somaPopulacao = 0;
        while (iterator.hasNext()) {
            somaPopulacao += iterator.next();
        }
        System.out.println("A soma da população é " + somaPopulacao);
        double mediaPopulacao = (double) somaPopulacao / estados.size();
        System.out.println("A média da população é " + mediaPopulacao);
        System.out.println("Removendo estados com população menor que 4.000.000 habitantes");
        for (Map.Entry<String, Integer> entry : entries) {
            if (entry.getValue() < 4000000) {
                estados.remove(entry.getKey());
            }
        }
        System.out.println(estados);
        estados.clear();
        System.out.println("Map estados está vazio? " + estados.isEmpty());
    }
}
