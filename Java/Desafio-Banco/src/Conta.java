import java.math.BigDecimal;

public abstract class Conta implements InterfaceConta {
    private static final int AGENCIA_PADRAO = 1;
    private static int sequencial = 1;


    protected int agencia;
    protected int numero;
    protected BigDecimal saldo = new BigDecimal(0);
    protected Cliente client;

    public Conta(Cliente client) {
        this.agencia = Conta.AGENCIA_PADRAO;
        this.numero = sequencial++;
        this.client = client;
    }

    public BigDecimal getSaldo() {
        return saldo;
    }

    public int getAgencia() {
        return agencia;
    }

    public int getNumero() {
        return numero;
    }

    @Override
    public void sacar(BigDecimal valor) {
        this.saldo = saldo.subtract(valor);
    }

    @Override
    public void depositar(BigDecimal valor) {
        this.saldo = saldo.add(valor);
    }

    @Override
    public void transferir(Conta contaParaTransferir, BigDecimal valor) {
        this.sacar(valor);
        contaParaTransferir.depositar(valor);
    }

    public int getAGENCIA_PADRAO() {
        return AGENCIA_PADRAO;
    }

    public Cliente getClient() {
        return client;
    }

    protected void getExtratoAtributos() {
        System.out.printf("Agência: %d%n", this.getAgencia());
        System.out.printf("Número: %d%n", this.getNumero());
        System.out.printf("Nome do titular: %s%n", this.getClient().getNome());
        System.out.printf("Saldo: %s%n", this.getSaldo());
    }

}
