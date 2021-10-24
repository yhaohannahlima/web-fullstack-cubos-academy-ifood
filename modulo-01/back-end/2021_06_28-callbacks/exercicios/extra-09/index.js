const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
];

const programadoresMaioresDe20 = pessoas.filter(valor => valor.profissao === 'Programador' && valor.idade > 20);
console.log(programadoresMaioresDe20);


const jornalistasMaioresDe30 = pessoas.filter(valor => valor.profissao === 'Jornalista' && valor.idade > 30);
console.log(jornalistasMaioresDe30);


const programadoresEJornalistasJovens = pessoas.filter(valor => valor.profissao === 'Programador' && valor.idade <= 29 || valor.profissao === 'Jornalista' && valor.idade <= 29);
console.log(programadoresEJornalistasJovens);