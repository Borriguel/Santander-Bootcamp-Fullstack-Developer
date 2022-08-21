// Abaixo segue um exemplo de código que você pode ou não utilizar
import java.io.IOException;
import java.util.Scanner;

public class Desafio1 {
  public static void main(String[] args) throws IOException {
    Scanner scan = new Scanner(System.in);
    int T = scan.nextInt();
    
//TODO: Complete os espaços em branco com uma possível solução para o desafio

    for (int i = 0; i < T; i++) {
      int R1 = scan.nextInt();
      int R2 = scan.nextInt();
      System.out.println(R1 + R2);
    }
  }
}