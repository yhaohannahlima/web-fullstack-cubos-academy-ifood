const { add, isWithinInterval, getYear, getMonth, getDate, getHours, getMinutes, getSeconds } = require('date-fns');

function taValendo(inicio, solicitacao) {
    const horaDeInicio = new Date(getYear(inicio), getMonth(inicio), getDate(inicio), getHours(inicio), getMinutes(inicio), getSeconds(inicio));
    const horaDaSolicitacao = new Date(getYear(solicitacao), getMonth(solicitacao), getDate(solicitacao), getHours(solicitacao), getMinutes(solicitacao), getSeconds(solicitacao));
    const horaDeTermino = add(horaDeInicio, {
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 24,
        minutes: 0,
        seconds: 00,
      });

    console.log(isWithinInterval(horaDaSolicitacao, {
        start: horaDeInicio, 
        end: horaDeTermino
    }));
}

taValendo(new Date(2021,9,19,8,0,0),new Date(2021,9,19,7,59,59));