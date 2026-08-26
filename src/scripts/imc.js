const form = document.getElementById('formImc');
const button = document.getElementById('btn');

const calcularIMC = (altura, peso) => {
    return peso/(altura**2);
}

const classificarIMC = (imc) => {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 25) {
        return 'Peso normal';
    } else if (imc < 30) {
        return 'Sobrepeso';
    } else if (imc < 35) {
        return 'Obesidade Grau I';
    } else if (imc < 40) {
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
}

const calcularPesoIdeal = (altura, sexo) => {
    altura = altura*100; // Converte a altura de metros para centimentros
    if (sexo == 'F') {
        return ((altura - 100) - ((altura - 150) / 2));
    } 
    if (sexo == 'M') {
        return ((altura - 100) - ((altura - 150) / 4));
    }
}

const calcularPesoMinimo = (altura) => {
    return (18.5 * (altura**2));
}

const calcularPesoMaximo = (altura) => {
    return (24.9 * (altura**2));
} 

const gerarRelatorio = (imc, classificacao, pesoIdeal, pesoMinimo, pesoMaximo) => {
    const div = document.getElementById('resultado');
    div.textContent = '';
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p5);
    div.appendChild(p6);
    p1.textContent = 'RESULTADO:';
    p2.textContent = `IMC: ${imc.toFixed(2)}.`;
    p3.textContent = `Classificação: ${classificacao}.`;
    p4.textContent = `Peso Mínimo: ${pesoMinimo.toFixed(2)}.`;
    p5.textContent = `Peso Ideal estimado: ${pesoIdeal.toFixed(2)} kg.`;
    p6.textContent = `Peso Máximo: ${pesoMaximo.toFixed(2)}.`;
}


form.addEventListener('submit', e => {
    e.preventDefault();

    const altura = Number(e.target.querySelector("#altura").value);
    const peso = Number(e.target.querySelector('#peso').value);
    const sexo = e.target.querySelector('input[name="sexo"]:checked').value;

    const imc = calcularIMC(altura, peso);
    const classificacao = classificarIMC(imc);
    const pesoIdeal = calcularPesoIdeal(altura, sexo);
    const pesoMinimo = calcularPesoMinimo(altura);
    const pesoMaximo = calcularPesoMaximo(altura);
    
    gerarRelatorio(imc, classificacao, pesoIdeal, pesoMinimo, pesoMaximo);
});