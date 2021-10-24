const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva (prova) {
    let nota = 0, questoesCorretas = 0;

    for (let item of prova.questoes) {        
        if (item.resposta === item.correta) {
            questoesCorretas++;
            nota += 2;
        }
    }
       
    console.log(`O aluno(a) ${prova.aluno} acertou ${questoesCorretas} questões e obteve nota ${nota}.`);
}

corrigirProva(prova);
