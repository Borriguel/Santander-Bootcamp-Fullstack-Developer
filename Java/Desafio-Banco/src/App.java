import java.math.BigDecimal;

public class App {
    public static void main(String[] args) {
        Cliente cliente = new Cliente();
        cliente.setNome("Rodolpho");
        Conta contaCorrente = new ContaCorrente(cliente);
        Conta contaPoupanca = new ContaPoupanca(cliente);
        contaCorrente.depositar(BigDecimal.valueOf(1200));
        contaCorrente.transferir(contaPoupanca, BigDecimal.valueOf(650));
        contaCorrente.imprimirExtrato();
        contaPoupanca.imprimirExtrato();
    }
}
