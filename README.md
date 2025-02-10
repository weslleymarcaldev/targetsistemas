```markdown
# Target Sistemas - Resolução de Desafios

Este repositório contém a resolução de cinco desafios propostos pela Target Sistemas. Abaixo estão os detalhes de cada desafio, os comandos testados no terminal Git Bash e os códigos implementados.

---

## Desafio 1: Cálculo de Soma

### Enunciado:
Dado o trecho de código abaixo, qual será o valor da variável `SOMA` ao final do processamento?

```javascript
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA); // Saída: 91
```

### Teste no Terminal:
```bash
node soma.js
```
**Saída:**
```
91
```

---

## Desafio 2: Verificação de Número na Sequência de Fibonacci

### Enunciado:
Dada a sequência de Fibonacci, escreva um programa que verifique se um número informado pertence à sequência.

### Código:
```javascript
function isFibonacci(num) {
    let a = 0, b = 1;

    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    if (b === num || a === num) {
        return true;
    } else {
        return false;
    }
}

const numeroInformado = 21; // Número a ser verificado

if (isFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} NÃO pertence à sequência de Fibonacci.`);
}
```

### Teste no Terminal:
```bash
node fibonacci.js
```
**Saída:**
```
21 pertence à sequência de Fibonacci.
```

---

## Desafio 3: Análise de Faturamento Mensal

### Enunciado:
Dado um vetor de faturamento diário, calcule:
- O menor valor de faturamento;
- O maior valor de faturamento;
- O número de dias em que o faturamento foi superior à média mensal.

### Código:
```javascript
const fs = require('fs');

const data = fs.readFileSync('faturamento.json');
const faturamentoMensal = JSON.parse(data).faturamento;

const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);

const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

const totalFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
const mediaMensal = totalFaturamento / diasComFaturamento.length;

const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

console.log(`Menor faturamento diário: ${menorFaturamento}`);
console.log(`Maior faturamento diário: ${maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
```

### Teste no Terminal:
```bash
node faturamento.js
```
**Saída:**
```
Menor faturamento diário: 373.7838
Maior faturamento diário: 48924.2448
Número de dias com faturamento acima da média: 10
```

---

## Desafio 4: Percentual de Representação por Estado

### Enunciado:
Calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

### Código:
```javascript
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalMensal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

const percentuais = {};
for (const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / totalMensal) * 100;
    percentuais[estado] = percentual.toFixed(2);
}

console.log("Percentual de representação por estado:");
for (const estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}
```

### Teste no Terminal:
```bash
node distribuidora.js
```
**Saída:**
```
Percentual de representação por estado:
SP: 37.53%
RJ: 20.29%
MG: 16.17%
ES: 15.03%
Outros: 10.98%
```

---

## Desafio 5: Inversão de String

### Enunciado:
Escreva um programa que inverta os caracteres de uma string sem usar funções prontas.

### Código:
```javascript
function inverterString(str) {
    let invertedString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }

    return invertedString;
}

const stringOriginal = "Olá, mundo!";
const stringInvertida = inverterString(stringOriginal);

console.log(`String original: ${stringOriginal}`);
console.log(`String invertida: ${stringInvertida}`);
```

### Teste no Terminal:
```bash
node invert.js
```
**Saída:**
```
String original: Olá, mundo!
String invertida: !odnum ,álO
```

---

## Como Executar os Códigos

1. Clone este repositório:
   ```bash
   git clone https://github.com/weslleymarcaldev/targetsistemas.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd targetsistemas
   ```

3. Execute os scripts desejados:
   ```bash
   node nome_do_arquivo.js
   ```

---

## Autor
Weslley Marcal
