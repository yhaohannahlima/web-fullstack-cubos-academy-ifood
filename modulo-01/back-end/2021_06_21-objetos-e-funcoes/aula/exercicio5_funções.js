function apresentar(pessoa) {
    if (pessoa.idade <= 25) {
        console.log(`Olá! Sou ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
    } else if (pessoa.idade <= 65) {
        console.log(`Olá! Sou ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
    } else {
        console.log(`Olá! Sou ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`);
    }
}

let jose = {
    nome: "José",
    idade: 72,
    profissao: "professor",
    altura: 1.73
};

apresentar(jose);

let joao = {
    nome: "João",
    idade: 12,
    profissao: "estudante",
    altura: 1.40
};

apresentar(joao);

let pedro = {
    nome: "Pedro",
    idade: 30,
    profissao: "médico",
    altura: 1.90
};

apresentar(pedro);