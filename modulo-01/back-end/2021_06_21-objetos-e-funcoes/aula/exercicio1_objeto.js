const pessoa = {
    nome: "José",
    idade: 30,
    altura: 1.73,
    temCNH: true,
    apelidos: ["Jr", "Juninho", "J."]
};

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, possui CNH e os seguints apelidos:
- ${pessoa.apelidos[0]}.
- ${pessoa.apelidos[1]}.`);
