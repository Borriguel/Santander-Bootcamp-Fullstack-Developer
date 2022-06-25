const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementById('page-title');
const botao = document.getElementById('mode-selector');
const footer = document.getElementsByTagName('footer')[0];
const darkMode = 'dark-mode';

botao.addEventListener('click', mudarTema);

function mudarTema() {
    mudarClass();
    mudarTexto();
}

function mudarClass() {
    body.classList.toggle(darkMode);
    h1.classList.toggle(darkMode);
    botao.classList.toggle(darkMode);
    footer.classList.toggle(darkMode);
    return;
}

function mudarTexto() {
    if (body.classList.contains(darkMode)) {
        botao.innerHTML = 'Light Mode';
        h1.innerHTML = 'Dark Mode ON';
        return;
    }
    else {        
        botao.innerHTML = 'Dark Mode';
        h1.innerHTML = 'Dark Mode OFF';
        return;
    }
}