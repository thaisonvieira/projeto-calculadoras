/* Função que converte um numero decimal para binário */
const decimalParaBinario = (numero) => {
    if (numero < 2) return String(numero);
    return decimalParaBinario(Math.floor(numero / 2)) + (numero % 2);
}

export {decimalParaBinario};