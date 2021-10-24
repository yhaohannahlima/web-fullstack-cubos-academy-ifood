const comentario = "Esse covid é muito perigoso!";

const alteracaoComentario = comentario.toUpperCase();
const positivoParaCovid = alteracaoComentario.includes("COVID");
const positivoParaPandemia = alteracaoComentario.includes("PANDEMIA");

if (positivoParaCovid === true || positivoParaPandemia === true) {
    console.log("Comentário bloqueado por conter palavras proibidas.");
} else {
    console.log("Comentário autorizado.");
}
