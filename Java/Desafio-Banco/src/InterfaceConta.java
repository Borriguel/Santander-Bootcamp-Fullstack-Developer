import java.math.BigDecimal;

public interface InterfaceConta {
    void sacar(BigDecimal valor);

    void depositar(BigDecimal valor);

    void transferir(Conta contaParaTransferir, BigDecimal valor);

    void imprimirExtrato();
}
