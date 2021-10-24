const { isEmpty } = require("lodash");
const alunos = require("../dados/alunos");
const cursos = require("../dados/cursos");

function consultarAlunos(req, res) {
    res.status(200);
    res.json(alunos);
}

function consultarUmAluno(req, res) {
    if (alunos.length === 0) {
        res.status(400);
        res.json({ erro: "Não existe nenhum aluno cadastrado." });
        return;
    }

    const aluno = alunos.find(aluno => aluno.id === Number(req.params.idConsultado));

    if (isNaN(Number(req.params.idConsultado)) || req.params.idConsultado < 0) {
        res.status(400);
        res.json(
            {
                erro: "O campo 'id' deve ser um número válido."
            });
        return;
    }

    if (!aluno) {
        res.status(404);
        res.json(
            {
                erro: "O aluno " + req.params.idConsultado + " não existe."
            });
    } else {
        res.status(200);
        res.json(aluno);
    }
}

let proximoId = alunos.length === 0 ? 1 : alunos.length + 1;

function validarAluno(aluno) {
    if (!aluno.nome) {
        return "O campo 'nome' é obrigatório.";
    }

    if (!aluno.sobrenome) {
        return "O campo 'sobrenome' é obrigatório.";
    }

    if (!aluno.idade) {
        return "O campo 'idade' é obrigatório.";
    }

    if (!aluno.curso) {
        return "O campo 'curso' é obrigatório.";
    }

    const nomeDoAluno = aluno.nome.split('');
    const nome = nomeDoAluno.find(nome => nome !== ' ');

    if (aluno.nome === " " || !nome) {
        return "O campo 'nome' deve ser preenchido com um texto válido."
    }
    
    const sobrenomeDoAluno = aluno.sobrenome.split('');
    const sobrenome = sobrenomeDoAluno.find(sobrenome => sobrenome !== ' ');

    if (aluno.sobrenome === " " || !sobrenome) {
        return "O campo 'sobrenome' deve ser preenchido com um texto válido."
    }
    
    const cursoDoAluno = aluno.curso.split('');
    const curso = cursoDoAluno.find(curso => curso !== ' ');

    if (aluno.curso === " " || !curso) {
        return "O campo 'curso' deve ser preenchido com um texto válido."
    }

    if(!cursos.includes(aluno.curso)) {
        return "O campo 'curso' deve ser preenchido com um curso válido."
    }

    if (aluno.idade < 18) {
        return "O aluno deve ser maior de idade.";
    }

}

function criarAluno(req, res) {
    const erro = validarAluno(req.body);

    if (erro) {
        res.status(400);
        res.json({ erro });
        return;
    }

    const novoAluno = {
        id: proximoId,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        idade: req.body.idade,
        curso: req.body.curso,
    }

    alunos.push(novoAluno);
    proximoId++;

    res.status(201);
    res.json({});
}

function editarAluno(req, res) {
    const aluno = alunos.find(aluno => aluno.id === Number(req.params.idConsultado));

    if(!aluno) {
        res.status(400);
        res.json({ erro: "Aluno " + req.params.idConsultado + " não existe." });
        return;
    }

    const erro = validarAluno({
        nome: req.body.nome ?? aluno.nome,
        sobrenome: req.body.sobrenome ?? aluno.sobrenome,
        idade: req.body.idade ?? aluno.idade,
        curso: req.body.curso ?? aluno.curso,
    });

    if(erro) {
        res.status(400);
        res.json({ erro });
        return;
    }

    if(req.body.nome !== undefined) {
        aluno.nome = req.body.nome;
    }

    if(req.body.sobrenome !== undefined) {
        aluno.sobrenome = req.body.sobrenome;
    }

    if(req.body.idade !== undefined) {
        aluno.idade = req.body.idade;
    }

    if(req.body.curso !== undefined) {
        aluno.curso = req.body.curso;
    }

    res.json(aluno);
}

function substituirAluno(req, res) {
    const erro = validarAluno(req.body);

    if(erro) {
        res.status(400);
        res.json(erro);
        return;
    }

    if(req.body.id !== Number(req.params.idConsultado)) {
        res.status(400);
        res.json("O campo 'id' deve ser igual na rota e no corpo da requisição.");
        return;
    }

    const aluno = alunos.find(aluno => aluno.id === Number(req.params.idConsultado));

    if(aluno) {
        aluno.nome = req.body.nome;
        aluno.sobrenome = req.body.sobrenome;
        aluno.idade = req.body.idade;
        aluno.curso = req.body.curso;

        res.json(aluno);
    } else {
        const novoAluno = req.body;
        alunos.push(novoAluno);

        res.json(novoAluno);
    }

}

function excluirAluno(req, res) {
    if (alunos.length === 0) {
        res.status(400);
        res.json({ erro: "Não existe nenhum aluno cadastrado." });
        return;
    }

    const aluno = alunos.find(aluno => aluno.id === Number(req.params.idConsultado));

    if (isNaN(Number(req.params.idConsultado)) || req.params.idConsultado < 0) {
        res.status(400);
        res.json(
            {
                erro: "O campo 'id' deve ser um número válido."
            });
        return;
    }

    if (!aluno) {
        res.status(404);
        res.json(
            {
                erro: "O aluno " + req.params.idConsultado + " não existe."
            });
    } else {
        const indice = alunos.indexOf(aluno);

        alunos.splice(indice, 1);

        res.status(200);
        res.json(aluno);
    }

}

module.exports = { 
    consultarAlunos,
    consultarUmAluno,
    criarAluno,
    editarAluno,
    substituirAluno,
    excluirAluno,
};