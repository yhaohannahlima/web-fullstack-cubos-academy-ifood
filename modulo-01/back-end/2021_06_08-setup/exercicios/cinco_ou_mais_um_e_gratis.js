function solucao(precos) {
    let precoTotal = 0;

    if(precos.length >= 5) {
        let menor = precos[0];
    
        for(let i = 0; i < precos.length; i++) {
            if(precos[i] < menor) {
                menor = precos[i];
            } else if (precos[i] === menor) {
                menor = precos[i];
            }            
        }         
    
        for(let item of precos) {
            precoTotal += item; 
        }
        
        precoComDesconto = precoTotal - menor;
    
        console.log(precoComDesconto);
        
    } else {
        for(let item of precos) {
            precoTotal += item; 
        }

        console.log(precoTotal);    
    }
}