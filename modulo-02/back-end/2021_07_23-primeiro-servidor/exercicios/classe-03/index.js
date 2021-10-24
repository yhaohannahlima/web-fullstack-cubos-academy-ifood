const express = require("express");
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];

let rodadaDaVez = 0;
app.get("/:rodadaDaVez", (req, res) => {
    res.send(`É a vez de ${jogadores[rodadaDaVez]} jogar!`); 
    rodadaDaVez = rodadaDaVez + 1;
        
    if (rodadaDaVez === jogadores.length) {
        rodadaDaVez = 0;
    } 
});

app.listen(8000);