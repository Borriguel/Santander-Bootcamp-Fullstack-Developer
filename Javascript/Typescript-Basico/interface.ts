interface veiculo {
    tipo: 'carro' | 'moto',
    nome: string,
    valor: number,
    acelerar(): void
}

const murcielago: veiculo = {
    nome: 'Lamborghini Murciélago',
    tipo: "carro",
    valor: 1782000,
    acelerar() {
        console.log('ruuuuuuuuuuuum');
    },
}

const ninja: veiculo = {
    nome: 'Kawasaki Ninja',
    tipo: "moto",
    valor: 20000,
    acelerar() {
        console.log('Vrummmmmmm');
    },
}

console.log(murcielago);
console.log(murcielago.acelerar());
console.log(ninja);
console.log(ninja.acelerar());