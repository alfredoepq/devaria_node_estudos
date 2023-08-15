const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const validarNumeroInformado = (numero) => {
    const somenteNumero = Number(numero);
    if (!somenteNumero) {
        console.log('Esse não é um número válido');
    }
    return somenteNumero;
}


readline.question('Digite um número: ', numero1 => {
   const numeroValidado1 = validarNumeroInformado(numero1);

   if (numeroValidado1) {
    readline.question('Favor digite o segundo número: ', numero2 => {
        const numeroValidado2 = validarNumeroInformado(numero2);
        if (numeroValidado2) {
            readline.question('Me informe qual operador deseja para realizar a operação: ', operador => {
                switch (operador) {
                    case '+':
                        const soma = Number(numero1) + Number(numero2);
                        console.log(`O resultado dessa soma é ${soma.toFixed(2)}`);
                        break;
                    case '-':
                        const subtracao = numero1 - numero2;
                        console.log(`O resultado dessa subtração é ${subtracao}`);
                        break;
                    case '*':
                        const multiplicacao = numero1 * numero2;
                        console.log(`O resultado dessa multiplicação é ${multiplicacao}`);
                        break;
                    case '/':
                        const divisao = numero1 / numero2;
                        console.log(`O resultado dessa divisão é ${divisao}`);
                        break;
                    default:
                        console.log('Esse não é um operador válido');
                        break;
                }
            })
        }
    })
   }
})