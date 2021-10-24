const email = "aluno@cubos.academy";

const verificaArroba = email.includes("@"); 
const verificaPonto = email.includes(".");


if (verificaArroba && verificaPonto) {
    if (email.indexOf(".") !== 0 && email.indexOf(".") !== email.length - 1) {
        console.log("E-mail válido");
    } else {
        console.log("E-mail inválido");
    }
} else {
    console.log("E-mail inválido");
}