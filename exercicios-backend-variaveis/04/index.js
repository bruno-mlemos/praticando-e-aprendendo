// # Exercício 04

// ## Calcular juros compostos

let montante, capital, taxaFixaDeJuros, tempoMeses;

capital = 1000;
taxaFixaDeJuros = 0.125;
tempoMeses = 5;

montante = capital * ((1 + taxaFixaDeJuros) ** tempoMeses);

console.log(`O montante será de aproximadamente ${montante.toFixed(0)} reais`);