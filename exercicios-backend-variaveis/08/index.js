// # Exercício 08

// ## Calculo do perímetro e área de um círculo

let area, comprimento, raio;

raio = 1;

area = Math.PI * (raio ** 2);
comprimento = 2 * Math.PI * raio;

console.log(`\nO comprimento do circulo de raio ${raio} é ${comprimento.toFixed(3)} \n\nA area de um circulo de raio ${raio} é ${area.toFixed(3)}.`);