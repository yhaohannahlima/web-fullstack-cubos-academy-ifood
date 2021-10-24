let contagem = 10;

function imprimirContagem() {
    if (contagem === 0) {
        console.log('KABUUUUUUUM');
        clearInterval(intervalId);
    } else {
        console.log(`A bomba explodirá em ${contagem} segundo${contagem === 1 ? "" : "s"}`);
        contagem--;
    }
}

imprimirContagem();
const intervalId = setInterval(imprimirContagem, 1000);