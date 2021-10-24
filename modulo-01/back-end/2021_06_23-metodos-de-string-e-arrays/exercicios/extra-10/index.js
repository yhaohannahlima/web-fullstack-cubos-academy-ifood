const numeros = "73.855.546/0001-22";

function removerPontuacao (numerosCPFCNPJ) {
    if (numerosCPFCNPJ.length === 14) {
        console.log(`${numerosCPFCNPJ.replace('-','').split('.').join('')}`)
    } else {
        console.log(`${numerosCPFCNPJ.replace('-','').replace('/','').split('.').join('')}`)
    } 
}

removerPontuacao(numeros);