const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomesComA = [];

for (let nome of nomes) {
    if (nome[0] === "A" || nome[0] === "a") {
        nomesComA.push(nome);
    }
}

console.log(nomesComA);
