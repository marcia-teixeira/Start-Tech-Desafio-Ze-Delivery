// Os dados utilizados no teste foram substituídos por informações fictícias, a fim de evitar a exposição de dados sensíveis. 
//No caso de reprodução de teste, recomenda-se a utilização de uma conta real para realizar o login no site.

/// <reference types="cypress"/>

import SenhaInvalida from '../support/Cadastro Inválido/Senha Inválida/index'
import{
    acessarpaginadecadastro
} from '../support/Common/functions'

describe('Criar um Cadastro com ums senha inválida', () => {

    //Pré requisitos da senha: Pelo menos 1 letra minúscula, pelo menos 1 letra maiúscula, pelo menos 1 número, pelo menos 1 caracter especial, pelo menos 8 dígitos
    
    beforeEach (() => {
        acessarpaginadecadastro();
    })

    it ('Senha sem letras minúsculas', () => {
        SenhaInvalida.letraMinuscula();
        SenhaInvalida.mensagemErro();
        SenhaInvalida.botaoCriarconta();
    })
    it ('Senha sem número', () => { 
        SenhaInvalida.semNumero();
        SenhaInvalida.mensagemErro();
        SenhaInvalida.botaoCriarconta();
    })
    it ('Senha sem caracter especial', () => {
        SenhaInvalida.semCaracterespecial();
        SenhaInvalida.mensagemErro();
        SenhaInvalida.botaoCriarconta();
    })
    it ('Senha com menos de 8 dígitos', () => {
        SenhaInvalida.digitosInsuficientes();
        SenhaInvalida.mensagemErro();
        SenhaInvalida.botaoCriarconta();
    })
})