const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Carlos", "Mariana"];

if (filaDeDentro.length < 5) {
    do {
        filaDeDentro.push(filaDeFora[0]);
        filaDeFora.shift();
    } while (filaDeDentro.length < 5);
}

console.log(filaDeDentro);
console.log(filaDeFora);