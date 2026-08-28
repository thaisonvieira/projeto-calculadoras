const form = document.getElementById('formImc');
const button = document.getElementById('btn');

const calcularIMC = (altura, peso) => {
    return peso/(altura**2);
}

const classificarIMC = (imc) => {
    if (imc < 18.5) return 'Abaixo do peso';
    else if (imc < 25) return 'Peso normal';
    else if (imc < 30) return 'Sobrepeso';
    else if (imc < 35) return 'Obesidade Grau 1';
    else if (imc < 40) return 'Obesidade Grau 2';
    else return 'Obesidade Grau 3';
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

    const titulo = document.createElement('h4');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');

    const classificacaoFormatada = classificacao.toLowerCase().replaceAll(' ','-');
    
    titulo.textContent = 'RESULTADO:';
    p1.textContent = `Seu IMC é de ${imc.toFixed(2)} - `;
    p2.textContent = `${classificacao}`;
    p3.textContent = `Seu peso ideal é entre ${pesoMinimo.toFixed(2)} a ${pesoMaximo.toFixed(2)} kg`;
    p4.textContent = `Peso Ideal estimado: ${pesoIdeal.toFixed(2)} kg`;
    p2.classList.add('classificacaoIMC');
    p2.classList.add(classificacaoFormatada);
    div.style.margin = '40px 0px 0px 0px';

    div.appendChild(titulo);
    div.appendChild(p1);
    p1.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
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