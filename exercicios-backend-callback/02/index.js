const tabuada = (array, callback) => {

    for (let numero of array) {
        for (let i = 0; i <= 10; i++) {
            let resultado = i * numero;
            callback(resultado, numero, i);
        }
        console.log(`________________`);
    }
}

tabuada([1, 2, 3, 4, 5, 6, 7, 8, 9], (resultado, numero, i) => {
    console.log(`${numero} x ${i} = ${resultado}`);
});

