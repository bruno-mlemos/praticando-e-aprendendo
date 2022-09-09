// # Exercício 07

// ## Casos de COVID - 19

let populacaoInfectada, transmissao, tempo, totalInfectados;


populacaoInfectada = 1000;
transmissao = 4;
tempo = 7;

totalInfectados = populacaoInfectada * (transmissao ** (tempo / 7));

console.log(`A população infectada depois de ${tempo} dias sera de ${totalInfectados} pessoas`);



