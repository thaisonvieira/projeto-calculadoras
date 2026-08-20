/**
 * Converte um número decimal em binário
 * 
 * @param {number} numero - numero decimal a ser convertido
 * @returns {string} - numero em binario
 */
const decimalParaBinario = (numero) => {
    if (numero < 2) return String(numero);
    return decimalParaBinario(Math.floor(numero / 2)) + (numero % 2);
}

export {decimalParaBinario};