function isFibonacci(num) 
{
    let a = 0, b = 1;
    while (b < num) 
    {
        let temp = b;
        b = a + b;
        a = temp;
    }
    if (b === num || a === num) 
    {
        return true;
    } 
    else 
    {
        return false;
    }
}

const numeroInformado = 21;

if (isFibonacci(numeroInformado)) 
{
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} 
else 
{
    console.log(`${numeroInformado} NÃO pertence à sequência de Fibonacci.`);
}