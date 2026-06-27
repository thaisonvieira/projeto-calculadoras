const form = document.querySelector('#formulario');
const output = document.querySelector('#resultado');

const converterDecimalParaBinario = (num) => {
    if (num < 1) return;
    converterDecimalParaBinario(parseInt(num/2));
    output.innerText += num % 2;
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const input = e.target.querySelector('#numero_em_decimal');
    const numeroEmDecimal = parseInt(input.value);
    
    output.innerText = '';
    converterDecimalParaBinario(numeroEmDecimal);
});