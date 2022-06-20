function verificarPalindromo (texto) {
    if (!texto) return "String vazia";
    return texto.toLowerCase().split("").reverse().join("") === texto.toLowerCase();
}
console.log(verificarPalindromo("reinier")); // true

function verificarPalindromo2 (texto) {
    if (!texto) return "String vazia";
    return inverterString(texto) === texto.toLowerCase().split(" ").join("");
}

function inverterString (texto) {
    let textoReverso = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoReverso += texto[i];
    }
    return textoReverso.toLowerCase().split(" ").join("");
}

console.log(verificarPalindromo2("A dama admirou o rim da amada")); // true

function verificarPalindromo3 (texto) {
    if (!texto) return "String vazia";
    for (let i = 0; i < texto.length / 2; i++) {
        if (texto[i] !== texto[texto.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(verificarPalindromo3("gato")); // false