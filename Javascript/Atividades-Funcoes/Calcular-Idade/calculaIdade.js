const cr7 = {
    nome: "Cristiano Ronaldo",
    idade: 37
}

const neymar = {
    nome: "Neymar Júnior",
    idade: 30
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(neymar, 3));
console.log(calculaIdade.apply(cr7, [10]));