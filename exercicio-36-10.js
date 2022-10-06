let numeros = [7, 3, 5, 43, 24, 4622, 6];

let diferenca = 0;

for (let numero of numeros) {

    for (let numeroCorrido of numeros) {
        if (numeroCorrido - numero >= diferenca) {
            diferenca = numeroCorrido - numero;
        }
    }
}

console.log(diferenca);
