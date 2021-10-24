const express = require("express");
const app = express();

app.use(express.json());

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

// LETRA A
// app.get("/convidados", (req, res) => {
//     res.json(convidados);
// });

// LETRA B
app.get("/convidados", (req, res) => {
    const nome = req.query.nome;
    
    if (!nome) {
        res.json(convidados);
        return;
    }
    
    const convidado = convidados.find(convidado => convidado === req.query.nome);
    
    if (!convidado) {
        res.json(
            {
                "mensagem": "O convidado buscado não está presente na lista."
            });
        return;
    }
    
    const mensagem = 
    res.json(
        {
            "mensagem": "Convidado presente."
        });
});

// LETRA C
app.post("/convidados", (req, res) => {
    const novoConvidado = req.body.nome;

    const convidado = convidados.find(convidado => convidado === novoConvidado);

    if (convidado) {
        res.json(
            {
                "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
            }
        );
    } else {
        convidados.push(novoConvidado);
        res.json(
            {
                "mensagem": "Convidado adicionado."
            }
        );
    }
});

// LETRA D
app.delete("/convidados/:nome", (req, res) => {
    const nome = req.params.nome;

    const convidado = convidados.find(convidado => convidado === nome);

    if (!convidado) {
        res.json(
            {
                "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
            }
        );
        return;
    }

    const indice = convidados.indexOf(convidado);
    const novaLista = convidados.splice(indice, 1);
    res.json(
        {
            "mensagem": "Convidado removido."
        }
    );
});

app.listen(8000);

