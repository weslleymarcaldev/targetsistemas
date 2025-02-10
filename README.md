# targetsistemas

Os comandos abaixo formam testados pelo terminal Git Bash.

1 - node soma.js
91

2 - node fibonacci.js 
21 pertence à sequência de Fibonacci.

3 - node faturamento.js
Menor faturamento diário: 373.7838
Maior faturamento diário: 48924.2448
Número de dias com faturamento acima da média: 10

4 - node distribuidora.js 
Percentual de representação por estado:
SP: 37.53%
RJ: 20.29%
MG: 16.17%
ES: 15.03%
Outros: 10.98%

5 - node invert.js 
String original: Olá, mundo!
String invertida: !odnum ,álO

---------------------------------------------------------------------------------------

1) Observe o trecho de código abaixo: 
int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
<span>Ao final do processamento, qual será o valor da variável SOMA?</span>

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) 
{
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA); // Saída: 91

2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function isFibonacci(num) 
{
    let a = 0, b = 1;
    // Gera a sequência de Fibonacci até que o valor seja maior ou igual ao número informado
    while (b < num) 
    {
        let temp = b;
        b = a + b;
        a = temp;
    }
    // Verifica se o número pertence à sequência
    if (b === num || a === num) 
    {
        return true;
    } 
    else 
    {
        return false;
    }
}
const numeroInformado = 21; // Número a ser verificado (pode ser alterado ou recebido como entrada)

// Verifica se o número pertence à sequência de Fibonacci
if (isFibonacci(numeroInformado)) 
{
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else 
{
    console.log(`${numeroInformado} NÃO pertence à sequência de Fibonacci.`);
}

3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

Arquivo JSON (faturamento.json) contenha os dados de faturamento diário de um mês:
{
  "faturamento": [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },         // Dia sem faturamento (final de semana ou feriado)
    { "dia": 5, "valor": 0.0 },         // Dia sem faturamento
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },         // Dia sem faturamento
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },        // Dia sem faturamento
    { "dia": 12, "valor": 0.0 },        // Dia sem faturamento
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },        // Dia sem faturamento
    { "dia": 19, "valor": 0.0 },        // Dia sem faturamento
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },        // Dia sem faturamento
    { "dia": 26, "valor": 0.0 },        // Dia sem faturamento
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
  ]
}

Arquivo faturamento.js:
const fs = require('fs');

// Lê o arquivo JSON
const data = fs.readFileSync('faturamento.json');
const faturamentoMensal = JSON.parse(data).faturamento;

// Filtra os dias com faturamento maior que zero
const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);

// 1. Menor valor de faturamento
const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));

// 2. Maior valor de faturamento
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

// 3. Média mensal de faturamento
const totalFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
const mediaMensal = totalFaturamento / diasComFaturamento.length;

// 4. Número de dias em que o faturamento foi superior à média mensal
const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

// Resultados
console.log(`Menor faturamento diário: ${menorFaturamento}`);
console.log(`Maior faturamento diário: ${maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);

4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

// Dados de faturamento por estado
const faturamentoPorEstado = 
{
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o valor total mensal
const totalMensal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

// Calcula o percentual de representação de cada estado
const percentuais = {};
for (const estado in faturamentoPorEstado) 
{
    const percentual = (faturamentoPorEstado[estado] / totalMensal) * 100;
    percentuais[estado] = percentual.toFixed(2); // Arredonda para 2 casas decimais
}

// Exibe os resultados
console.log("Percentual de representação por estado:");
for (const estado in percentuais) 
{
    console.log(`${estado}: ${percentuais[estado]}%`);
}

5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

// Função para inverter uma string
function inverterString(str) 
{
    let invertedString = '';

    // Percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) 
    {
        invertedString += str[i]; // Adiciona cada caractere ao início da nova string
    }

    return invertedString;
}

// String de exemplo (pode ser alterada ou recebida como entrada)
const stringOriginal = "Olá, mundo!";

// Inverte a string
const stringInvertida = inverterString(stringOriginal);

// Exibe o resultado
console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);