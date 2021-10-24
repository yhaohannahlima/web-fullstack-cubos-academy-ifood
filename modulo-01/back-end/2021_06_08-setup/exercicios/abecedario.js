function solucao(letra, palavras) {
    let contador = [];

    for(let item of palavras) {        
        if(item[0] != letra) {
            contador.push(item);
        }
    }

    quantidadeDeErros = contador.length;
    console.log(quantidadeDeErros);
}