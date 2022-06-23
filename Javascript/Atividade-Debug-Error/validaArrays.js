const array = [{
    name: 'abacaxi'
},
{
    name: 'morango'
},
{
    name: 'repolho'
}];

function validaArray(array, num) {
    try {
        if (typeof array !== 'object') {
            throw new TypeError('Primeiro parâmetro não é do tipo Object');
        }
        if (!array || !num) {
            throw new ReferenceError('Parâmetro inválido');
        }
        if (typeof num !== "number") {
            throw new TypeError('Segundo parâmetro não é do tipo númerico');
        }
        if (array.length !== num) {
            throw new RangeError('Valor númerico diferente do tamanho do array');
        }

        return array;
    }
    catch (erro) {
        if (erro instanceof TypeError) {
            console.log(erro.name);
            console.log(erro.message);
        }
        else if (erro instanceof ReferenceError) {
            console.log(erro.name);
            console.log(erro.message);
        }
        else if (erro instanceof RangeError) {
            console.log(erro.name);
            console.log(erro.message);
        }
        else {
            console.log('Erro não esperado ' + erro);
        }
    }

};

console.log(validaArray(array, 3)); // [ { name: 'abacaxi' }, { name: 'morango' }, { name: 'repolho' } ]
console.log(validaArray(array, 4)); // RangeError: Valor númerico diferente do tamanho do array
console.log(validaArray([])); // ReferenceError: Parâmetro inválido
console.log(validaArray('a', 1)); // TypeError: Primeiro parâmetro não é do tipo Object
console.log(validaArray(array, '4')); // TypeError: Segundo parâmetro não é do tipo númerico