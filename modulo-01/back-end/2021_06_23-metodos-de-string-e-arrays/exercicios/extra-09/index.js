const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda', 'Binho', 'Amanda', 'Lorena'];
const tamanhoDoGrupo = 4;

function divisaoGrupos (lista, tamanho) {
    let grupo = 1;
    
    for (let i = 0; i < lista.length; i += tamanho) {
        console.log(`Grupo ${grupo}: ${lista.slice(i, (i + tamanho)).join(', ')}`);
        grupo ++;
    }
}

divisaoGrupos(nomes, tamanhoDoGrupo);