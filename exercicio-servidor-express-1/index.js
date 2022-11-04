const express = require(`express`);
const server = express();

const players = [`Jose`, `Maria`, `Joao`, `Marcos`, `Fernanda`];

let index = 0;


server.get(`/`, (req, res) => {

    res.send(`É a vez de ${players[index]} jogar!`);

    index++;
    if (index > players.length - 1) {
        index = 0;
    }

});


server.listen(3000, () => console.log(`Working`));