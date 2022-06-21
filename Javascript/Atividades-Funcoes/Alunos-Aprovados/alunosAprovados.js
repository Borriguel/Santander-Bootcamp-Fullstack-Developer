const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media) {
    let alunosAprovados = [];
    for (let contador = 0; contador < alunos.length; contador++) {
        const {nota, nome} = alunos[contador];
        if (nota >= media) {
            alunosAprovados.push(nome);
        }
    }
    return alunosAprovados;
}

console.log(alunosAprovados(alunos, 5));