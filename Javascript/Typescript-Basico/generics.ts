function preencherLista<T>(array: any[], valor: T) {
    return array.map((item) => item + valor);
}

console.log(preencherLista([1, 2, 3], 7));
console.log(preencherLista(['a', 'b', 'c'], 'l'));

