function solucao(numero) {
    const tempo = [];
    for(indice = 0; indice <= numero; indice++) {
        tempo.push(indice);
    }
    
    for(i = numero; i >= 0; i--) {
        if(tempo[i] === 0) {
            console.log(tempo[i]);
            console.log("KABUM");
        } else {
            console.log(tempo[i]);
        }

    }
}