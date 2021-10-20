// Os dados utilizados no teste foram substituídos por informações fictícias, a fim de evitar a exposição de dados sensíveis. 
//No caso de reprodução de teste, recomenda-se a utilização de uma conta real para realizar o login no site.

/// <reference types="cypress"/>

import CadastroValido from '../support/Cadastro Válido/index'
import {
    acessarpaginadecadastro
} from '../support/common/functions'

describe('Criar um Cadastro válido', () => {
    
    before (() => {
        acessarpaginadecadastro();
    })

    it('Criar um cadastro válido', () =>{
        CadastroValido.preencherCadastro();
        CadastroValido.criarConta();
    })
})