const el = require ('./elements').ELEMENTS

class paginadelogin {

      acessarlogin(){
        cy.visit(el.site)
        cy.get(el.cookies).click()
        cy.get(el.entrar).click()
      }

      loginvalido(){
        cy.get(el.email).type('desafiostarttech@teste.com.br')
        cy.get(el.senha).type('teste@1234{enter}')
      }
    
      emailinvalido(){
        cy.get(el.email).type('@gmail.com')
        cy.get(el.senha).click()
      }

      senhainvalida(){
        cy.get(el.email).type('desafiostarttech@teste.com.br')
        cy.get(el.senha).type('@Zedelivery{enter}')
      }

      mensagemerroemail(){
        cy.get(el.emailerrormessage).should('be.visible')
        .and('contain', 'Eita, esse e-mail não parece correto')
      }

      mensagemerrosenha(){
        cy.get(el.senhaerrormessage).should('be.visible')
        .and('contain', 'Senha incorreta')
      }

      popupsenha(){
        cy.get(el.popuperrormessage,{timeout:60000}).should('be.visible')
        .and('contain', 'Senha incorreta')
      }

      mensagemsucesso(){
        cy.get(el.sucessomessage).should('be.visible')
        .and('contain', 'Sucesso')
      }

      maior18anos(){
        cy.get(el.idade,{timeout:60000}).click()
      }
    }

export default new paginadelogin