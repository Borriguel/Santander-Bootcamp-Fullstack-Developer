const input = document.getElementsByTagName('input')[0];

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
})