const pessoas = [
    {
        nome: "Diego",
        idade: 57
    },

    {
        nome: "Joana",
        idade: 2
    },

    {
        nome: "Sandro",
        idade: 57
    },

    {
        nome: "Maria",
        idade: 25
    }

]

pessoas.sort((a, b) => {
    if (a.idade < b.idade) {
        return -1;
    } else if (a.idade > b.idade) {
        return 1;
    } else {
        return a.nome.localeCompare(b.nome);
    }
});

console.log(pessoas);