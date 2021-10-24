const usuários = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
]

const maiorIdade = usuários.filter(valor => valor.idade >= 18 && valor.idade <= 65);

const possuiHabilitacao = maiorIdade.every(valor => valor.habilitado === true);

if (possuiHabilitacao) {
    console.log("Todos passaram no teste.");
} else {
    console.log("Todos precisam estar habilitados.");
}