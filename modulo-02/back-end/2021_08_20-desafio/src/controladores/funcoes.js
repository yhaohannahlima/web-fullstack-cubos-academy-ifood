const { format } = require('date-fns');
const { contas } = require('../bancodedados');

//contas
async function validarConta(conta) {
    //campos obrigatórios
    if (!conta.nome) {
        return "O campo 'nome' é obrigatório.";
    }

    if (!conta.cpf) {
        return "O campo 'cpf' é obrigatório.";
    }

    if (!conta.data_nascimento) {
        return "O campo 'data_nascimento' é obrigatório.";
    }

    if (!conta.telefone) {
        return "O campo 'telefone' é obrigatório.";
    }

    if (!conta.email) {
        return "O campo 'email' é obrigatório.";
    }

    if (!conta.senha) {
        return "O campo 'senha' é obrigatório.";
    }

    //numero, cpf e email únicos
    if (contas.length > 0) {
        if (contas.some(item => Number(item.usuario.numero) === Number(conta.numero))) {
            return "O 'numero' informado já está sendo utilizado por outra conta no Cubos Bank.";
        }

        if (contas.some(item => item.usuario.cpf === conta.cpf)) {
            return "O 'cpf' informado já está sendo utilizado por outra conta no Cubos Bank.";
        }

        if (contas.some(item => item.usuario.email.includes(conta.email))) {
            return "O 'email' informado já está sendo utilizado por outra conta no Cubos Bank.";
        }
    }
}

async function validarAtualizacaoDeConta(conta) {
    if(!conta.nome && !conta.cpf && !conta.data_nascimento && !conta.telefone && !conta.email && !conta.senha) {        
        return "Pelo menos uma informação do usuário deve ser passada na requisição, para realizar a atualização da conta.";
    }

    //numero, cpf e email únicos
    if (contas.length > 0) {
        if (conta.cpf && contas.some(item => item.usuario.cpf === conta.cpf)) {
            return "O 'cpf' informado já está sendo utilizado por outra conta no Cubos Bank.";
        }

        if (conta.email && contas.some(item => item.usuario.email.includes(conta.email))) {
            return "O 'email' informado já está sendo utilizado por outra conta no Cubos Bank.";
        }
    }
}

//transacoes
async function validarTransacoes(numeroConta, valor) {
    if (valor <= 0) {
        return "O valor deve ser maior que zero."
    }

    if (!valor) {
        return "O campo 'valor' é obrigatório.";
    }

    if (!numeroConta) {
        return "O campo 'numero' é obrigatório.";
    }
}

async function validarSenhaESaldo(senhaInformada, senhaContaDoUsuario, saldo, valor) {
    if (!senhaInformada) {
        return "O campo 'senha' é obrigatório.";
    }

    if (senhaInformada !== senhaContaDoUsuario) {
        return "Senha incorreta.";
    }

    if (saldo === 0 || saldo < valor) {
        return "Saldo insuficiente.";
    }
}

async function validarSaldoEExtrato(numero, senha) {    
    if (!numero) {
        return "O campo 'numero_conta' é obrigatório.";
    }

    if (!senha) {
        return "O campo 'senha' é obrigatório.";
    }
}

async function identificarConta(numeroConta, conta) {
    if (!conta) {
        return "A conta de número '" + numeroConta + "' não existe."
    }
}

async function formatarData() {
    return format(new Date(), 'yyyy-MM-dd HH:mm:ss');
}


async function error400(erro, res) {
    res.status(400);
    res.json({ mensagem: erro });
}

async function error404(erro, res) {
    res.status(404);
    res.json({ mensagem: erro });
}

module.exports = {
    validarConta,
    validarAtualizacaoDeConta,
    validarTransacoes,
    validarSenhaESaldo,
    validarSaldoEExtrato,
    identificarConta,
    formatarData,
    error400,
    error404
}