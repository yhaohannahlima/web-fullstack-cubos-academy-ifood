const caractere = "y";
let categoria;

if (caractere >= 0 && caractere <= 9){
    categoria = "Número";
} else {
    if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
        categoria = "Vogal maiúscula";
    } else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
        categoria = "Vogal minúscula";
    } else {
        categoria = "Consoante";
    }
}

console.log(`O caractere pertence a categoria ${categoria}.`);



