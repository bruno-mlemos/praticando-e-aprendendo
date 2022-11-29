

let tempoParaAlarmarEmSegundos = 4;
let tempoAlarmandoEmSegundos = 5;
let tempoSonecaEmSegundos = 4;
let numeroDeSonecas = 2;

let contadorDeSonecas = 0



console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos`)

setTimeout(() => {

    let contador = 0
    const idBeep = setInterval(() => {
        console.log(`Beep beep!`);
        contador++;

        if (contador == tempoAlarmandoEmSegundos) {

            clearTimeout(idBeep);

            if (numeroDeSonecas > 0) {

                console.log(`\nSoneca ativada, próximo alarme em ${tempoSonecaEmSegundos} segundos`);

                let idSoneca = setInterval(() => {

                    let contadorSoneca = 0;

                    let idBeepSoneca = setInterval(() => {
                        console.log(`Beep beep!`);
                        contadorSoneca++;

                        if (contadorSoneca >= 5) {
                            clearTimeout(idBeepSoneca);
                        }


                    }, 1000)

                    contadorDeSonecas++;

                    (contadorDeSonecas >= numeroDeSonecas) && (clearInterval(idSoneca));

                    if (contadorDeSonecas >= numeroDeSonecas) {
                        console.log(`\nSoneca ativada, próximo alarme em ${tempoSonecaEmSegundos}segundos`);
                    }


                }, tempoSonecaEmSegundos * 1000 + tempoAlarmandoEmSegundos * 1000);


            }


        }
    }, 1000)

}
    , tempoParaAlarmarEmSegundos * 1000)


