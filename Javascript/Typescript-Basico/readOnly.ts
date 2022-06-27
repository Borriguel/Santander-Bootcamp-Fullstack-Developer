interface IEmpresa {
    readonly nome: string,
    readonly ceo: string,
    readonly cnpj: number,
}

class Empresa implements IEmpresa {
    readonly nome: string;
    readonly ceo: string;
    readonly cnpj: number;
    
    constructor (nome: string, ceo: string, cnpj: number){
        this.nome = nome;
        this.ceo = ceo;
        this.cnpj = cnpj;
    }
}

const empresa: Readonly<Empresa> = new Empresa('Megasoft', 'Bob Doors', 111);
console.log('empresa :>> ', empresa);
