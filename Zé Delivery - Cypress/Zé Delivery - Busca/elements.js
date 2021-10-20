


const ze = require('./elements').ELEMENTS;

class buscaZe {
    acessarsite(){
         cy.visit(ze.url) 
      }
    
    acessarLogin(){
         cy.get(ze.login).click()
         cy.get(ze.cookies).click()        
      }

    preencherDados(){
         cy.get(ze.preencherEmail).type("testeQA@hotmail.com")
         cy.get(ze.preencherSenha).type("Qa-30111998")
         cy.get(ze.entrarConta).click() 
      }

    guiaBuscar(){
         cy.get(ze.confimarIdade).click()
         cy.get(ze.barradeBusca).type("Skol 269ml")
         cy.get(ze.entrarProduto).click({ force: true })
      }

    validarNomeePreço(){
         cy.get(ze.nomeProduto)
           .and('contain', 'Skol 269ml')
         cy.get(ze.preçoProduto,{timeout: 60000}).should('be.visible')
           .and('contain' , '2,19')
      }
    


}

export default new buscaZe();