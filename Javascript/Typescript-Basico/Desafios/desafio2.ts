interface IPessoa {
    nome: string,
    idade: number,
    profissao: EnumProfissao,
}

enum EnumProfissao {
    Atriz,
    Padeiro,
}

let pessoa1: IPessoa = {
    nome: "maria",
    idade: 29,
    profissao: EnumProfissao.Atriz,
}

let pessoa2: IPessoa = {
    nome: "roberto",
    idade: 19,
    profissao: EnumProfissao.Padeiro,
}
let pessoa3: IPessoa = {
    nome: "laura",
    idade: 32,
    profissao: EnumProfissao.Atriz,
}

let pessoa4: IPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: EnumProfissao.Padeiro
};
