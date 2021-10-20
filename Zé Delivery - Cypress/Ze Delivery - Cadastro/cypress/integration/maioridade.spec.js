// Os dados utilizados no teste foram substituídos por informações fictícias, a fim de evitar a exposição de dados sensíveis. 
//No caso de reprodução de teste, recomenda-se a utilização de uma conta real para realizar o login no site.

/// <reference types="cypress"/>

import idadeLimite from '../support/Cadastro Inválido/Maioridade/index'
import {
    acessarpaginadecadastro
} from '../support/common/functions'

describe('Criar um Cadastro com uma idade menor que 18 anos', () => {
    
    before (() => {
        acessarpaginadecadastro();
    })

    it ('Criar um novo cadastro com uma idade menor que 18 anos', () => {
        idadeLimite.menorIdade();
        idadeLimite.mensagemErro();
        idadeLimite.botaoCriarconta();
    })
})