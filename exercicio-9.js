// # Exercício 09

// ## Soma dos ângulos internos de um polígono

let somaDosAngulos, quantidadeDeLados, anguloInterno;

quantidadeDeLados = 6;

somaDosAngulos = (quantidadeDeLados - 2) * 180;

anguloInterno = somaDosAngulos / quantidadeDeLados;

console.log(`\nA soma dos angulos internos é ${somaDosAngulos} \n\nO valor do angulo interno é ${anguloInterno}.`);