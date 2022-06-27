interface varejo {
    nome: string,
    cnpj: number,
    tipo: 'mercado' | 'loja' | 'restaurante';
}

interface pessoa {
    nome: string,
    cpf: number
    cargo: 'consumidor' | 'funcionário' | 'dono';
}

type teste = varejo | pessoa;

const pessoa: teste = {
    nome: 'Henrique',
    cpf: 1,
    cargo: "consumidor"
}

const empresa: teste = {
    nome: 'RodoCorp',
    cnpj: 2,
    tipo: "loja"
}

console.log(pessoa);
console.log(empresa);