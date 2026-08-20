import {decimalParaBinario} from "./basesNumericas.js";

const form = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', e => {
    e.preventDefault();

    const inputNumero = e.target.querySelector('#numero');
    const numero = Number(inputNumero.value);
    
    resultado.innerText = decimalParaBinario(numero);
});