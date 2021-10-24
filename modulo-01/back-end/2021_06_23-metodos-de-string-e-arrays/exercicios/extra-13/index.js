const nomeArquivo = 'Foto da Familia.docx';

function validarExtensao (nomeDoArquivo) {
    if (nomeDoArquivo.includes('.jpg') || nomeDoArquivo.includes('.jpeg') || nomeDoArquivo.includes('.gif') || nomeDoArquivo.includes('.png')) {
        console.log('Arquivo válido');
    } else {
        console.log('Arquivo inválido');
    }
}

validarExtensao(nomeArquivo);