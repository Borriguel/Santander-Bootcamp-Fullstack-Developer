function verificarNumeros(x, y) {
    if (!x || !y) return 'Digite 2 números.';
    const primeiraFrase = criarPrimeiraFrase(x, y);
    const segundaFrase = criarSegundaFrase(x, y);
    return `${primeiraFrase} ${segundaFrase}`;
}

function criarPrimeiraFrase(x, y) {
    let saoIguais = '';
    if (x != y) {
        saoIguais = 'não';
    }
    return `Os números ${x} e ${y} ${saoIguais} são iguais.`;
}

function criarSegundaFrase(x, y) {
    const soma = x + y;
    const compara10 = soma > 10;
    const compara20 = soma < 20;
    let resultado10 = 'menor';
    let resultado20 = 'maior';
    if (compara10) {
        resultado10 = 'maior'
    }
    if (compara20) {
        resultado20 = 'menor'
    }
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(verificarNumeros(7, 7));