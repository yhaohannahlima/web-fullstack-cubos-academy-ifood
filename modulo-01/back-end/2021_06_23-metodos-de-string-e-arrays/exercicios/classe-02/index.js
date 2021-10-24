const cpf = "12345678900";
const cnpj = "12345678000199";

// Letra a)
let arrayCPF = cpf.split("");

if (cpf.length === 11) {
    for (let i = 0; i < cpf.length; i += 4) {
        arrayCPF.splice(i + 3, 0, ".");          
    }

    arrayCPF.splice(-3, 1, "-");
    
    console.log(arrayCPF.join(""));

} else {
    console.log("CPF Inválido");
}

//----------------------------------------------------------------
// Letra b)
let arrayCNPJ = cnpj.split("");

if (cnpj.length === 14) {
    arrayCNPJ.splice(2, 0, ".");
    arrayCNPJ.splice(6, 0, ".");
    arrayCNPJ.splice(10, 0, "/");
    arrayCNPJ.splice(15, 0, "-");
    
    console.log(arrayCNPJ.join(""));

} else {
    console.log("CNPJ Inválido");
}


