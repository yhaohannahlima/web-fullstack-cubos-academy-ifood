function solucao(produtos) {
    let topDeLinha = 0;
    let naoTopDeLinha = 0;

    for(item of produtos) {
        if(item.preco > 10000) {
            topDeLinha += item.preco;
        } else if (item.preco <= 10000) {
            naoTopDeLinha += item.preco;
        }
    }

    let total = topDeLinha + naoTopDeLinha;

    const faturamento = {
        totalTop: topDeLinha,
        percentual: topDeLinha / total
    }

    console.log(faturamento);
}