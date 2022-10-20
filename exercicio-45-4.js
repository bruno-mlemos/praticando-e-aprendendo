let maior_idade = false;
let contador = 0;

const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32
    },
];

for (let objeto of usuarios) {

    usuarios[contador].maior_idade = objeto.idade > 17 ? true : false
    contador++;

};

console.log(usuarios)