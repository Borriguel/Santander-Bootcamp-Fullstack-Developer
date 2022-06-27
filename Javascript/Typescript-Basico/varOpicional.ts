interface IUsuario {
    nome: string,
    email: string,
    usuarioAtivo: boolean,
    cargo?: 'admin'
}

function teste(usuario: IUsuario) {
    if (usuario.cargo){
        // executa algo
    }
    // executa outra coisa caso cargo esteja ausente
}