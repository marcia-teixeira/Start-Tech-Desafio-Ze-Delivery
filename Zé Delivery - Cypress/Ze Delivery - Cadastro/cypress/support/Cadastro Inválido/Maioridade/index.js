const el = require('../../Common/elements').ELEMENTS;

class idadeLimite {
    
    menorIdade(){
    cy.get(el.nome).type('Teste Teste');
    cy.get(el.email).type('testezedelivery@teste.com');
    cy.get(el.senha).type('teste@1234');
    cy.get(el.cpf).type('00000000000');
    cy.get(el.celular).click({force: true}).type('99999999999');
    cy.get(el.idade).type('17');
    cy.get(el.aceitarcondicoes).click();
    cy.get(el.aceitarmarketing).click({force: true});
    }

    mensagemErro(){
        cy.get('#signup-form-input-age-error-message').should('be.visible')
    }

    botaoCriarconta() {
        cy.get(el.botaocriarconta).should('be.disabled')
    }
}

export default new idadeLimite();

