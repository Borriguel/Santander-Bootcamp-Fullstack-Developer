interface IPessoa {
    nome: string,
    email: string,
}

interface IFuncionario extends IPessoa {
    cargo: 'gerente' | 'vendedor' | 'developer',
}

function redirecionar(pessoa: IPessoa | IFuncionario) {
    if ('cargo' in pessoa) {
        // executa algo
    }
    // executa outra coisa
}