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