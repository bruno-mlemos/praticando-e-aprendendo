const express = require(`express`);
const server = express();

let horas = 0;
let minutos = 0;
let segundos = 0;

let contador = 0;

function timeCheck(numero) {
    let numeroAtualizado = ``;
    if (numero < 10) {
        numeroAtualizado = `0${numero}`
        return numeroAtualizado;
    } else {
        return numero;
    }
}



server.get('/', (req, res) => {

    if (horas > 0) {

        res.send(`${timeCheck(horas)} horas, ${timeCheck(minutos)} minutos e ${timeCheck(segundos)} segundos`);

    } else if (minutos > 0) {

        res.send(`${timeCheck(minutos)} minutos e ${timeCheck(segundos)} segundos`);

    } else if (segundos > 0) {
        res.send(`${timeCheck(segundos)} segundos`);
    } else {
        res.send(`Cronômetro parado e zerado`);
    }

});

server.get('/iniciar', (req, res) => {

    res.send(`Cronometro iniciado!`);

    clearInterval(contador);

    contador = setInterval(() => {

        segundos++;
        if (segundos == 60) {
            minutos++;
            segundos = 0;
        }
        if (minutos == 60) {
            horas++;
            minutos = 0;
        }



    }, 1000);


});

server.get('/pausar', (req, res) => {

    res.send(`Cronometro pausado!`);
    clearInterval(contador);


});

server.get('/continuar', (req, res) => {

    res.send(`Cronometro continuando!`);

    clearInterval(contador);

    contador = setInterval(() => {

        segundos++;
        if (segundos == 60) {
            minutos++;
            segundos = 0;
        }
        if (minutos == 60) {
            horas++;
            minutos = 0;
        }

    }, 1000)


});

server.get('/zerar', (req, res) => {
    res.send(`Cronometro zerado!`);
    segundos = 0;
    minutos = 0;
    horas = 0;

});

server.listen(8000);