const letras = ["A", "a", "B", "C"];
let contador = 0;

for (let letra of letras) {
    if (letra === "e" || letra === "E") {
        contador++;
    }
}
if (contador == 0) {
    console.log('nenhuma letra foi encontrada')
} else {
    console.log(contador);
}