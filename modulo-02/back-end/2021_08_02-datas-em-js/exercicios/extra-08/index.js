const { format } = require('date-fns');
const ptBr = require('date-fns/locale/pt-br');

function formataDataCompleta(data) {
    console.log(format(data, "dd 'de' MMMM 'de' yyyy", { locale: ptBr }));
};

function formataDataComBarra(data) {
    console.log(format(data, "dd/MM/yyyy", { locale: ptBr }));
};

function formataDataSemAno(data) {
    console.log(format(data, "d MMM", { locale: ptBr }));
};

function formataDataAbreviada(data) {
    console.log(format(data, "dd MMM yyyy", { locale: ptBr }));
};

function formataDataComDe(data) {
    console.log(format(data, "dd 'de' MMM 'de' yyyy", { locale: ptBr }));
};

function formataDataComBarraIncompleta(data) {
    console.log(format(data, "dd/MMM", { locale: ptBr }));
};

formataDataCompleta(new Date(2020, 09, 5));
formataDataComBarra(new Date(2020, 09, 5));
formataDataSemAno(new Date(2020, 09, 5));
formataDataAbreviada(new Date(2020, 09, 5));
formataDataComDe(new Date(2020, 09, 5));
formataDataComBarraIncompleta(new Date(2020, 09, 5));