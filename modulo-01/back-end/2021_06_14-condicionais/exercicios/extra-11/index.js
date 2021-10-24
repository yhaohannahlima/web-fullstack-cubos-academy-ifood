//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 200000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1800000;

let valorDaParcela;

// Letra a) e b)
if (rendaMensalEmCentavos >= 200000 && mesesDecorridos <= 60 && totalJaPagoPeloAluno < 1800000) {
    valorDaParcela = (rendaMensalEmCentavos * (18 / 100)) / 100;
    console.log(`O valor da parcela desse mês é R$ ${valorDaParcela}.`);
} else {
    if (rendaMensalEmCentavos < 200000) {
        console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
    } else if (mesesDecorridos > 60) {
        console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o período de 60 meses já foi alcançado.`);
    } else {
        console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o aluno já pagou o valor total de R$ ${totalJaPagoPeloAluno / 100} reais.`);
    }    
}