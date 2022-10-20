const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: []
};



curso.aulas.push({
    identificador: 1,
    nome_da_aula: "Introdução a programação"
})

curso.aulas.push({
    identificador: 2,
    nome_da_aula: "Variáveis"
})

curso.aulas.push({
    identificador: 3,
    nome_da_aula: "Condicionais"
})

curso.aulas.push({
    identificador: 4,
    nome_da_aula: "Arrays"
})
// curso.aulas.nomeDaAula = "Lógica de programaçao";

// curso.aulas.identificador = 2;
// curso.aulas.nomeDaAula = "Variáveis";

// curso.aulas.identificador = 3;
// curso.aulas.nomeDaAula = "Condicionais";

// curso.aulas.identificador = 4;
// curso.aulas.nomeDaAula = "Arrays";

console.log(curso);