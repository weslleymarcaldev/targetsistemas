const faturamentoPorEstado =
{
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const totalMensal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);
const percentuais = {};
for (const estado in faturamentoPorEstado) 
{
    const percentual = (faturamentoPorEstado[estado] / totalMensal) * 100;
    percentuais[estado] = percentual.toFixed(2);
}
console.log("Percentual de representação por estado:");
for (const estado in percentuais) 
{
    console.log(`${estado}: ${percentuais[estado]}%`);
}