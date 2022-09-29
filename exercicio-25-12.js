// # Exercício 12

// ## Taxa de Juros

let taxaDeJuros, montante, capitalInicial, numeroDeMeses;

montante = 90000;
capitalInicial = 60000;
numeroDeMeses = 24;

taxaDeJuros = ((montante / capitalInicial) ** (1 / numeroDeMeses)) - 1;

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${(taxaDeJuros * 100).toFixed(4)}, pois após ${numeroDeMeses} meses você teve que pagar ${montante} reais.`);