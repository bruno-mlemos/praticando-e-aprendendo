const numeros = [10, 54, 22, 14, 87, 284];
let indice = -1;
let temNumero = false;

for (let numero of numeros) {
    indice++;
    if (numero === 10) {
        console.log(indice);
        temNumero = true;
        break;
    }
}
if (!temNumero) {
    console.log("-1");
}
