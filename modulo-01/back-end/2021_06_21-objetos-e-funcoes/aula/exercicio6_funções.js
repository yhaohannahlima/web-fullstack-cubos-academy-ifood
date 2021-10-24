function jovemAdultoOuIdoso(pessoa) {
    if (pessoa.idade <= 25) {
        return "jovem"
    } else if (pessoa.idade <= 65) {
        return "adulto"
    } else {
        return "idoso"
    }
}

let pessoa = {
    nome: "José",
    idade: 72,
    profissao: "professor",
    altura: 1.73
};

let faixaEtaria = jovemAdultoOuIdoso(pessoa);
console.log(`Olá! Sou ${pessoa.nome}, sou um ${faixaEtaria} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}.`);
