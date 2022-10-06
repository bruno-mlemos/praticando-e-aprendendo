const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];
let contador = 0;

// for (let numero of original) {
//     if (numero % 2 == 0) {
//         pares.push(numero);
//     } else {
//         impares.push(numero);
//     }
// }

// while (contador < original.length) {

//     if (original[contador] % 2 == 0) {
//         pares.push(original[contador]);
//     } else {
//         impares.push(original[contador]);
//     }
//     contador++
// }

for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 == 0) {
        pares.push(original[i]);
    } else {
        impares.push(original[i]);
    }
    contador++

}

console.log(pares);
console.log(impares);