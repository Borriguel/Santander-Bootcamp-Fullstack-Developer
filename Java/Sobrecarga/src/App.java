public class App {
    public static void calcularArea(double lado) {
        System.out.println("Área do quadrado = " + lado * lado + " UM²");
    }

    public static void calcularArea(double base, double altura) {
        System.out.println("Área do retângulo = " + base * altura + " UM²");
    }

    public static void calcularArea(double baseMaior, double baseMenor, double altura) {
        System.out.println("Área do trapézio = " + ((baseMaior + baseMenor) * altura) / 2 + " UM²");
    }

    public static void main(String[] args) {
        calcularArea(3);
        calcularArea(3, 5);
        calcularArea(20, 12, 10);
    }
}
