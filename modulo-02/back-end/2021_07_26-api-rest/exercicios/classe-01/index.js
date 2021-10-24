const express = require('express');
const app = express();

app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158
    }
];

// LETRA A
app.get('/livros', (req, res) => {
    res.json(livros);
});

// LETRA B
app.get('/livros/:id', (req, res) => {
    const livro = livros.find(valor => valor.id === Number(req.params.id));
    const idInserido = Number(req.params.id);

    if (isNaN(idInserido) || idInserido < 0) {
        res.json(
            {
                "mensagem": "O valor do parâmetro ID da URL não é um número válido."
            });
    } else if (livro === undefined) {
        res.json(
            {
                "mensagem": "Não existe livro para o ID informado."
            });
    } else {
        res.json(livro);
    }
});

// LETRA C
let ultimoId = (livros[livros.length - 1].id) + 1;

app.post('/livros', (req, res) => {

    const novoLivro = {
        id: ultimoId,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        numPaginas: req.body.numPaginas
    }

    livros.push(novoLivro);
    ultimoId += 1;

    res.json(novoLivro);
});

// LETRA D
app.put('/livros/:id', (req, res) => {
    const indice = livros.findIndex(valor => valor.id === Number(req.params.id));
    const idInserido = Number(req.params.id);

    if (indice === -1) {
        res.json(
            {
                "mensagem": "Não existe livro a ser substituído para o ID informado."
            });
    } else {
        livros[indice] = {
            id: Number(req.params.id),
            titulo: req.body.titulo,
            autor: req.body.autor,
            ano: req.body.ano,
            numPaginas: req.body.numPaginas
        }

        res.json(
            {
                "mensagem": "Livro substituído."
            });
    }
});

// LETRA E
app.patch('/livros/:id', (req, res) => {
    const livro = livros.find(valor => valor.id === Number(req.params.id));

    if (livro === undefined) {
        res.json(
            {
                "mensagem": "Não existe livro a ser alterado para o ID informado."
            });
    } else {
        if (req.body.titulo !== undefined) {
            livro.titulo = req.body.titulo;
        }
        if (req.body.autor !== undefined) {
            livro.autor = req.body.autor;
        }
        if (req.body.ano !== undefined) {
            livro.ano = req.body.ano;
        }
        if (req.body.numPaginas !== undefined) {
            livro.numPaginas = req.body.numPaginas;
        }

        res.json(
            {
                "mensagem": "Livro alterado."
            });
    }
});

// LETRA F
app.delete('/livros/:id', (req, res) => {
    const indice = livros.findIndex(valor => valor.id === Number(req.params.id));

    if (indice !== -1) {
        livros.splice(indice, 1);
        res.json(
            {
                "mensagem": "Livro removido."
            });

    } else {
        res.json(
            {
                "mensagem": "Não existe livro a ser removido para o ID informado."
            });
    }
})

app.listen(8000);