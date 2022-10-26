const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];
duracaoRodada = (10 / jogadores.length) * 1000;

let i = 1


console.log(jogadores[0]);

const functionRodada = () => {


    console.log(jogadores[i]);

    i++;

    if (i == jogadores.length) {
        console.log(`\nA rodada terminou`);

        clearInterval(idRodada);
    }

}

const idRodada = setInterval(functionRodada, duracaoRodada);