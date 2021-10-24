function solucao(tempo, distancia) {
    if(tempo < 5) {
        totalCorrida = 600;        
    } else if(tempo >= 5 && tempo <= 60) {
        totalCorrida = (100 * tempo) + (50 * distancia);
    } else if(tempo > 60) {
        if(distancia < 100) {
            totalCorrida = 200 * distancia;
        } else if(distancia >= 100) {
            totalCorrida = 150 * distancia
        }
    }
    console.log(totalCorrida); 
}