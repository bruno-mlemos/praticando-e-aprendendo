const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

const original = [1, 4, 12, 21, 53, 32, 44];
let soma = 0;

for (let numero of original) {
    if (numero % 2 == 0) {
        soma += numero;
    }
}

console.log(soma);
