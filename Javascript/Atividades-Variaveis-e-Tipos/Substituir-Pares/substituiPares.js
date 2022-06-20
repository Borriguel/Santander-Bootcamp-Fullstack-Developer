function substituir(array) {
    if (!array.length) return "-1";
    if (!array) return "-1";
    for (let contador = 0; contador < array.length; contador++) {
        if (!isNaN(array[contador])){
            if (array[contador] % 2 === 0) {
                array[contador] = 0;
            }
        } else {
            return "Só aceito arrays numéricos";
        }
    }
    return array;
}
let array = [1, 3, 4, 6, 80, 33, 23, 90];
let arrayVazia = [];
let arrayTeste = ['a', 'b', 'c'];

console.log(array)
console.log(substituir(array)) // [1, 3, 0, 0, 0, 33, 23, 0]
console.log(substituir(arrayVazia)) // -1
console.log(substituir(arrayTeste)) // Só aceito arrays numéricos