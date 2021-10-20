// Os dados utilizados no teste foram substituídos por informações fictícias, a fim de evitar a exposição de dados sensíveis. 
//No caso de reprodução de teste, recomenda-se a utilização de uma conta real para realizar o login no site.

/// <reference types="cypress"/>

import CPFinvalido from '../support/Cadastro Inválido/CPF Inválido/index'
import {
    acessarpaginadecadastro
} from '../support/common/functions'

describe('Criar um Cadastro com um CPF inválido', () => {
    
    before (() => {
        acessarpaginadecadastro();
    })

    it('CPF Inválido', () =>{
        CPFinvalido.preencherCadastro();
        CPFinvalido.mensagemErro();
        CPFinvalido.botaoCriarconta();
    })
})