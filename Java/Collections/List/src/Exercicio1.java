import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;

public class Exercicio1 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        List<Double> temperaturas = new ArrayList<>();
        for (int contador = 1; contador <= 6; contador++) {
            temperaturas.add(entrada.nextDouble());
        }
        System.out.println(temperaturas);
        double mediaTemperaturas = 0;
        for (Double temperatura : temperaturas) {
            mediaTemperaturas += temperatura;
        }
        mediaTemperaturas = mediaTemperaturas / temperaturas.size();
        System.out.printf("A média da temperatura foi de %.1f ºC%n", mediaTemperaturas);
        Iterator<Double> temperaturasIterator = temperaturas.iterator();
        int contador = 0;
        while (temperaturasIterator.hasNext()) {
            Double temperatura = temperaturasIterator.next();
            if (temperatura > mediaTemperaturas) {
                switch (contador) {
                    case (0) -> System.out.printf("Janeiro temperatura %.1f ºC%n", temperatura);
                    case (1) -> System.out.printf("Fevereiro temperatura %.1f ºC%n", temperatura);
                    case (2) -> System.out.printf("Março temperatura %.1f ºC%n", temperatura);
                    case (3) -> System.out.printf("Abril temperatura %.1f ºC%n", temperatura);
                    case (4) -> System.out.printf("Maio temperatura %.1f ºC%n", temperatura);
                    case (5) -> System.out.printf("Junho temperatura %.1f ºC%n", temperatura);
                }
            }
            contador++;
        }
        entrada.close();
    }
}
