function solucao(ano) {
    const resto = ano % 4;
    
    if(resto == 0) {
        console.log("JOGOS");        
    } else if(resto == 1) {
        console.log("MEH");
    } else if(resto == 2) {
        console.log("COPA");
    } else if(resto == 3){
        console.log("MEH");
    }
}