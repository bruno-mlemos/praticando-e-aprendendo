

let tempoParaAlarmarEmSegundos = 2;
let tempoAlarmandoEmSegundos = 5;

console.log(`Timer iniciado, disparando alarme em 10 segundos`)

setTimeout(() => {

    let contador = 0
    const idBeep = setInterval(() => {
        console.log(`Beep beep!`);
        contador++;

        (contador == tempoAlarmandoEmSegundos) && (clearTimeout(idBeep));
    }, 1000)

}
    , tempoParaAlarmarEmSegundos * 1000)


