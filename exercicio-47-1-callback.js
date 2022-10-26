const tabuada = (numero, callback) => {

    for (let i = 0; i <= 10; i++) {
        let resultado = i * numero;
        callback(resultado, numero, i);
    }
}

tabuada(5, (resultado, numero, i) => {
    console.log(`${numero} x ${i} = ${resultado}`);
});

