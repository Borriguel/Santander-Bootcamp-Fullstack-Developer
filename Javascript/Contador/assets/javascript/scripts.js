var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var btnDiminuir = document.getElementById('diminuir');
btnDiminuir.addEventListener('click', decrement);

var btnAumentar = document.getElementById('aumentar');
btnAumentar.addEventListener('click', increment);

function increment() {
    if (currentNumber >= 10) {
        return;
    } else {
        currentNumber++;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if (currentNumber <= 0) {
        return;
    } else {
        currentNumber--;
        currentNumberWrapper.innerHTML = currentNumber;
    }
}