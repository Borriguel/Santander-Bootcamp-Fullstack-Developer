class ContaBancaria {
    constructor (agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;        
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return 'Valor excede saldo disponível';
        }
        this._saldo -= valor;
    }

    depositar(valor) {
        this._saldo += valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor (agencia, numero, tipo, saldo, cartaoCredito) {
        super(agencia, numero, tipo, saldo);
        this.tipo = "Corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito (valor) {
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor (agencia, numero, tipo, saldo) {
        super(agencia, numero, tipo, saldo);
        this.tipo = "Poupança";
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor (agencia, numero, tipo, saldo) {
        super(agencia, numero, tipo, saldo);
        this.tipo = "Universitária";
    }

    sacar(valor) {
        if (valor > 500) {
            return "Valor máximo para saque R$500";
        }
        this._saldo -= valor;
        return this._saldo;
    }
}

