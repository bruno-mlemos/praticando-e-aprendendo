const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];

let falsie = [];

for (let numero of original) {
    if ((numero >= 10 && numero <= 20) || numero > 100) {
        falsie.push(numero)
    }
}

console.log(falsie);

