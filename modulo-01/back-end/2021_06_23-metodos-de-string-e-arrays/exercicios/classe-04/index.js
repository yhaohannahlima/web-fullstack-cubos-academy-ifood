let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

// 1ª regra
if (identificador.length < 6) {
    identificador = identificador.padStart(6, "0");
}

// 2ª regra
nome = nome.split(" ");
let letraInicial = "";

for (let i = 0; i < nome.length; i++) {
    letraInicial = nome[i];
    letraInicial = letraInicial.replace(letraInicial[0], letraInicial[0].toUpperCase()); 
    nome.splice(i, 1, letraInicial); 
}

// 3ª regra
email = email.trim();

console.log(identificador);
console.log(nome.join(" "));
console.log(email);

// 4ª regra
console.log(tags.join(", "));

