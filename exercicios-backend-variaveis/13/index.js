// # Exercício 13

// ## Área total de um cilindro.

let areaTotal, altura, raio;

raio = 3;
altura = 1;

areaTotal = 2 * Math.PI * raio * (raio + altura);

console.log(`A area total de um cilindro com raio ${raio} e altura ${altura} é ${areaTotal.toFixed(3)}`);
