//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

if (quantidadeDeAguaIngerida < 0.8) {
    console.log("Alto risco - você está ingerindo pouquissima água, beba mais água!");

} else if (quantidadeDeAguaIngerida >= 0.8 && quantidadeDeAguaIngerida < 1.5) {
    console.log('Risco Moderado - Você está bebendo pouca água, beba mais');
} else {
    console.log("Risco baixo - Você está ingerindo uma boa quantidade de água, parabéns!");
}