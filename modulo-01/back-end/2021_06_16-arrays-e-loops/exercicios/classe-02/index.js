// cria as variáveis que serão utilizadas
const letras = ["A", "a", "B", "C", "L", "z"];

let numeroDeLetrasE = 0;
let numeroDeLetras_e = 0;
let encontrado = false;

// loop para somar quantas letras "E" ou "e" existem no array
for (let item of letras) {
    if (item === "E") {
        numeroDeLetrasE++;
        encontrado = true;
    } else if (item === "e") {
        numeroDeLetras_e++;
        encontrado = true;
    } 
}

// cria ternários para distinguir a palavra "letra" no singular ou no plural, para a mensagem que será impressa na tela
let singularOuPlural_E = numeroDeLetrasE === 1 ? "letra" : "letras";
let singularOuPlural_e = numeroDeLetras_e === 1 ? "letra" : "letras";


// imprime a mensagem na tela
if (!encontrado) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
} else {
    console.log(`Foram encontradas ${numeroDeLetrasE} ${singularOuPlural_E} "E" e ${numeroDeLetras_e} ${singularOuPlural_e} "e".`);        
}
