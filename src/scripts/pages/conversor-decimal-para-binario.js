const form = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const converterDecimalParaBinario = (num) => {
    if (num < 1) return;
    converterDecimalParaBinario(parseInt(num/2));
    resultado.innerText += num % 2;
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const input = e.target.querySelector('#numeroEmDecimal');
    const numeroEmDecimal = parseInt(input.value);
    
    resultado.innerText = '';
    converterDecimalParaBinario(numeroEmDecimal);
});