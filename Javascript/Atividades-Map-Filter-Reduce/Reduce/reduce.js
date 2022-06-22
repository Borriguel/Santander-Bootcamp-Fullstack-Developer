const array = [1, 6, 89, 43, 2];

function somarNumeros(arr) {
    return arr.reduce(function(anterior, atual) {
        console.log({anterior});
        console.log({atual});
        return anterior + atual;
    });
}

console.log(somarNumeros(array));

const precos = [{
    nome: "Sabão",
    valor: 30,
},
{
    nome: "Danoninho",
    valor: 3,
},
{
    nome: "Alcatra",
    valor: 70,
}
];
const saldo = 170;

function calcularSaldo(lista, saldo) {
    return lista.reduce(function(anterior, atual) {
        return anterior - atual.valor;
    }, saldo);
}

console.log(calcularSaldo(precos, saldo));