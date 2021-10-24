const texto = "Aprenda programar do zero na Cubos Academy";

const urlInicial = texto.toLowerCase().split(" ");

let urlAmigavel = [];

for (let i = 0; i < urlInicial.length; i++) {   
    urlAmigavel.push(urlInicial[i]);         
    
    if (i !== urlInicial.length - 1) {
        urlAmigavel.push("-");             
    } 
}

console.log(urlAmigavel.join(""));
