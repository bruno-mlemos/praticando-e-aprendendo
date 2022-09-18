const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui

if (jogada1 === "pedra") {

    if (jogada2 === "pedra") {
        console.log("empate")
    }

    if (jogada2 === "tesoura") {
        console.log("jogada 1 venceu")
    }

    if (jogada2 === "papel") {
        console.log("jogada 2 venceu")
    }
}

if (jogada1 === "tesoura") {

    if (jogada2 === "tesoura") {
        console.log("empate")
    }

    if (jogada2 === "papel") {
        console.log("jogada 1 venceu")
    }

    if (jogada2 === "pedra") {
        console.log("jogada 2 venceu")
    }
}

if (jogada1 === "papel") {

    if (jogada2 === "papel") {
        console.log("empate")
    }

    if (jogada2 === "tesoura") {
        console.log("jogada 2 venceu")
    }

    if (jogada2 === "pedra") {
        console.log("jogada 1 venceu")
    }
}