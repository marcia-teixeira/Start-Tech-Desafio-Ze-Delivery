/// <reference types="cypress" />

// Os dados utilizados no teste foram substituídos por informações fictícias, a fim de evitar a exposição de dados
// sensíveis. No caso de reprodução do teste, recomenda-se a utilização de uma conta real para realizar o login no site.

import paginadelogin from '../support/pages/login/index'

describe('Zé Delivery', () =>{

    beforeEach(() => {
        paginadelogin.acessarlogin()                       
    })

    it('Login com email inválido',()=>{

        paginadelogin.emailinvalido()       
        paginadelogin.mensagemerroemail()
                               
    })

    it('Login com senha incorreta',()=>{
        
        paginadelogin.senhainvalida()
        paginadelogin.mensagemerrosenha()
        paginadelogin.popupsenha()
                        
    })

    it('Login com dados corretos',()=>{
        
        paginadelogin.loginvalido()
        paginadelogin.mensagemsucesso()
        paginadelogin.maior18anos()
              
    })
})